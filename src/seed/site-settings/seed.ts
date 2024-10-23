import { collectionSlug } from '@contentql/core'
import configPromise from '@payload-config'
import { Page } from '@payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Ora } from 'ora'

import { logo, siteSettingsData, siteSettingsDataType } from './data'

const payload = await getPayloadHMR({ config: configPromise })

const seed = async ({
  authorDetailsPage,
  tagDetailsPage,
  blogDetailsPage,
  spinner,
}: {
  authorDetailsPage: Page
  tagDetailsPage: Page
  blogDetailsPage: Page
  spinner: Ora
}) => {
  try {
    spinner.start(`Started created site-settings...`)
    const { docs: pages, totalDocs: totalPages } = await payload.find({
      collection: collectionSlug['pages'],
      where: {
        slug: {
          in: [
            'about',
            'services',
            'blogs',
            'tags',
            'authors',
            'pricing',
            'contact',
          ],
        },
      },
    })

    const nestedDocs = pages.filter(page =>
      ['about', 'services', 'pricing'].includes(page?.slug!),
    )

    const nonNestedDocs = pages.filter(
      page => !['about', 'services', 'pricing'].includes(page?.slug!),
    )

    const logoImageSeedResult = await payload.create({
      collection: 'media',
      data: { alt: logo?.alt },
      filePath: logo?.filePath,
    })

    const formattedSiteSettingsData: siteSettingsDataType = {
      ...siteSettingsData,
      general: {
        ...siteSettingsData?.general,
        faviconUrl: logoImageSeedResult?.id,
        ogImageUrl: logoImageSeedResult?.id,
      },
      navbar: {
        ...siteSettingsData?.navbar,
        logo: {
          ...siteSettingsData?.navbar?.logo,
          imageUrl: logoImageSeedResult?.id,
        },
        menuLinks: siteSettingsData?.navbar?.menuLinks?.map((link, index) => {
          // Check if it's a grouped link (menuLinkGroup)
          if (link?.group === true) {
            return {
              ...link,
              menuLinkGroup: {
                ...link?.menuLinkGroup,
                groupTitle:
                  link?.menuLinkGroup?.groupTitle || 'Default Group Title', // Ensure groupTitle is a string
                groupLinks: link?.menuLinkGroup?.groupLinks?.map(
                  (page, pageIndex) => {
                    return {
                      ...page,
                      label:
                        nestedDocs?.at(pageIndex)?.title || 'Default Label', // Ensure label is defined
                      page: {
                        relationTo: 'pages',
                        value: nestedDocs?.at(pageIndex)?.id as string,
                      },
                    }
                  },
                ),
              },
            }
          }

          // For non-group links
          return {
            ...link,
            menuLink: {
              ...link?.menuLink,
              label: nonNestedDocs?.at(index)?.title || 'Default Title', // Ensure label is defined
              page: {
                relationTo: 'pages',
                value: nonNestedDocs?.at(index)?.id as string,
              },
            },
          }
        }),
      },
      footer: {
        ...siteSettingsData?.footer,
        logo: {
          ...siteSettingsData?.navbar?.logo,
          imageUrl: logoImageSeedResult?.id,
        },
        footerLinks: siteSettingsData?.footer?.footerLinks?.map(
          (link, index) => {
            return {
              ...link,
              menuLink: {
                ...link?.menuLink,
                label: pages?.at(index)?.title || 'Default Title',
                page: {
                  relationTo: 'pages',
                  value: pages?.at(index)?.id as string,
                },
              },
            }
          },
        ),
      },
      redirectionLinks: {
        authorLink: {
          relationTo: 'pages',
          value: authorDetailsPage?.id,
        },
        blogLink: {
          relationTo: 'pages',
          value: blogDetailsPage?.id,
        },
        tagLink: {
          relationTo: 'pages',
          value: tagDetailsPage?.id,
        },
      },
    }

    const result = await payload.updateGlobal({
      slug: collectionSlug['site-settings'],
      data: formattedSiteSettingsData,
    })

    spinner.succeed(`Successfully created site-settings`)
    return result
  } catch (error) {
    spinner.succeed(`Failed to create site-settings`)
    throw error
  }
}
export default seed

import { collectionSlug } from '@contentql/core'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { fullLogo, logo, siteSettingsData, siteSettingsDataType } from './data'

const payload = await getPayloadHMR({ config: configPromise })

const seed = async () => {
  try {
    const { docs: pages, totalDocs: totalPages } = await payload.find({
      collection: collectionSlug['pages'],
      where: {
        slug: {
          in: ['about', 'services', 'blogs', 'tags', 'authors', 'pricing'],
        },
      },
    })

    console.log('total docs', { totalPages, pages })

    const fullLogoImageSeedResult = await payload.create({
      collection: 'media',
      data: { alt: fullLogo?.alt },
      filePath: fullLogo?.filePath,
    })

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
          imageUrl: fullLogoImageSeedResult?.id,
        },
        menuLinks: siteSettingsData?.navbar?.menuLinks?.map((link, index) => {
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
        }),
      },
      footer: {
        ...siteSettingsData?.footer,
        logo: {
          ...siteSettingsData?.navbar?.logo,
          imageUrl: fullLogoImageSeedResult?.id,
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
    }

    console.log('complete data', formattedSiteSettingsData)

    const result = await payload.updateGlobal({
      slug: collectionSlug['site-settings'],
      data: formattedSiteSettingsData,
    })

    return result
  } catch (error) {
    throw error
  }
}
export default seed

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Ora } from 'ora'
import { RequiredDataFromCollectionSlug } from 'payload'

import {
  AboutImageData,
  BannerImageData,
  ClientsImageData,
  CompanyImagesData,
  TeamMemberImagesData,
  VideoImageData,
  aboutPageData,
} from './data'

const payload = await getPayloadHMR({ config: configPromise })

const seed = async (spinner: Ora): Promise<any> => {
  try {
    spinner.start(`Started creating about-page...`)
    const aboutImageSeedResult = await payload.create({
      collection: 'media',
      data: { alt: AboutImageData?.alt },
      filePath: AboutImageData?.filePath,
    })

    const VideoImageSeedResult = await payload.create({
      collection: 'media',
      data: { alt: VideoImageData?.alt },
      filePath: VideoImageData?.filePath,
    })

    const clientImagesSeedResult = await Promise.allSettled(
      ClientsImageData.map(clientImagesData =>
        payload.create({
          collection: 'media',
          data: {
            alt: clientImagesData.alt,
          },
          filePath: clientImagesData.filePath,
        }),
      ),
    )

    const formattedImagesResult = clientImagesSeedResult
      .map(result =>
        result.status === 'fulfilled'
          ? result.value
          : `Failed to seed: ${result.reason}`,
      )
      .filter(result => typeof result !== 'string')

    const bannerImagesSeedResult = await Promise.allSettled(
      BannerImageData.map(BannerImagesData =>
        payload.create({
          collection: 'media',
          data: {
            alt: BannerImagesData.alt,
          },
          filePath: BannerImagesData.filePath,
        }),
      ),
    )

    const formattedBannerImagesResult = bannerImagesSeedResult
      .map(result =>
        result.status === 'fulfilled'
          ? result.value
          : `Failed to seed: ${result.reason}`,
      )
      .filter(result => typeof result !== 'string')

    const teamMemberImagesSeedResult = await Promise.allSettled(
      TeamMemberImagesData.map(memberImagesData =>
        payload.create({
          collection: 'media',
          data: {
            alt: memberImagesData.alt,
          },
          filePath: memberImagesData.filePath,
        }),
      ),
    )
    const formattedTeamMemberImagesResult = teamMemberImagesSeedResult
      .map(result =>
        result.status === 'fulfilled'
          ? result.value
          : `Failed to seed: ${result.reason}`,
      )
      .filter(result => typeof result !== 'string')

    const CompanyImagesSeedResult = await Promise.allSettled(
      CompanyImagesData.map(companyImagesData =>
        payload.create({
          collection: 'media',
          data: {
            alt: companyImagesData.alt,
          },
          filePath: companyImagesData.filePath,
        }),
      ),
    )
    const formattedCompanyImagesResult = CompanyImagesSeedResult.map(result =>
      result.status === 'fulfilled'
        ? result.value
        : `Failed to seed: ${result.reason}`,
    ).filter(result => typeof result !== 'string')

    const AboutResult: RequiredDataFromCollectionSlug<'pages'> = {
      ...aboutPageData,
      layout: aboutPageData.layout?.map((block, idx) => {
        if (block?.blockType === 'Banner') {
          return {
            ...block,
            banner_image1: formattedBannerImagesResult?.at(0)?.id,
            banner_image2: formattedBannerImagesResult?.at(1)?.id,
          }
        } else if (block?.blockType === 'VideoArea') {
          return {
            ...block,
            video_image: VideoImageSeedResult?.id,
          }
        } else if (block?.blockType === 'Team') {
          return {
            ...block,
            team_members: block?.team_members?.map((team, index) => {
              return {
                ...team,
                image: formattedTeamMemberImagesResult?.at(index)?.id,
              }
            }),
          }
        } else if (block?.blockType === 'Testimonial') {
          return {
            ...block,
            image: aboutImageSeedResult?.id,
            testimonials: block?.testimonials?.map((testimonial, index) => {
              return {
                ...testimonial,
                reviewer_image: formattedImagesResult.at(index)?.id,
              }
            }),
          }
        } else if (block?.blockType === 'OurClients') {
          return {
            ...block,
            clients: formattedCompanyImagesResult?.map(image => {
              return {
                client_logo: image?.id,
              }
            }),
          }
        }

        return block
      }),
    }
    const result = await payload.create({
      collection: 'pages',
      data: AboutResult,
    })
    spinner.succeed(`Successfully created about-page`)
  } catch (error) {
    spinner.succeed(`Failed to create about-page`)
    throw error
  }
}

export default seed

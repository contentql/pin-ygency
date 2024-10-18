import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Ora } from 'ora'
import { RequiredDataFromCollectionSlug } from 'payload'

import {
  AboutImageData,
  ClientsImageData,
  SkillsImageData,
  homePageAdvertiseImageData,
  homePageData,
  homePageHeroImageData,
  serviceImageData,
} from './data'

const payload = await getPayloadHMR({ config: configPromise })

const seed = async (spinner: Ora): Promise<any> => {
  try {
    spinner.start(`Started created home-page...`)
    const homeHeroImageSeedResult = await payload.create({
      collection: 'media',
      data: { alt: homePageHeroImageData?.alt },
      filePath: homePageHeroImageData?.filePath,
    })

    const aboutImageSeedResult = await payload.create({
      collection: 'media',
      data: { alt: AboutImageData?.alt },
      filePath: AboutImageData?.filePath,
    })

    const homeAdvertiseImageSeedResult = await payload.create({
      collection: 'media',
      data: { alt: homePageAdvertiseImageData?.alt },
      filePath: homePageAdvertiseImageData?.filePath,
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

    const skillsImagesSeedResult = await Promise.allSettled(
      SkillsImageData.map(skillImagesData =>
        payload.create({
          collection: 'media',
          data: {
            alt: skillImagesData.alt,
          },
          filePath: skillImagesData.filePath,
        }),
      ),
    )

    const formattedSkillImagesResult = skillsImagesSeedResult
      .map(result =>
        result.status === 'fulfilled'
          ? result.value
          : `Failed to seed: ${result.reason}`,
      )
      .filter(result => typeof result !== 'string')

    const servicesImagesSeedResult = await Promise.allSettled(
      serviceImageData.map(serviceImagesData =>
        payload.create({
          collection: 'media',
          data: {
            alt: serviceImagesData.alt,
          },
          filePath: serviceImagesData.filePath,
        }),
      ),
    )
    const formattedServiceImagesResult = servicesImagesSeedResult
      .map(result =>
        result.status === 'fulfilled'
          ? result.value
          : `Failed to seed: ${result.reason}`,
      )
      .filter(result => typeof result !== 'string')
    const homeResult: RequiredDataFromCollectionSlug<'pages'> = {
      ...homePageData,
      layout: homePageData.layout?.map((block, idx) => {
        if (block?.blockType === 'Hero') {
          return {
            ...block,
            hero_image: homeHeroImageSeedResult.id,
            clients: formattedImagesResult.map((image, index) => ({
              image: image.id,
            })),
          }
        } else if (block?.blockType === 'Advertise') {
          return {
            ...block,
            banner_image: homeAdvertiseImageSeedResult.id,

            clients: formattedImagesResult.map((image, index) => ({
              image: image.id,
            })),
          }
        } else if (block?.blockType === 'About') {
          return {
            ...block,
            about_image: aboutImageSeedResult?.id,
          }
        } else if (block?.blockType === 'Service') {
          return {
            ...block,
            services: block?.services?.map((service, index) => {
              return {
                ...service,
                image: formattedServiceImagesResult.at(index)?.id,
              }
            }),
          }
        } else if (block?.blockType === 'RecentWork') {
          return {
            ...block,
            recent_works: block?.recent_works?.map(recentWork => {
              return {
                ...recentWork,
                image: homeHeroImageSeedResult?.id,
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
        } else if (block?.blockType === 'Skills') {
          return {
            ...block,
            skills: block?.skills?.map((skill, index) => {
              return {
                ...skill,
                skill_image: formattedSkillImagesResult?.at(index)?.id as any,
              }
            }),
          }
        }

        return block
      }),
    }
    const result = await payload.create({
      collection: 'pages',
      data: homeResult,
    })
    spinner.succeed(`Successfully created home-page`)
    return result
  } catch (error) {
    spinner.succeed(`Failed to create home-page`)
    throw error
  }
}

export default seed

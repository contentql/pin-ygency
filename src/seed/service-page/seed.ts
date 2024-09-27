import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { RequiredDataFromCollectionSlug } from 'payload'

import { AboutImageData, ClientsImageData, ServicePageData } from './data'

const payload = await getPayloadHMR({ config: configPromise })

const seed = async (): Promise<any> => {
  try {
    const aboutImageSeedResult = await payload.create({
      collection: 'media',
      data: { alt: AboutImageData?.alt },
      filePath: AboutImageData?.filePath,
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

    const serviceResult: RequiredDataFromCollectionSlug<'pages'> = {
      ...ServicePageData,
      layout: ServicePageData.layout?.map((block, idx) => {
        if (block?.blockType === 'Testimonial') {
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
        }

        return block
      }),
    }
    const result = await payload.create({
      collection: 'pages',
      data: serviceResult,
    })
  } catch (error) {
    throw error
  }
}

export default seed

import configPromise from '@payload-config'
import { Page } from '@payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { authorDetailsPageData } from './data'

const payload = await getPayloadHMR({ config: configPromise })

const seed = async (): Promise<Page> => {
  try {
    const { docs: pages } = await payload.find({
      collection: 'pages',
    })

    const pageId = pages?.find(page => page?.slug === 'authors')?.id
    const result = await payload.create({
      collection: 'pages',
      data: { ...authorDetailsPageData, parent: pageId },
    })

    return result
  } catch (error) {
    throw error
  }
}

export default seed

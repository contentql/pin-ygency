import configPromise from '@payload-config'
import { Page } from '@payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Ora } from 'ora'

import { authorDetailsPageData } from './data'

const payload = await getPayloadHMR({ config: configPromise })

const seed = async (spinner: Ora): Promise<Page> => {
  try {
    spinner.start(`Started created author-details-page...`)
    const { docs: pages } = await payload.find({
      collection: 'pages',
    })

    const pageId = pages?.find(page => page?.slug === 'authors')?.id
    const result = await payload.create({
      collection: 'pages',
      data: { ...authorDetailsPageData, parent: pageId },
    })

    spinner.succeed(`Successfully created author-details-page`)
    return result
  } catch (error) {
    spinner.succeed(`Failed to create author-details-page`)
    throw error
  }
}

export default seed

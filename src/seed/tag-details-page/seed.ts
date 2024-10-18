import configPromise from '@payload-config'
import { Page } from '@payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Ora } from 'ora'

import { tagDetailsPageData } from './data'

const payload = await getPayloadHMR({ config: configPromise })

const seed = async (spinner: Ora): Promise<Page> => {
  try {
    spinner.start(`Started created tag-details-page...`)
    const { docs: pages } = await payload.find({
      collection: 'pages',
    })

    const pageId = pages?.find(page => page?.slug === 'tags')?.id
    const result = await payload.create({
      collection: 'pages',
      data: { ...tagDetailsPageData, parent: pageId },
    })

    spinner.succeed(`Successfully created tag-details-page`)
    return result
  } catch (error) {
    spinner.succeed(`Failed to create tag-details-page`)
    throw error
  }
}

export default seed

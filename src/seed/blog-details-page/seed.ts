import configPromise from '@payload-config'
import { Page } from '@payload-types'
import { Ora } from 'ora'
import { getPayload } from 'payload'

import { blogDetailsPageData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<Page> => {
  try {
    spinner.start(`Started created blog-details-page...`)
    const { docs: pages } = await payload.find({
      collection: 'pages',
    })

    const pageId = pages?.find(page => page?.slug === 'blogs')?.id
    const result = await payload.create({
      collection: 'pages',
      data: { ...blogDetailsPageData, parent: pageId },
    })

    spinner.succeed(`Successfully created blog-details-page`)
    return result
  } catch (error) {
    spinner.succeed(`Failed to create blog-details-page`)
    throw error
  }
}

export default seed

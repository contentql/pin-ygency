import configPromise from '@payload-config'
import { Page } from '@payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Ora } from 'ora'

import { tagsPageData } from './data'

const payload = await getPayloadHMR({ config: configPromise })

const seed = async (spinner: Ora): Promise<Page> => {
  try {
    spinner.start(`Started created tag-page...`)
    const result = await payload.create({
      collection: 'pages',
      data: tagsPageData,
    })

    spinner.succeed(`Successfully created tags-page`)
    return result
  } catch (error) {
    spinner.succeed(`Failed to create tag-page`)
    throw error
  }
}

export default seed

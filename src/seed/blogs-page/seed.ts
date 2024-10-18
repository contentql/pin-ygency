import configPromise from '@payload-config'
import { Page } from '@payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Ora } from 'ora'

import { blogsPageData } from './data'

const payload = await getPayloadHMR({ config: configPromise })

const seed = async (spinner: Ora): Promise<Page> => {
  try {
    spinner.start(`Started created blogs-page...`)
    const result = await payload.create({
      collection: 'pages',
      data: blogsPageData,
    })

    spinner.succeed(`Started created home-page...`)
    return result
  } catch (error) {
    spinner.succeed(`Failed to create blogs-page`)
    throw error
  }
}

export default seed

import configPromise from '@payload-config'
import { Page } from '@payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Ora } from 'ora'

import { authorsPageData } from './data'

const payload = await getPayloadHMR({ config: configPromise })

const seed = async (spinner: Ora): Promise<Page> => {
  try {
    spinner.start(`Started created author-page...`)
    const result = await payload.create({
      collection: 'pages',
      data: authorsPageData,
    })

    spinner.start(`Successfully created author-page`)
    return result
  } catch (error) {
    spinner.succeed(`Failed to create author-page`)
    throw error
  }
}

export default seed

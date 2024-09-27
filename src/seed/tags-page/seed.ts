import configPromise from '@payload-config'
import { Page } from '@payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { tagsPageData } from './data'

const payload = await getPayloadHMR({ config: configPromise })

const seed = async (): Promise<Page> => {
  try {
    const result = await payload.create({
      collection: 'pages',
      data: tagsPageData,
    })

    return result
  } catch (error) {
    throw error
  }
}

export default seed

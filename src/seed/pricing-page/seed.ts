import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { PricingPageData } from './data'

const payload = await getPayloadHMR({ config: configPromise })

const seed = async (): Promise<any> => {
  try {
    const result = await payload.create({
      collection: 'pages',
      data: PricingPageData,
    })
  } catch (error) {
    throw error
  }
}

export default seed

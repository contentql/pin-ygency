import { env } from '@env'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import WelcomePage from '@/components/Welcome'
import { blocksJSX } from '@/payload/blocks/blocks'
import { serverClient } from '@/trpc/serverClient'

const payload = await getPayloadHMR({
  config: configPromise,
})

interface PageProps {
  params: Promise<{ route: string[] }>
}

const Page: NextPage<PageProps> = async ({ params }) => {
  const syncParams = (await params).route

  try {
    const pageData = await serverClient.page.getPageData({
      path: syncParams,
    })

    const dataToUse = pageData?.layout
    return (
      <Suspense fallback={null}>
        <div className=''>
          {dataToUse?.map((block, index) => {
            // Casting to 'React.FC<any>' to bypass TypeScript error related to 'Params' type incompatibility.
            const Block = blocksJSX[block.blockType] as React.FC<any>

            if (Block) {
              return (
                <Block {...block} params={{ route: syncParams }} key={index} />
              )
            }

            return <h3 key={block.id}>Block does not exist </h3>
          })}
        </div>
        {/* <RenderBlocks
          pageInitialData={pageData as PageType}
          params={syncParams}
        /> */}
      </Suspense>
    )
  } catch (error: any) {
    if (error?.message === 'Pages not found') {
      return <WelcomePage />
    }
    console.error('Error: Page not found')
    notFound()
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ route: string[] }>
}): Promise<Metadata | {}> {
  const { route } = await params

  try {
    // calling the site-settings to get all the data
    const pageData = await serverClient.page.getPageData({
      path: route,
    })

    let metadata = pageData.meta

    const block = pageData.layout
      ?.filter(block => block.blockType === 'Details')
      ?.at(0)

    // checking for dynamic page
    if (
      pageData?.isDynamic &&
      block?.collectionSlug &&
      block?.collectionSlug !== 'users'
    ) {
      const { docs } = await payload.find({
        collection: block?.collectionSlug,
        where: {
          slug: {
            equals: route.at(-1),
          },
        },
        depth: 5,
      })

      const doc = docs?.at(0)

      metadata = doc?.meta || {}
    }

    if (metadata && Object.keys(metadata).length) {
      let ogImage = []
      const title = metadata.title
      const description = metadata.description

      if (metadata.image && typeof metadata.image === 'object') {
        ogImage.push({
          url: metadata.image?.url!,
          height: 630,
          width: 1200,
          alt: `og image`,
        })
      }

      return {
        title,
        description,
        // we're appending the http|https int the env variable
        metadataBase: env.PAYLOAD_URL as unknown as URL,
        openGraph: {
          title,
          description,
          images: ogImage,
        },
        twitter: {
          title,
          description,
          images: ogImage,
        },
      }
    }

    return {}
  } catch (error: any) {
    console.log('error', error?.message)
    return {}
  }
}

export default Page

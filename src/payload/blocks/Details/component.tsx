import { Params } from '../types'
import configPromise from '@payload-config'
import { Blog, DetailsType, User } from '@payload-types'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import NotFound from '@/app/(app)/not-found'

import AuthorDetails from './components/AuthorDetails'
import BlogDetails from './components/BlogDetails'
import TagDetails from './components/TagDetails'

interface DetailsProps extends DetailsType {
  params: Params
}

const Details: React.FC<DetailsProps> = async ({ params, ...block }) => {
  const payload = await getPayload({
    config: configPromise,
  })
  switch (block?.collectionSlug) {
    case 'blogs': {
      const slug = params?.route?.at(-1) ?? ''
      const { docs } = await payload.find({
        collection: 'blogs',
        draft: false,
        where: {
          slug: {
            equals: slug,
          },
        },
      })
      const { docs: blogs } = await payload.find({
        collection: 'blogs',
        draft: false,
      })
      const blog = docs.at(0)
      return !!blog ? (
        <BlogDetails blogData={blog as Blog} blogsData={blogs as Blog[]} />
      ) : (
        <NotFound />
      )
    }

    case 'tags': {
      const slug = params?.route?.at(-1) ?? ''
      const { docs: tagData } = await payload.find({
        collection: 'tags',
        where: {
          slug: {
            equals: slug,
          },
        },
      })
      const { docs: blogsData } = await payload.find({
        collection: 'blogs',
        where: {
          'tags.value': {
            contains: tagData?.at(0)?.id,
          },
        },
      })
      const tagDetails = (tagData || [])?.at(0)
      // if tag not found showing 404
      if (!tagDetails) {
        return notFound()
      }
      if (tagDetails) {
        return (
          <TagDetails
            params={params}
            blogs={blogsData}
            tagDetails={tagDetails}
          />
        )
      }
    }

    case 'users': {
      const authorName = params?.route?.at(-1) ?? ''
      const { docs: blogs } = await payload.find({
        collection: 'blogs',
        draft: false, // Optionally set draft filter
      })
      const blogsRelatedWithAuthor = blogs.filter(blog => {
        return blog.author?.find(
          blogAuthor => (blogAuthor.value as User).username === authorName,
        )
      })

      const author = Array.isArray(blogsRelatedWithAuthor?.[0]?.author)
        ? blogsRelatedWithAuthor?.[0]?.author.filter(({ value }) => {
            return (
              typeof value === 'object' &&
              value.username === params?.route?.at(-1)!
            )
          })[0]?.value
        : undefined

      return (
        <AuthorDetails
          author={author as any}
          blogsData={blogsRelatedWithAuthor as any}
          params={params}
        />
      )
    }
  }
}

export default Details

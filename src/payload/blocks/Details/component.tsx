import { Params } from '../types'
import configPromise from '@payload-config'
import { DetailsType } from '@payload-types'
import { unstable_cache } from 'next/cache'
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

      const { docs: individualBlogDocs } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'blogs',
            draft: false,
            where: {
              slug: {
                equals: slug,
              },
            },
          }),
        ['details', 'blogs', slug],
        { tags: [`details-blogs-${slug}`] },
      )()

      const { docs: blogs = [] } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'blogs',
            depth: 5,
            draft: false,
            limit: 1000,
          }),
        ['list', 'blogs'],
        { tags: ['list-blogs'] },
      )()

      const blog = individualBlogDocs.at(0)

      return !!blog ? (
        <BlogDetails blogData={blog} blogsData={blogs} />
      ) : (
        <NotFound />
      )
    }

    case 'tags': {
      const slug = params?.route?.at(-1) ?? ''

      const { docs: tagDocs } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'tags',
            where: {
              slug: {
                equals: slug,
              },
            },
          }),
        ['details', 'tags', slug],
        { tags: [`details-tags-${slug}`] },
      )()

      const tag = tagDocs?.[0]

      // if tag not found showing 404
      if (!tag) {
        return notFound()
      }

      const { docs: blogsData } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'blogs',
            where: {
              'tags.value': {
                contains: tag.id,
              },
            },
          }),
        ['details', 'blogs-by-tags', slug],
        { tags: [`details-blogs-by-tags-${slug}`] },
      )()

      return <TagDetails params={params} blogs={blogsData} tagDetails={tag} />
    }

    case 'users': {
      const authorName = params?.route?.at(-1) ?? ''

      const { docs: authorDocs } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'users',
            where: {
              username: {
                equals: authorName,
              },
            },
          }),
        ['details', 'author', authorName],
        { tags: [`details-author-${authorName}`] },
      )()

      const author = authorDocs?.[0]

      if (!author) {
        return notFound()
      }

      const { docs: blogs } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'blogs',
            draft: false,
            where: {
              'author.value': {
                equals: author.id,
              },
            },
          }),
        ['details', 'blogs-by-author', authorName],
        { tags: [`details-blogs-by-author-${authorName}`] },
      )()

      return <AuthorDetails author={author} blogsData={blogs} params={params} />
    }
  }
}

export default Details

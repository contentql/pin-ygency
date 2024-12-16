import { Params } from '../types'
import configPromise from '@payload-config'
import { ListType } from '@payload-types'
import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'
import React from 'react'

import AuthorsList from './components/AuthorsList'
import BlogsList from './components/BlogsList'
import ProductsList from './components/ProductsList'
import TagsList from './components/TagsList'

interface ListProps extends ListType {
  params: Params
}

const List: React.FC<ListProps> = async ({ params, ...block }) => {
  const payload = await getPayload({
    config: configPromise,
  })

  switch (block?.collectionSlug) {
    case 'blogs': {
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

      return <BlogsList blogs={blogs} block={block} />
    }

    case 'tags': {
      const { docs: tags = [] } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'tags',
            depth: 5,
            draft: false,
            limit: 1000,
          }),
        ['list', 'tags'],
        { tags: ['list-tags'] },
      )()

      const { docs: blogs } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'blogs',
            limit: 1000,
            select: {
              tags: true,
            },
            populate: {
              tags: {
                slug: true,
              },
            },
          }),
        ['list', 'tags', 'with-blog-count'],
        { tags: ['list-tags-with-blog-count'] },
      )()

      const tagsWithCount = tags.map(tag => {
        const count = blogs.filter(blog => {
          const blogTags = blog.tags

          if (blogTags) {
            return blogTags.find(({ value }) => {
              if (typeof value === 'number') {
                return value === tag.id
              } else {
                return value.id === tag.id
              }
            })
          }
        }).length

        return { ...tag, count }
      })

      return <TagsList tags={tagsWithCount} block={block} />
    }

    case 'users': {
      const { docs: authors = [] } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'users',
            where: {
              role: {
                equals: 'author',
              },
            },
            limit: 1000,
          }),
        ['list', 'authors'],
        { tags: ['list-authors'] },
      )()

      const { docs: blogs } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'blogs',
            limit: 1000,
            select: {
              author: true,
            },
            populate: {
              users: {
                username: true,
              },
            },
          }),
        ['list', 'authors', 'with-blog-count'],
        { tags: ['list-authors-with-blog-count'] },
      )()

      const authorsWithCount = authors.map(author => {
        const count = blogs.filter(blog => {
          const authorBlogs = blog.author

          if (authorBlogs) {
            return authorBlogs.find(({ value }) => {
              if (typeof value === 'number') {
                return value === author.id
              } else {
                return value.id === author.id
              }
            })
          }
        }).length

        return { ...author, totalDocs: count }
      })

      return <AuthorsList authors={authorsWithCount} block={block} />
    }

    case 'products': {
      const { docs: products = [] } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'products',
            limit: 1000,
          }),
        ['product'],
      )()

      return <ProductsList products={products} block={block} />
    }
  }
}

export default List

import { Params } from '../types'
import configPromise from '@payload-config'
import { Blog, ListType, Tag, User } from '@payload-types'
import { getPayload } from 'payload'
import React from 'react'

import AuthorsList from './components/AuthorsList'
import BlogsList from './components/BlogsList'
import TagsList from './components/TagsList'

interface ListProps extends ListType {
  params: Params
}

interface TagWithCountProps extends Tag {
  count: number
}
interface AuthorsWithCountProps extends User {
  totalDocs: number
}

const List: React.FC<ListProps> = async ({ params, ...block }) => {
  const payload = await getPayload({
    config: configPromise,
  })

  switch (block?.collectionSlug) {
    case 'blogs': {
      const { docs: blogs = [] } = await payload.find({
        collection: 'blogs',
        depth: 5,
        draft: false,
        limit: 1000,
      })
      return <BlogsList blogs={blogs as Blog[]} block={block} />
    }

    case 'tags': {
      const { docs: tags = [] } = await payload.find({
        collection: 'tags',
        depth: 5,
        draft: false,
        limit: 1000,
      })
      const { docs: allBlogs } = await payload.find({
        collection: 'blogs',
        limit: 1000,
        draft: false,
      })

      const tagsWithCount = tags.map(tag => ({
        ...tag,
        count: allBlogs.filter(blog => {
          const blogTags = blog.tags
          return blogTags?.find(blogTag => (blogTag.value as Tag).id === tag.id)
        }).length,
      }))

      return (
        <TagsList tags={tagsWithCount as TagWithCountProps[]} block={block} />
      )
    }

    case 'users': {
      const { docs: authors = [] } = await payload.find({
        collection: 'users',
        where: {
          role: {
            equals: 'author',
          },
        },
        limit: 1000,
      })

      const authorBlogCounts = await Promise.all(
        authors.map(async author => {
          const count = await payload.count({
            collection: 'blogs',
            where: {
              'author.value': {
                equals: author.id,
              },
            },
          })
          return { ...author, ...count }
        }),
      )

      return (
        <AuthorsList
          authors={authorBlogCounts as AuthorsWithCountProps[]}
          block={block}
        />
      )
    }
  }
}

export default List

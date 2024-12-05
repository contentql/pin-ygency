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
      return <TagsList tags={tags as Tag[]} block={block} />
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
      return <AuthorsList authors={authors as User[]} block={block} />
    }
  }
}

export default List

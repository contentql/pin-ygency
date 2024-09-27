'use client'

import { Params } from '../types'
import { Blog, ListType, Tag, User } from '@payload-types'
import React from 'react'

import { trpc } from '@/trpc/client'

import AuthorsList from './components/AuthorsList'
import BlogsList from './components/BlogsList'
import TagsList from './components/TagsList'

interface ListProps extends ListType {
  params: Params
}

const List: React.FC<ListProps> = ({ params, ...block }) => {
  switch (block?.collectionSlug) {
    case 'blogs': {
      const { data: Blogs } = trpc?.blog.getAllBlogs.useQuery()
      return <BlogsList blogs={Blogs as Blog[]} block={block} />
    }

    case 'tags': {
      const { data: tags } = trpc.tag.getAllTags.useQuery()
      return <TagsList tags={tags as Tag[]} block={block} />
    }

    case 'users': {
      const { data: authors } = trpc.author.getAllAuthorsWithCount.useQuery()

      return <AuthorsList authors={authors as User[]} block={block} />
    }
  }
}

export default List

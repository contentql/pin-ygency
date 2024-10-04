'use client'

import { Params } from '../types'
import { Blog, DetailsType, Tag } from '@payload-types'

import { trpc } from '@/trpc/client'

import AuthorDetails from './components/AuthorDetails'
import BlogDetails from './components/BlogDetails'
import TagDetails from './components/TagDetails'

interface DetailsProps extends DetailsType {
  params: Params
}

const Details: React.FC<DetailsProps> = ({ params, ...block }) => {
  switch (block?.collectionSlug) {
    case 'blogs': {
      const { data: blog } = trpc.blog.getBlogBySlug.useQuery({
        slug: params?.route.at(-1),
      })
      const { data: blogs } = trpc.blog.getAllBlogs.useQuery()
      return <BlogDetails blogData={blog as Blog} blogsData={blogs as Blog[]} />
    }

    case 'tags': {
      const { data: blogsData } = trpc.tag.getAllBlogsByTag.useQuery({
        tagSlug: params?.route.at(-1)!,
      })
      const { data: tagDetails } = trpc.tag.getTagBySlug.useQuery({
        slug: params?.route.at(-1)!,
      })
      return (
        <TagDetails
          blogs={blogsData as Blog[]}
          tagDetails={tagDetails as Tag}
          params={params}
        />
      )
    }

    case 'users': {
      const { data: author } = trpc.author.getAuthorByName.useQuery({
        authorName: params?.route.at(-1)!,
      })
      const { data: authorBlogs } = trpc.author.getBlogsByAuthorName.useQuery({
        authorName: params?.route.at(-1)!,
      })

      return (
        <AuthorDetails
          author={author as any}
          blogsData={authorBlogs as any}
          params={params}
        />
      )
    }
  }
}

export default Details

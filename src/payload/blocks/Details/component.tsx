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
      const { data: blog, isLoading: blogDataIsLoading } =
        trpc.blog.getBlogBySlug.useQuery({
          slug: params?.route.at(-1),
        })
      const { data: blogs } = trpc.blog.getAllBlogs.useQuery()
      return (
        <BlogDetails
          blogData={blog as Blog}
          blogsData={blogs as Blog[]}
          blogDataIsLoading={blogDataIsLoading}
        />
      )
    }

    case 'tags': {
      const { data: blogsData } = trpc.tag.getAllBlogsByTag.useQuery({
        tagSlug: params?.route.at(-1)!,
      })
      const { data: tagDetails, isLoading: isTagDetailsPending } =
        trpc.tag.getTagBySlug.useQuery({
          slug: params?.route.at(-1)!,
        })
      return (
        <TagDetails
          isTagDetailsPending={isTagDetailsPending}
          blogs={blogsData as Blog[]}
          tagDetails={tagDetails as Tag}
          params={params}
        />
      )
    }

    case 'users': {
      const { data: author, isLoading: isAuthorLoading } =
        trpc.author.getAuthorByName.useQuery({
          authorName: params?.route.at(-1)!,
        })
      const { data: authorBlogs } = trpc.author.getBlogsByAuthorName.useQuery({
        authorName: params?.route.at(-1)!,
      })

      return (
        <AuthorDetails
          author={author as any}
          blogsData={authorBlogs as any}
          isAuthorLoading={isAuthorLoading}
          params={params}
        />
      )
    }
  }
}

export default Details

'use client'

import { Blog, ListType, Tag } from '@payload-types'

import Empty from '@/components/Empty'
import BlogSkeleton from '@/components/skeletons/BlogSkeleton'
import { trpc } from '@/trpc/client'

import Blogs from './Blogs'

interface TagsDetails extends Tag {
  count: number
}

function BlogList({ blogs, block }: { blogs: Blog[]; block: ListType }) {
  const { data: blogsData, isLoading } = trpc.blog.getAllBlogs.useQuery(
    undefined,
    {
      initialData: blogs,
    },
  )
  return (
    <>
      <section
        className='page-banner-area overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center'
        style={{
          backgroundImage: '/assets/images/banner/banner-bg.jpg',
        }}>
        <div className='container'>
          <div className='banner-inner rpt-10'>
            <h2 className='page-title wow fadeInUp delay-0-2s'>
              {block?.title}
            </h2>
            <p className='line-clamp-3'>{block?.description}</p>
          </div>
        </div>
      </section>
      {isLoading ? (
        <BlogSkeleton />
      ) : blogs?.length <= 0 ? (
        <Empty>
          <h4 style={{ marginBottom: '40px' }}>Blogs not found</h4>
        </Empty>
      ) : (
        <Blogs blogsData={blogsData as Blog[]} />
      )}
    </>
  )
}

export default BlogList

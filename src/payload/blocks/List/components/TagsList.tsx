'use client'

import { ListType, Tag } from '@payload-types'

import { trpc } from '@/trpc/client'

import Tags from './Tags'

interface TagWithCountProps extends Tag {
  count: number
}

const TagsList = ({
  tags,
  block,
}: {
  tags: TagWithCountProps[]
  block: ListType
}) => {
  const { data, isLoading } = trpc.tag.getAllTags.useQuery(undefined, {
    initialData: tags,
  })
  return (
    <>
      <section
        className='page-banner-area overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center'
        style={{ backgroundImage: '/assets/images/banner/banner-bg.jpg' }}>
        <div className='container'>
          <div className='banner-inner rpt-10'>
            <h2 className='page-title wow fadeInUp delay-0-2s'>
              {block?.title}
            </h2>
            <p className='line-clamp-3'>{block?.description}</p>
          </div>
        </div>
      </section>
      <Tags data={data} isLoading={isLoading} />
    </>
  )
}

export default TagsList

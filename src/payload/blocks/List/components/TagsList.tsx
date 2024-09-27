import { ListType, Tag } from '@payload-types'

import Tags from './Tags'

const TagsList = ({ tags, block }: { tags: Tag[]; block: ListType }) => {
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
      <Tags />
    </>
  )
}

export default TagsList

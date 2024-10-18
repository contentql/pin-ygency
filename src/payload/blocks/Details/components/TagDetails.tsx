import Blogs from '../../List/components/Blogs'
import { Params } from '../../types'
import { Blog, Media, Tag } from '@payload-types'
import Image from 'next/image'

import Empty from '@/components/Empty'
import ImageSkeleton from '@/components/skeletons/ImageSkeleton'
import TagSkeleton from '@/components/skeletons/TagSkeleton'
import { trpc } from '@/trpc/client'

interface TagDetailsProps {
  tagDetails: Tag
  blogs: Blog[]
  params: Params
  isTagDetailsPending: boolean
}
const TagDetails: React.FC<TagDetailsProps> = ({
  tagDetails,
  blogs,
  params,
  isTagDetailsPending,
}) => {
  const { data: blogsData, isLoading } = trpc.tag.getAllBlogsByTag.useQuery(
    {
      tagSlug: params?.route.at(-1)!,
    },
    { initialData: blogs },
  )
  return (
    <div>
      {isTagDetailsPending ? (
        <ImageSkeleton />
      ) : (
        <section
          id='services'
          className='service-area-four pt-110 rpt-85 rpb-70'
          style={{
            backgroundImage: 'url(assets/images/hero/hero-two-bg.png)',
          }}>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-7'>
                <div className='section-title wow fadeInUp delay-0-2s mb-60 text-center'>
                  <div className='tag-image'>
                    <Image
                      src={(tagDetails?.tagImage as Media)?.url || ''}
                      alt={''}
                      height={150}
                      width={150}
                    />
                  </div>
                  <h2 className=' mb-15'>{tagDetails?.title}</h2>
                  <span>{tagDetails?.description}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {isLoading ? (
        <TagSkeleton />
      ) : blogsData?.length !== 0 ? (
        <Blogs blogsData={blogsData as Blog[]} />
      ) : (
        <Empty>
          <h4 style={{ marginBottom: '40px' }}>Blogs not found</h4>
        </Empty>
      )}
    </div>
  )
}

export default TagDetails

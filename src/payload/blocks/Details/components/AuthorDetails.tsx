import Blogs from '../../List/components/Blogs'
import { Params } from '../../types'
import { Blog, Media, User } from '@payload-types'
import Image from 'next/image'

import Empty from '@/components/Empty'
import BlogSkeleton from '@/components/skeletons/BlogSkeleton'
import ImageSkeleton from '@/components/skeletons/ImageSkeleton'
import { trpc } from '@/trpc/client'

interface AuthorDetailsProps {
  blogsData: Blog[]
  author: User
  params: Params
  isAuthorLoading: boolean
}

const AuthorDetails: React.FC<AuthorDetailsProps> = ({
  blogsData,
  author,
  params,
  isAuthorLoading,
}) => {
  const { data: authorBlogs, isLoading } =
    trpc.author.getBlogsByAuthorName.useQuery(
      {
        authorName: params?.route.at(-1)!,
      },
      {
        initialData: blogsData,
      },
    )

  return (
    <div>
      {isAuthorLoading ? (
        <ImageSkeleton />
      ) : (
        <section
          id='services'
          className='service-area-four pt-110 rpt-85 rpb-70'
          style={{
            backgroundImage: 'url(/assets/images/hero/hero-two-bg.png)',
          }}>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-7'>
                <div className='section-title wow fadeInUp delay-0-2s mb-60 text-center'>
                  <div className='tag-image'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image
                      src={(author?.imageUrl as Media)?.url || ''}
                      alt='Author'
                      height={150}
                      width={150}
                    />
                  </div>
                  <h2 className=' mb-15'>{author?.displayName}</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {isLoading ? (
        <BlogSkeleton />
      ) : authorBlogs?.length !== 0 ? (
        <Blogs blogsData={authorBlogs as Blog[]} />
      ) : (
        <Empty>
          <h4 style={{ marginBottom: '40px' }}>Blogs not found</h4>
        </Empty>
      )}
    </div>
  )
}

export default AuthorDetails

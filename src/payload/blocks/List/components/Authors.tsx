import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

import Empty from '@/components/Empty'
import TagSkeleton from '@/components/skeletons/TagSkeleton'
import { trpc } from '@/trpc/client'
import getSlugs from '@/utils/getSlugs'
import { useMetadata } from '@/utils/metadataContext'

const Authors = () => {
  const { data: authorsWithCount, isLoading } =
    trpc.author.getAllAuthorsWithCount.useQuery()
  const { redirectionLinks } = useMetadata()

  return isLoading ? (
    <TagSkeleton />
  ) : authorsWithCount?.length! <= 0 ? (
    <Empty>
      <h4 style={{ marginBottom: '40px' }}>Authors not found</h4>
    </Empty>
  ) : (
    <section className='blog-page-area py-130 rpy-100 rel z-1'>
      <div className='container-1290 container'>
        <div className='row'>
          {authorsWithCount?.map((author, index) => (
            <div key={index} className='col-xl-3 col-lg-4 col-sm-6'>
              <Link
                href={`${getSlugs({ redirectionLinks })?.author}${author?.username}`}>
                <div className='tag-item wow fadeInUp delay-0-2s'>
                  <div className='content'>
                    <div className='image'>
                      <Image
                        src={(author?.imageUrl as Media)?.url || ''}
                        alt='author image'
                        height={150}
                        width={150}
                      />
                    </div>
                    <div>
                      <h5>{author?.displayName}</h5>
                      <h6>
                        {author?.totalDocs}{' '}
                        {author?.totalDocs === 1 ? 'Blog' : 'Blogs'}
                      </h6>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Authors

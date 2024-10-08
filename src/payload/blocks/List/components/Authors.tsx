import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

import TagSkeleton from '@/components/skeletons/TagSkeleton'
import { trpc } from '@/trpc/client'

const Authors = () => {
  const { data: authorsWithCount, isLoading } =
    trpc.author.getAllAuthorsWithCount.useQuery()
  return isLoading ? (
    <TagSkeleton />
  ) : (
    <section className='blog-page-area py-130 rpy-100 rel z-1'>
      <div className='container-1290 container'>
        <div className='row'>
          {authorsWithCount?.map((author, index) => (
            <div key={index} className='col-xl-3 col-lg-4 col-sm-6'>
              <Link href={`/author/${author?.username}`}>
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

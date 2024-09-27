import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

import { trpc } from '@/trpc/client'

const Tags = () => {
  const { data } = trpc.tag.getAllTags.useQuery()
  return (
    <section className='blog-page-area py-130 rpy-100 rel z-1'>
      <div className='container-1290 container'>
        <div className='row'>
          {data?.map((tag, index) => (
            <div key={index} className='col-xl-3 col-lg-4 col-sm-6'>
              <Link href={`/tag/${tag?.slug}`}>
                <div className='tag-item wow fadeInUp delay-0-2s'>
                  <div className='content'>
                    <div className='image'>
                      <Image
                        src={(tag?.tagImage as Media)?.url || ''}
                        alt={(tag?.tagImage as Media)?.alt || ''}
                        height={150}
                        width={150}
                      />
                    </div>
                    <div>
                      <h5>{tag?.title}</h5>
                      <h6>
                        {tag?.count} {tag?.count === 1 ? 'Blog' : 'Blogs'}
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

export default Tags

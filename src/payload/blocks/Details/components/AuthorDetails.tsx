import Blogs from '../../List/components/Blogs'
import { Blog, Media, User } from '@payload-types'
import Image from 'next/image'

interface AuthorDetailsProps {
  blogsData: Blog[]
  author: User
}

const AuthorDetails: React.FC<AuthorDetailsProps> = ({ blogsData, author }) => {
  return (
    <div>
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
      {blogsData?.length !== 0 ? (
        <Blogs blogsData={blogsData as Blog[]} />
      ) : (
        <p>Blogs not found</p>
      )}
    </div>
  )
}

export default AuthorDetails

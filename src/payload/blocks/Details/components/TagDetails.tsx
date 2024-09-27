import Blogs from '../../List/components/Blogs'
import { Blog, Media, Tag } from '@payload-types'
import Image from 'next/image'

interface TagDetailsProps {
  tagDetails: Tag
  blogs: Blog[]
}
const TagDetails: React.FC<TagDetailsProps> = ({ tagDetails, blogs }) => {
  return (
    <div>
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

      {blogs?.length !== 0 ? (
        <Blogs blogsData={blogs as Blog[]} />
      ) : (
        <p>Blogs not found</p>
      )}
    </div>
  )
}

export default TagDetails

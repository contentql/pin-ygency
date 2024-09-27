import { Params } from '../types'
import { AdvertiseType, Media } from '@payload-types'
import Image from 'next/image'

interface AdvertiseProps extends AdvertiseType {
  params: Params
}

const Advertise: React.FC<AdvertiseProps> = ({ params, ...block }) => {
  return (
    <section className='advertise-banner-area rel z-1'>
      <div className='container-1290 container'>
        <div className='row'>
          <div className='col-lg-7 wow fadeInUp delay-0-2s'>
            <div
              className='advertise-banner style-one bgc-primary'
              style={{
                backgroundImage: 'url(assets/images/banner/add-banner-bg.png)',
              }}>
              <div className='image'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  src={
                    ((block?.banner_image as Media)?.url as string) ||
                    '/assets/images/banner/add-banner.png'
                  }
                  alt='Banner'
                  height={325}
                  width={274}
                />
              </div>
              <div className='content mt-20'>
                <span className='number'>
                  {block?.project_completion_count}
                </span>
                <h6>{block?.completion_status}</h6>
                <hr />
                <p className='line-clamp-3'>{block?.description}</p>
              </div>
            </div>
          </div>
          <div className='col-lg-5 wow fadeInUp delay-0-4s'>
            <div
              className='advertise-banner style-two bg-white'
              style={{
                backgroundImage: 'url(assets/images/banner/star-vector.png)',
              }}>
              <h3 className='line-clamp-2'>{block?.title}</h3>
              <hr className='mb-35' />
              <div className='authors-text'>
                {block?.clients
                  ?.slice(0, 3)
                  ?.map((client, idx) => (
                    <Image
                      key={idx}
                      src={(client?.image as Media)?.url as string}
                      alt='Author'
                      height={50}
                      width={50}
                    />
                  ))}

                <i className='fal fa-plus' />
                <span className='text line-clamp-2'>
                  {block?.client_description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advertise

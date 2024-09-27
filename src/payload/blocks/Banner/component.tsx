import { Params } from '../types'
import { BannerType, Media } from '@payload-types'
import Image from 'next/image'

interface BannerProps extends BannerType {
  params: Params
}
const Banner: React.FC<BannerProps> = ({ params, ...block }) => {
  return (
    <section
      className='page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1'
      style={{ backgroundImage: 'url(assets/images/hero/hero-two-bg.png)' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-10 col-lg-11'>
            <h1 className='hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s'>
              {block?.title?.split(' ')?.slice(0, 3)?.join(' ')}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                className='mxw-20'
                src={(block?.banner_image1 as Media)?.url as string}
                alt='title'
                height={98}
                width={220}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                className='mxw-40'
                src={(block?.banner_image2 as Media)?.url as string}
                alt='title'
                height={100}
                width={420}
              />
              {block?.title?.split(' ')?.slice(3)?.join(' ')}
              <span className='arrow'>
                <Image
                  className='wow fadeInLeft delay-0-6s'
                  src='/assets/images/hero/title-arrow.png'
                  alt='Arrow'
                  height={8}
                  width={440}
                />
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

import { Params } from '../types'
import { Media, VideoAreaType } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

interface VideoAreaProps extends VideoAreaType {
  params: Params
}
const VideoArea: React.FC<VideoAreaProps> = ({ params, ...block }) => {
  return (
    <div className='video-area-two rel z-1'>
      <div className='container-fluid'>
        <div className='video-part style-two wow fadeInUp delay-0-2s mb-40'>
          <Image
            src={(block?.video_image as Media)?.url || ''}
            alt={(block?.video_image as Media)?.alt || ''}
            height={605}
            width={1380}
          />
          <Link href={block?.video_link!} className='mfp-iframe video-play'>
            <i className='fas fa-play' />
          </Link>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 wow fadeInLeft delay-0-2s'>
            <div className='client-text text-lg-start pb-50 mt-40 text-center'>
              {block?.description}
            </div>
            <div className='row'>
              <div className='col-xl-10'>
                <div className='client-logo-wrap'>
                  <Link legacyBehavior href='/contact'>
                    <span className='client-logo-item'>
                      <Image
                        src='/assets/images/client-logos/client-logo-two1.png'
                        alt='Client Logo'
                        height={85}
                        width={90}
                      />
                    </span>
                  </Link>
                  <Link legacyBehavior href='/contact'>
                    <span className='client-logo-item'>
                      <Image
                        src='/assets/images/client-logos/client-logo-two2.png'
                        alt='Client Logo'
                        height={85}
                        width={90}
                      />
                    </span>
                  </Link>
                  <Link legacyBehavior href='/contact'>
                    <span className='client-logo-item'>
                      <Image
                        src='/assets/images/client-logos/client-logo-two3.png'
                        alt='Client Logo'
                        height={85}
                        width={90}
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 wow fadeInRight delay-0-2s'>
            <div className='video-year text-lg-end rel text-center'>
              1980
              <Image
                className='leaf-shape'
                src='/assets/images/video/leaf.png'
                alt='Leaf'
                height={59}
                width={99}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoArea

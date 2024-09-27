import { Params } from '../types'
import { AboutType, Media } from '@payload-types'
import Image from 'next/image'

import Counter from '@/components/common/Counter'

interface AboutProps extends AboutType {
  params: Params
}
const About: React.FC<AboutProps> = ({ params, ...block }) => {
  return (
    <section className='about-area pt-100 rpt-70 rel z-1'>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-lg-7'>
            <div className='about-content'>
              <div className='section-title wow fadeInUp delay-0-2s mb-40'>
                <span className='sub-title mb-15'>{block?.badge_title}</span>
                <h2>{block?.title}</h2>
              </div>
              <div className='text-left-border mb-65 wow fadeInUp delay-0-2s mt-60'>
                <p className='line-clamp-3'>{block?.description}</p>
              </div>
              <div className='about-counter'>
                <div className='row'>
                  {block?.percentages?.map((percentage, idx) => (
                    <div key={idx} className='col-md-4 col-sm-6'>
                      <div className='counter-item-two counter-text-wrap wow fadeInUp delay-0-2s'>
                        <Counter
                          end={percentage?.percentage}
                          extraClass={'percent'}
                        />
                        <span className='counter-title'>
                          {percentage?.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='image-border-shape wow fadeInRight delay-0-2s'>
              <Image
                src={
                  block?.about_image
                    ? ((block?.about_image as Media)?.url as string)
                    : '/assets/images/about/about-image-shape.png'
                }
                alt='About Image Shape'
                width={429}
                height={534}
              />
              <div className='bottom-border' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

import { Params } from '../types'
import { Media, ServiceType } from '@payload-types'
import Image from 'next/image'

interface ServiceProps extends ServiceType {
  params: Params
}
const Service: React.FC<ServiceProps> = ({ params, ...block }) => {
  return (
    <section
      className='service-area-four pt-110 rpt-85 pb-100 rpb-70'
      style={{ backgroundImage: 'url(assets/images/hero/hero-two-bg.png)' }}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-7'>
            <div className='section-title wow fadeInUp delay-0-2s mb-60 text-center'>
              <span className='sub-title mb-15'>{block?.badge_title}</span>
              <h2>{block?.title}</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          {block?.services?.map((service, idx) => (
            <div key={idx} className='col-xl-3 col-lg-4 col-sm-6'>
              <div className='service-four-item wow fadeInDown delay-0-2s'>
                <div className='content'>
                  {/* <div className='icon-btn'>
                    <i className={`${service?.service_icon}`} />
                    <Link legacyBehavior href='/service-details'>
                      <span className='more-btn'>
                        <i className='far fa-arrow-right' />
                      </span>
                    </Link>
                  </div> */}
                  <h5>{service?.title}</h5>
                </div>
                <div className='image'>
                  <Image
                    src={(service?.image as Media)?.url as string}
                    alt='Service'
                    height={120}
                    width={289}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service

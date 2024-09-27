import { Params } from '../types'
import { PricingSectionType } from '@payload-types'
import Link from 'next/link'

interface PricingSectionProps extends PricingSectionType {
  params: Params
}
const PricingSection: React.FC<PricingSectionProps> = ({
  params,
  ...block
}) => {
  return (
    <section
      className='pricing-area-three pb-85 rpb-55'
      style={{
        backgroundImage:
          'url(/assets/images/background/pricing-bg-dot-shape.png)',
      }}>
      <div className='container-1290 container'>
        <div className='row justify-content-center'>
          <div className='col-xl-8 col-lg-10'>
            <div className='section-title wow fadeInUp delay-0-2s mb-60 text-center'>
              <span className='sub-title mb-20'>{block?.sub_title}</span>
              <h2>{block?.title}</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          {block?.pricing?.slice(0, 3)?.map((item, index) => (
            <div key={index} className='col-xl-4 col-md-6'>
              <div className='pricing-plan-item wow fadeInUp delay-0-2s'>
                <div className='icon'>
                  <i className={item?.icons || ''} />
                </div>
                <h5>{item?.package_title}</h5>
                <span className='price-text'>
                  <span className='before'>$</span>
                  <span className='price'>{item?.price}</span>{' '}
                  <span className='after'>/{item?.price_text}</span>
                </span>
                <ul className='list-style-one'>
                  {item?.available_features?.map((feature, index) => (
                    <li key={index}>Landing Page Design</li>
                  ))}
                </ul>
                <Link legacyBehavior href={item?.button_url || '/'}>
                  <span className='theme-btn w-100'>
                    {item?.button_text} <i className='far fa-arrow-right' />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection

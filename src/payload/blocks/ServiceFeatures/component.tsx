import { Params } from '../types'
import { ServiceFeaturesType } from '@payload-types'
import Link from 'next/link'

interface ServiceFeatureProps extends ServiceFeaturesType {
  params: Params
}

const ServiceFeatures: React.FC<ServiceFeatureProps> = ({
  params,
  ...block
}) => {
  return (
    <section className='feature-three-area pb-50 rpb-20 rel z-1'>
      <div className='container-1290 container'>
        <div className='row gap-130'>
          {block?.features?.map((feature, index) => (
            <div key={index} className='col-md-6'>
              <div className='feature-item-three wow fadeInUp delay-0-2s'>
                <div className='top-part'>
                  <span className='serial-number'>{index + 1}</span>
                  <Link legacyBehavior href={feature?.url || '#'}>
                    <span className='details-btn'>
                      <i className='far fa-arrow-right' />
                    </span>
                  </Link>
                </div>
                <div className='content'>
                  <h4>
                    <Link legacyBehavior href={feature?.url || '#'}>
                      {feature?.title}
                    </Link>
                  </h4>
                  <p>{feature?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceFeatures

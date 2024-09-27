import { Params } from '../types'
import { ServiceBannerType } from '@payload-types'
import Image from 'next/image'

interface ServiceBannerProps extends ServiceBannerType {
  params: Params
}

const ServiceBanner: React.FC<ServiceBannerProps> = ({ params, ...block }) => {
  return (
    <section
      className='page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1'
      style={{ backgroundImage: 'url(assets/images/hero/hero-two-bg.png)' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h1 className='hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s'>
              {block?.title?.split(' ')?.slice(0, 3)?.join(' ')}
              <Image
                className='mxw-10 leaf'
                src='/assets/images/banner/leaf.png'
                alt='Leaf'
                height={138}
                width={109}
              />
              {block?.title?.split(' ')?.slice(3)?.join(' ')}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceBanner

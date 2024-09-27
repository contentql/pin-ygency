import { Params } from '../types'
import { ContactType } from '@payload-types'
import Link from 'next/link'

interface ContactProps extends ContactType {
  params: Params
}
const Contact: React.FC<ContactProps> = ({ params, ...block }) => {
  return (
    <section className='work-with-area pb-150 rpb-145 rel z-1'>
      <div className='container'>
        <div className='row justify-content-center pb-45 rpb-25'>
          <div className='col-xl-7 col-lg-9'>
            <div className='section-title wow fadeInUp delay-0-2s text-center'>
              <span className='sub-title mb-15'>{block?.sub_title}</span>
              <h2>{block?.title}</h2>
              <Link legacyBehavior href={block?.button_url || '/'}>
                <span className='explore-more mt-30 text-start'>
                  <i className='fas fa-arrow-right' />{' '}
                  <span>{block?.button_text}</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <span className='big-text light-opacity'>{block?.background_text}</span>
    </section>
  )
}

export default Contact

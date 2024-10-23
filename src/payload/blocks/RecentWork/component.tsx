import { Params } from '../types'
import { Media, RecentWorkType } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

interface RecentWorkProps extends RecentWorkType {
  params: Params
}

const RecentWork: React.FC<RecentWorkProps> = ({ params, ...block }) => {
  return (
    <section className='project-timeline-two-area pt-130 rpt-100 rel z-1'>
      <div className='container-1290 container'>
        <div className='row'>
          <div className='col-xl-6 col-lg-8'>
            <div className='section-title mb-70 rmb-30 wow fadeInUp delay-0-2s'>
              <span className='sub-title mb-15'>{block?.badge_title}</span>
              <h2>{block?.title}</h2>
            </div>
          </div>
          <div className='col-xl-6 col-lg-4 text-lg-end'>
            <Link legacyBehavior href='/projects'>
              <span className='explore-more rmb-50 wow fadeInRight delay-0-2s'>
                <i className='fas fa-arrow-right' /> <span>Explore more</span>
              </span>
            </Link>
          </div>
        </div>
        <div className='row gap-90'>
          {block?.recent_works?.map((recentWork, idx) => (
            <div key={idx} className='col-lg-6'>
              <div className='project-timeline-two wow fadeInUp delay-0-2s'>
                <span className='serial-number'>{idx + 1}</span>
                <h4>
                  <Link
                    legacyBehavior
                    href={recentWork?.url || '#'}
                    target='_blank'>
                    {recentWork?.title}
                  </Link>
                </h4>
                <div className='image'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}

                  <Image
                    src={
                      ((recentWork?.image as Media)?.url as string) ||
                      'assets/images/projects/project-timeline-two1.jpg'
                    }
                    alt={recentWork?.title as string}
                    width={298}
                    height={224}
                  />
                </div>
                <div className='right-btn'>
                  <Link href='#'>
                    <i className='fal fa-long-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentWork

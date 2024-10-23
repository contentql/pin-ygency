import { Params } from '../types'
import { Media, TeamType } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

interface TeamProps extends TeamType {
  params: Params
}

const Team: React.FC<TeamProps> = ({ params, ...block }) => {
  return (
    <section className='team-area pt-75 rpt-45'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-9'>
            <div className='section-title mb-55 wow fadeInUp delay-0-2s text-center'>
              <span className='sub-title mb-20'>{block?.badge_title}</span>
              <h2>{block?.title}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center'>
          {block?.team_members?.map((member, idx) => (
            <div key={idx} className='col'>
              <div className='team-member wow fadeInUp delay-0-3s'>
                <div className='image'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image
                    src={(member?.image as Media)?.url as string}
                    alt={member?.name as string}
                    height={288}
                    width={252}
                  />
                </div>
                <div className='content'>
                  <h4>{member?.name}</h4>
                  <span>{member?.role}</span>
                  <Link legacyBehavior href='/team-details'>
                    <span className='read-more'>
                      <i className='far fa-arrow-right' />
                    </span>
                  </Link>
                </div>
                <div className='btn-social'>
                  <span className='read-more'>
                    <span>{member?.name}</span>{' '}
                    {/* <i className='far fa-arrow-right' /> */}
                  </span>

                  <div className='social-style-two'>
                    {member?.social_media?.map((social, idx) => (
                      <Link key={idx} href={social?.url}>
                        <i className={social?.icon as string} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

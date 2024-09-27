'use client'

import { Params } from '../types'
import { HeroType, Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps extends HeroType {
  params: Params
}

const Hero: React.FC<HeroProps> = ({ params, ...block }) => {
  const [firstWord, ...restOfTheWords] = (block?.title as string)?.split(' '),
    restOfTheString = restOfTheWords.join(' ')

  return (
    <>
      <section
        className='hero-area-two pt-220 rpt-150 rpb-50 rel z-1 pb-80'
        style={{ backgroundImage: 'url(assets/images/hero/hero-two-bg.png)' }}>
        <div className='container'>
          <h1 className='hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s'>
            {firstWord}
            <span className='arrow'>
              <Image
                className='wow fadeInLeft delay-0-6s'
                src='/assets/images/hero/title-arrow.png'
                alt='Arrow'
                width={481}
                height={8}
              />
            </span>
            {restOfTheString}
          </h1>
          <div className='row align-items-center justify-content-between'>
            <div className='col-xl-3 col-lg-4'>
              <div className='hero-two-content mb-50 wow fadeInRight delay-0-2s'>
                <p className='line-clamp-4'>{block?.description}</p>
                <Image
                  className='mt-20'
                  src='/assets/images/hero/arrow.png'
                  alt='Arrow'
                  width={301}
                  height={8}
                />
                <div className='authors-text mt-45'>
                  {block?.clients
                    ?.slice(0, 3)
                    ?.map((client, id) => (
                      <Image
                        key={id}
                        src={(client?.image as Media)?.url as string}
                        alt='Author'
                        height={50}
                        width={50}
                      />
                    ))}
                  <i className='fal fa-plus' />
                  <span className='text line-clamp-2'>
                    {block?.client_description}
                  </span>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='hero-two-image mb-50 wow zoomIn delay-0-2s'>
                <Image
                  src={(block?.hero_image as Media)?.url as string}
                  alt='Hero'
                  height={350}
                  width={648}
                />
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='hero-two-btn mb-50 wow fadeInLeft delay-0-2s'>
                <Link legacyBehavior href='/about'>
                  <span className='explore-more'>
                    <i className='fas fa-arrow-right' />{' '}
                    <span>{block?.badge_title}</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Hero

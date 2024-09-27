'use client'

import { Params } from '../types'
import { Media, TestimonialType } from '@payload-types'
import Image from 'next/image'
import {
  A11y,
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import StarRating from '@/components/common/StarRating'

interface TestimonialProps extends TestimonialType {
  params: Params
}

const Testimonial: React.FC<TestimonialProps> = ({ params, ...block }) => {
  return (
    <>
      <section className='testimonial-section pt-130 rpt-90'>
        <div className='container-1210 container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='image-border-shape rmb-20 wow fadeInRight delay-0-2s'>
                <Image
                  src={(block?.image as Media)?.url as string}
                  alt='Testimonial Left Image'
                  height={534}
                  width={429}
                />
                <div className='bottom-border' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='testimonial-one-right-part'>
                <Swiper
                  modules={[
                    Navigation,
                    Pagination,
                    Scrollbar,
                    A11y,
                    EffectCreative,
                    Autoplay,
                  ]}
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  pagination={{
                    el: '.testimonial-dots .slick-dots',
                    clickable: true,
                  }}
                  navigation={{
                    nextEl: '.testimonial-next',
                    prevEl: '.testimonial-prev',
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: [0, 0, -400],
                    },
                    next: {
                      translate: ['100%', 0, 0],
                    },
                  }}
                  scrollbar={{ draggable: true }}>
                  {block?.testimonials?.map((testimonial, idx) => (
                    <SwiperSlide key={idx} className='testimonial-item'>
                      <div className='author-speech'>
                        <p>
                          <span className='quote'>“</span> {testimonial?.review}
                          <span className='quote right-quote'>“</span>
                        </p>
                      </div>
                      <div className='testimonial-footer'>
                        <div className='testimonial-author'>
                          <div className='author-image'>
                            <Image
                              src={
                                (testimonial?.reviewer_image as Media)
                                  ?.url as string
                              }
                              alt='Author Image'
                              height={65}
                              width={65}
                            />
                          </div>
                          <div className='author-info'>
                            <h4>{testimonial?.reviewer_name}</h4>
                            <span className='designation'>
                              {testimonial?.reviewer_role}
                            </span>
                          </div>
                        </div>
                        {StarRating({ rating: testimonial?.rating as number })}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className='testimonial-controls mt-75 rmt-40 wow fadeInUp delay-0-2s'>
                  <button className='testimonial-prev slick-arrow'>
                    <i className='far fa-chevron-left' />
                  </button>
                  <div className='testimonial-dots'>
                    <div className='slick-dots'></div>
                  </div>
                  <button className='testimonial-next slick-arrow'>
                    <i className='far fa-chevron-right' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Testimonial

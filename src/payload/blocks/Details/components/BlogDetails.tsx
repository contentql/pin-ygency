import { Blog, Tag, User } from '@payload-types'
import { payloadSlateToHtmlConfig, slateToHtml } from '@slate-serializers/html'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

const BlogDetails = ({
  blogData,
  blogsData,
}: {
  blogData: Blog
  blogsData: Blog[]
}) => {
  const formatDate = (dateString: string) => {
    const date = parseISO(dateString)
    return format(date, 'MMMM dd, yyyy').toUpperCase()
  }
  const html = slateToHtml(blogData?.content!, payloadSlateToHtmlConfig)
  return (
    <div>
      {/* Page Banner Start */}
      <section
        className='page-banner-area overlay pt-250 pb-50 rel z-1 bgs-cover'
        style={{
          backgroundImage: 'url(/assets/images/banner/banner-bg-two.jpg)',
        }}>
        <div className='container'>
          <div className='banner-inner'>
            <div className='row'>
              <div className='col-xl-8'>
                <ul className='blog-meta mb-15 wow fadeInUp delay-0-2s'>
                  <li>
                    <i className='fal fa-user-alt' />
                    {blogData?.author?.slice(0, 3).map((author, index) => (
                      <Link
                        key={index}
                        href={`/author/${(author?.value as User)?.displayName}`}>
                        {(author?.value as User)?.displayName}
                      </Link>
                    ))}
                  </li>
                  <li>
                    <i className='far fa-calendar-alt' />
                    <Link href='#'>
                      {blogData?.createdAt && formatDate(blogData?.createdAt)}
                    </Link>
                  </li>
                  <li>
                    <i className='far fa-comments' />
                    <Link href='#'>Comment (5)</Link>
                  </li>
                </ul>
                <h2 className='page-title wow fadeInUp delay-0-3s'>
                  {blogData?.title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* Blog Details Page Area start */}
      <section className='blog-details-page py-130 rpy-100 rel z-1'>
        <div className='container-1290 container'>
          <div className='row gap-60'>
            <div className='col-lg-8'>
              <div
                className='prose !max-w-none md:prose-xl'
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <div className='tag-share py-30 wow fadeInUp delay-0-2s'>
                <div className='item'>
                  <div className='tag-coulds'>
                    {blogData?.tags?.map((tag, index) => (
                      <Link
                        key={index}
                        legacyBehavior
                        href={`/tag/${(tag?.value as Tag)?.slug}`}>
                        {(tag?.value as Tag)?.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className='item'>
                  <div className='social-style-two'>
                    <Link href='#'>
                      <i className='fab fa-facebook-f' />
                    </Link>
                    <Link href='#'>
                      <i className='fab fa-twitter' />
                    </Link>
                    <Link href='#'>
                      <i className='fab fa-linkedin-in' />
                    </Link>
                    <Link href='#'>
                      <i className='fab fa-instagram' />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='admin-comment bgc-lighter wow fadeInUp delay-0-2s'>
                <div className='comment-body'>
                  <div className='author-thumb'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image
                      src='/assets/images/blog/admin-author.jpg'
                      alt='Author'
                      height={160}
                      width={160}
                    />
                  </div>
                  <div className='content'>
                    <h5>Richard M. Fudge</h5>
                    <p>
                      We denounce with righteous indignation and dislike men
                      beguiled and demoralized by the charms of pleasure of the
                      moment
                    </p>
                    <div className='social-style-one'>
                      <Link legacyBehavior href='/contact'>
                        <span>
                          <i className='fab fa-facebook-f' />
                        </span>
                      </Link>
                      <Link legacyBehavior href='/contact'>
                        <span>
                          <i className='fab fa-twitter' />
                        </span>
                      </Link>
                      <Link legacyBehavior href='/contact'>
                        <span>
                          <i className='fab fa-linkedin-in' />
                        </span>
                      </Link>
                      <Link legacyBehavior href='/contact'>
                        <span>
                          <i className='fab fa-instagram' />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='next-prev-blog pb-65'>
                <div className='item wow fadeInLeft delay-0-2s'>
                  <div className='image'>
                    <Image
                      src='/assets/images/blog/blog-prev.jpg'
                      alt='Prev'
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className='content'>
                    <h6>
                      <Link legacyBehavior href='/blog-details'>
                        Tips For Conducting Usability Studies
                      </Link>
                    </h6>
                    <Link legacyBehavior href='/blog-details'>
                      <span className='read-more'>
                        Previous <i className='far fa-arrow-right' />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className='item wow fadeInRight delay-0-2s'>
                  <div className='image'>
                    <Image
                      src='/assets/images/blog/blog-next.jpg'
                      alt='Next'
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className='content'>
                    <h6>
                      <Link legacyBehavior href='/blog-details'>
                        Building Accessible Menu Systems
                      </Link>
                    </h6>
                    <Link legacyBehavior href='/blog-details'>
                      <span className='read-more'>
                        Next <i className='far fa-arrow-right' />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <h3 className='comment-title mb-50'>Popular Comments</h3>
              <div className='comments'>
                <div className='comment-body wow fadeInUp delay-0-2s'>
                  <div className='author-thumb'>
                    <Image
                      src='/assets/images/blog/comment-author1.jpg'
                      alt='Author'
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className='content'>
                    <ul className='blog-meta'>
                      <li>
                        <h6>William L. Jackson</h6>
                      </li>
                      <li>
                        <Link href='#'>February 25, 2023</Link>
                      </li>
                    </ul>
                    <p>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihile molestiae consequatur, vel illum
                      qui dolorem eum fugiat voluptas
                    </p>
                    <Link className='read-more' href='#'>
                      Reply <i className='far fa-arrow-right' />
                    </Link>
                  </div>
                </div>
                <div className='comment-body comment-child wow fadeInUp delay-0-2s'>
                  <div className='author-thumb'>
                    <Image
                      src='/assets/images/blog/comment-author2.jpg'
                      alt='Author'
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className='content'>
                    <ul className='blog-meta'>
                      <li>
                        <h6>James M. Stovall</h6>
                      </li>
                      <li>
                        <Link href='#'>February 25, 2023</Link>
                      </li>
                    </ul>
                    <p>
                      At vero eos et accusamus et iusto dignissimos ducimus
                      blanditiis sapiente praesentium voluptatum deleniti atque
                      corrupti quos dolores
                    </p>
                    <Link className='read-more' href='#'>
                      Reply <i className='far fa-arrow-right' />
                    </Link>
                  </div>
                </div>
                <div className='comment-body wow fadeInUp delay-0-2s'>
                  <div className='author-thumb'>
                    <Image
                      src='/assets/images/blog/comment-author3.jpg'
                      alt='Author'
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className='content'>
                    <ul className='blog-meta'>
                      <li>
                        <h6>Lee M. Moreno</h6>
                      </li>
                      <li>
                        <Link href='#'>February 25, 2023</Link>
                      </li>
                    </ul>
                    <p>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                      commodi consequatur
                    </p>
                    <Link className='read-more' href='#'>
                      Reply <i className='far fa-arrow-right' />
                    </Link>
                  </div>
                </div>
              </div>
              <form
                id='comment-form'
                className='comment-form bgc-lighter mt-95 wow fadeInUp delay-0-2s'
                name='comment-form'
                action='#'
                method='post'>
                <h4>Leave a Reply</h4>
                <p>
                  we denounce with righteous indignation and dislike men who
                  beguiled
                </p>
                <div className='row mt-30'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='full-name'
                        name='full-name'
                        className='form-control'
                        placeholder='Full Name'
                        required
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='blog-email'
                        name='blog-email'
                        className='form-control'
                        placeholder='Email Address'
                        required
                      />
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <input
                        type='url'
                        id='website'
                        name='website'
                        className='form-control'
                        placeholder='Website'
                        required
                      />
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <textarea
                        name='message'
                        id='message'
                        className='form-control'
                        rows={4}
                        placeholder='Message'
                        required={true}
                      />
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='form-group mb-0'>
                      <button
                        type='submit'
                        className='theme-btn style-two w-100'>
                        Send a Reply <i className='far fa-arrow-right' />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-lg-4'>
              <div className='main-sidebar rmt-75'>
                <div className='widget widget-search wow fadeInUp delay-0-2s'>
                  <form action='#' className='default-search-form'>
                    <input type='text' placeholder='Search...' required />
                    <button
                      type='submit'
                      className='searchbutton far fa-search'
                    />
                  </form>
                </div>
                <div className='widget widget-author wow fadeInUp delay-0-4s'>
                  <Image
                    src='/assets/images/widget/author.png'
                    alt='Author'
                    height={250}
                    width={250}
                  />
                  <h5>Nathan S. Nguyen</h5>
                  <p>
                    We denounce with righteous indignation dislike beguiled and
                    demoralized
                  </p>
                  <div className='social-style-one'>
                    <Link href='#'>
                      <i className='fab fa-twitter' />
                    </Link>
                    <Link href='#'>
                      <i className='fab fa-facebook-f' />
                    </Link>
                    <Link href='#'>
                      <i className='fab fa-instagram' />
                    </Link>
                    <Link href='#'>
                      <i className='fab fa-pinterest-p' />
                    </Link>
                  </div>
                </div>
                <div className='widget widget-category wow fadeInUp delay-0-2s'>
                  <h4 className='widget-title'>Category</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href='/blog'>
                        Web Design
                      </Link>{' '}
                      <span>(5)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href='/blog'>
                        SEO Optimizations
                      </Link>{' '}
                      <span>(3)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href='/blog'>
                        Mobile Apps Design
                      </Link>{' '}
                      <span>(2)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href='/blog'>
                        Development
                      </Link>{' '}
                      <span>(4)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href='/blog'>
                        Graphics Design
                      </Link>{' '}
                      <span>(6)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href='/blog'>
                        3D Illustrations
                      </Link>{' '}
                      <span>(2)</span>
                    </li>
                  </ul>
                </div>
                <div className='widget widget-recent-news wow fadeInUp delay-0-2s'>
                  <h4 className='widget-title'>Recent News</h4>
                  <ul>
                    <li>
                      <div className='image'>
                        <Image
                          src='/assets/images/widget/news1.jpg'
                          alt='News'
                          height={100}
                          width={100}
                        />
                      </div>
                      <div className='content'>
                        <h5>
                          <Link legacyBehavior href='/blog-details'>
                            UX Optimizations Keyboard Assistive Technology
                          </Link>
                        </h5>
                        <span className='date'>
                          <i className='far fa-calendar-alt' />
                          <Link href='#'>February 18, 2023</Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className='image'>
                        <Image
                          src='/assets/images/widget/news2.jpg'
                          alt='News'
                          height={100}
                          width={100}
                        />
                      </div>
                      <div className='content'>
                        <h5>
                          <Link legacyBehavior href='/blog-details'>
                            Inclusive Design Accessibility Live Stream Pickering
                          </Link>
                        </h5>
                        <span className='date'>
                          <i className='far fa-calendar-alt' />
                          <Link href='#'>February 18, 2023</Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className='image'>
                        <Image
                          src='/assets/images/widget/news3.jpg'
                          alt='News'
                          height={100}
                          width={100}
                        />
                      </div>
                      <div className='content'>
                        <h5>
                          <Link legacyBehavior href='/blog-details'>
                            Online Environments The We Work Well For Users
                          </Link>
                        </h5>
                        <span className='date'>
                          <i className='far fa-calendar-alt' />
                          <Link href='#'>February 18, 2023</Link>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='widget widget-tag-cloud wow fadeInUp delay-0-2s'>
                  <h4 className='widget-title'>Popular Tags</h4>
                  <div className='tag-coulds'>
                    <Link legacyBehavior href='/blog'>
                      Design
                    </Link>
                    <Link legacyBehavior href='/blog'>
                      SEO
                    </Link>
                    <Link legacyBehavior href='/blog'>
                      Development
                    </Link>
                    <Link legacyBehavior href='/blog'>
                      Graphics
                    </Link>
                    <Link legacyBehavior href='/blog'>
                      3D Illustation
                    </Link>
                    <Link legacyBehavior href='/blog'>
                      Art
                    </Link>
                    <Link legacyBehavior href='/blog'>
                      Product Design
                    </Link>
                    <Link legacyBehavior href='/blog'>
                      Mobile App
                    </Link>
                  </div>
                </div>
                <div className='widget widget-gallery wow fadeInUp delay-0-2s'>
                  <h4 className='widget-title'>Gallery</h4>
                  <div className='gallery'>
                    <Link legacyBehavior href='/blog'>
                      <span>
                        <Image
                          src='/assets/images/widget/gallery1.jpg'
                          alt='Gallery'
                          height={100}
                          width={100}
                        />
                        <i className='far fa-arrow-right' />
                      </span>
                    </Link>
                    <Link legacyBehavior href='/blog'>
                      <span>
                        <Image
                          src='/assets/images/widget/gallery2.jpg'
                          alt='Gallery'
                          height={100}
                          width={100}
                        />
                        <i className='far fa-arrow-right' />
                      </span>
                    </Link>
                    <Link legacyBehavior href='/blog'>
                      <span>
                        <Image
                          src='/assets/images/widget/gallery3.jpg'
                          alt='Gallery'
                          height={100}
                          width={100}
                        />
                        <i className='far fa-arrow-right' />
                      </span>
                    </Link>
                    <Link legacyBehavior href='/blog'>
                      <span>
                        <Image
                          src='/assets/images/widget/gallery4.jpg'
                          alt='Gallery'
                          height={100}
                          width={100}
                        />
                        <i className='far fa-arrow-right' />
                      </span>
                    </Link>
                    <Link legacyBehavior href='/blog'>
                      <span>
                        <Image
                          src='/assets/images/widget/gallery5.jpg'
                          alt='Gallery'
                          height={100}
                          width={100}
                        />
                        <i className='far fa-arrow-right' />
                      </span>
                    </Link>
                    <Link legacyBehavior href='/blog'>
                      <span>
                        <Image
                          src='/assets/images/widget/gallery6.jpg'
                          alt='Gallery'
                          height={100}
                          width={100}
                        />
                        <i className='far fa-arrow-right' />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Details Page Area end */}
      {/* footer area start */}
    </div>
  )
}
export default BlogDetails

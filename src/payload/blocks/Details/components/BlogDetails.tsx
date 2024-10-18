import { Blog, Media, Tag, User } from '@payload-types'
import { payloadSlateToHtmlConfig, slateToHtml } from '@slate-serializers/html'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

import BlogDetailsSkeleton from '@/components/skeletons/BlogDetailsSkeleton'
import { trpc } from '@/trpc/client'
import getSlugs from '@/utils/getSlugs'
import { icons } from '@/utils/icons'
import { useMetadata } from '@/utils/metadataContext'

const BlogDetails = ({
  blogData,
  blogsData,
  blogDataIsLoading,
}: {
  blogData: Blog
  blogsData: Blog[]
  blogDataIsLoading: boolean
}) => {
  const { redirectionLinks } = useMetadata()
  const { data: allTags } = trpc?.tag?.getAllTags?.useQuery()
  const formatDate = (dateString: string) => {
    const date = parseISO(dateString)
    return format(date, 'MMMM dd, yyyy').toUpperCase()
  }
  const html = slateToHtml(blogData?.content!, payloadSlateToHtmlConfig)
  return (
    <div>
      {blogDataIsLoading ? (
        <BlogDetailsSkeleton />
      ) : (
        <>
          <section
            className='page-banner-area overlay pt-250 pb-50 rel z-1 bgs-cover'
            style={{
              backgroundImage: `url(${(blogData?.blogImage as Media)?.url!})`,
            }}>
            <div className='container'>
              <div className='banner-inner'>
                <div className='row'>
                  <div className='col-xl-8'>
                    <ul className='blog-meta mb-15 wow fadeInUp delay-0-2s'>
                      <li>
                        <i className='fal fa-user-alt' />
                        {blogData?.author?.slice(0, 2).map((author, index) => (
                          <Link
                            key={index}
                            href={`${getSlugs({ redirectionLinks })?.author}${(author?.value as User)?.username}`}>
                            {(author?.value as User)?.displayName}
                          </Link>
                        ))}
                      </li>
                      <li>
                        <i className='far fa-calendar-alt' />
                        <span>
                          {blogData?.createdAt &&
                            formatDate(blogData?.createdAt)}
                        </span>
                      </li>
                      {/* <li>
                    <i className='far fa-comments' />
                    <Link href='#'>Comment (5)</Link>
                  </li> */}
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
                            href={`${getSlugs({ redirectionLinks })?.tag}${(tag?.value as Tag)?.slug}`}>
                            {(tag?.value as Tag)?.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='main-sidebar rmt-75'>
                    <div className='widget widget-author wow fadeInUp delay-0-4s'>
                      <Image
                        src={
                          (
                            (blogData?.author?.at(0)?.value as User)
                              ?.imageUrl as Media
                          )?.url!
                        }
                        alt='Author'
                        height={250}
                        width={250}
                      />
                      <h5>
                        {(blogData?.author?.at(0)?.value as User)?.displayName
                          ? (blogData?.author?.at(0)?.value as User)
                              ?.displayName
                          : (blogData?.author?.at(0)?.value as User)?.username}
                      </h5>

                      <div className='social-style-one'>
                        {(
                          blogData?.author?.at(0)?.value as User
                        )?.socialLinks?.map((socialLink, index) => (
                          <Link key={index} href={socialLink?.value}>
                            <i
                              className={`${icons[socialLink?.platform as keyof typeof icons]}`}
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className='widget widget-recent-news wow fadeInUp delay-0-2s'>
                      <h4 className='widget-title'>Recent Blogs</h4>
                      <ul>
                        {blogsData?.slice(0, 4)?.map((blogData, index) => (
                          <li key={index}>
                            <div className='image'>
                              <Image
                                src={(blogData?.blogImage as Media)?.url!}
                                alt='News'
                                height={100}
                                width={100}
                              />
                            </div>
                            <div className='content'>
                              <h5>
                                <Link
                                  legacyBehavior
                                  href={`${getSlugs({ redirectionLinks })?.blog}${blogData?.slug}`}>
                                  {blogData?.title}
                                </Link>
                              </h5>
                              <span className='date'>
                                <i className='far fa-calendar-alt' />
                                <span>{formatDate(blogData?.createdAt)}</span>
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='widget widget-tag-cloud wow fadeInUp delay-0-2s'>
                      <h4 className='widget-title'>Popular Tags</h4>
                      <div className='tag-coulds'>
                        {allTags?.slice(0, 8)?.map((tagData, index) => (
                          <Link
                            key={index}
                            legacyBehavior
                            href={`${getSlugs({ redirectionLinks })?.tag}${tagData?.slug}`}>
                            {tagData?.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
export default BlogDetails

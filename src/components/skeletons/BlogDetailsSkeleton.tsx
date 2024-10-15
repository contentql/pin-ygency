const BlogDetailsSkeleton = () => {
  return (
    <div>
      <section className='page-banner-area overlay pt-250 pb-50 rel z-1 bgs-cover'>
        <div className='container'>
          <div className='banner-inner'>
            <div className='row'>
              <div className='col-xl-8'>
                <h2 className='skeleton-line'></h2>
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
              <div className='skeleton-line' />
              <div className='skeleton-p' />
              <div className='skeleton-p' />
              <div className='skeleton-p' />
              <div className='skeleton-h6' />
            </div>
            <div className='col-lg-4'>
              <div className='main-sidebar rmt-75'>
                <div className='widget widget-author wow fadeInUp delay-0-4s'>
                  <div className='skeleton-Image'></div>
                  <h5 className='skeleton-name'></h5>
                </div>
                <div className='widget widget-recent-news wow fadeInUp delay-0-2s pt-20'>
                  <ul>
                    {[0, 1, 2, 3].map((_, index) => (
                      <li key={index}>
                        <div className='image'>
                          <div className='skeleton-blog-image' />
                        </div>
                        <div className='content'>
                          <h5 className='skeleton-blog-title '></h5>
                          <span className='date'>
                            <i className='far fa-calendar-alt' />
                            <span className='skeleton-blog-title '></span>
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default BlogDetailsSkeleton

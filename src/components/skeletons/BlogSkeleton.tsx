const BlogSkeleton = () => {
  return (
    <section className='blog-page-area py-130 rpy-100 rel z-1'>
      <div className='container-1290 container'>
        <div className='row'>
          <div className='col-xl-4 col-md-6'>
            <div className={`blog-item skeleton`}>
              <div className={'skeleton-image'}></div>
              <ul className={'blog-meta'}>
                <li>
                  <div className={'skeleton-meta'} />
                </li>
                <li>
                  <div className={'skeleton-meta'} />
                </li>
              </ul>
              <hr />
              <div className={'skeleton-title'}></div>
              <div className={'skeleton-read-more'}></div>
            </div>
          </div>{' '}
          <div className='col-xl-4 col-md-6'>
            <div className={`blog-item skeleton`}>
              <div className={'skeleton-image'}></div>
              <ul className={'blog-meta'}>
                <li>
                  <div className={'skeleton-meta'} />
                </li>
                <li>
                  <div className={'skeleton-meta'} />
                </li>
              </ul>
              <hr />
              <div className={'skeleton-title'}></div>
              <div className={'skeleton-read-more'}></div>
            </div>
          </div>{' '}
          <div className='col-xl-4 col-md-6'>
            <div className={`blog-item skeleton`}>
              <div className={'skeleton-image'}></div>
              <ul className={'blog-meta'}>
                <li>
                  <div className={'skeleton-meta'} />
                </li>
                <li>
                  <div className={'skeleton-meta'} />
                </li>
              </ul>
              <hr />
              <div className={'skeleton-title'}></div>
              <div className={'skeleton-read-more'}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSkeleton

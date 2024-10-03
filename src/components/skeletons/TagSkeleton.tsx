const TagSkeleton = () => {
  return (
    <section className='blog-page-area py-130 rpy-100 rel z-1'>
      <div className='container-1290 container'>
        <div className='row'>
          <div className='col-xl-3 col-lg-4 col-sm-6'>
            <div className='skeleton tag-item '>
              <div className='content'>
                <div className='skeleton-tag-image'></div>{' '}
                {/* For the tag image */}
                <div className='skeleton-title'></div> {/* For the tag title */}
                <div className='skeleton-meta'></div> {/* For the blog count */}
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 col-sm-6'>
            <div className='skeleton tag-item'>
              <div className='content'>
                <div className='skeleton-tag-image'></div>{' '}
                {/* For the tag image */}
                <div className='skeleton-title'></div> {/* For the tag title */}
                <div className='skeleton-meta'></div> {/* For the blog count */}
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 col-sm-6'>
            <div className='skeleton tag-item '>
              <div className='content'>
                <div className='skeleton-tag-image'></div>{' '}
                {/* For the tag image */}
                <div className='skeleton-title'></div> {/* For the tag title */}
                <div className='skeleton-meta'></div> {/* For the blog count */}
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 col-sm-6'>
            <div className='skeleton tag-item '>
              <div className='content'>
                <div className='skeleton-tag-image'></div>{' '}
                {/* For the tag image */}
                <div className='skeleton-title'></div> {/* For the tag title */}
                <div className='skeleton-meta'></div> {/* For the blog count */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TagSkeleton

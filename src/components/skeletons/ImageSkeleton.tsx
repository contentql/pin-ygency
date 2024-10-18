const ImageSkeleton = () => {
  return (
    <div>
      <section
        id='services'
        className='service-area-four pt-110 rpt-85 rpb-70'
        style={{
          backgroundImage: 'url(/assets/images/hero/hero-two-bg.png)',
        }}>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title wow fadeInUp delay-0-2s mb-60 text-center'>
                <div className='skeleton-Image-user'></div>
                <h2 className='skeleton-user-name mb-15'></h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ImageSkeleton

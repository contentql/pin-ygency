import type { Page, SiteSetting } from '@payload-types'
import Link from 'next/link'

import { logoMapping } from '@/utils/logoMapping'

type SocialLinksType = NonNullable<
  Pick<SiteSetting, 'footer'>['footer']['socialLinks']
>[0]

const Footer = ({ metadata }: { metadata: SiteSetting }) => {
  const { footer } = metadata
  const { logo, socialLinks, footerLinks } = footer

  let logoDetails = {
    url: '',
    alt: '',
  }

  if (Object.keys(logo).length && logo?.imageUrl === 'string') {
    logoDetails = {
      url: logo?.imageUrl,
      alt: `${metadata.general?.title} logo`,
    }
  } else if (Object.keys(logo).length && typeof logo?.imageUrl !== 'string') {
    logoDetails = {
      url: logo.imageUrl?.url!,
      alt: logo.imageUrl?.alt || `${metadata.general?.title} logo`,
    }
  }

  // if in case image or nav-links are not specified hiding the footer
  if (
    !logoDetails.url &&
    footerLinks?.length === 0 &&
    socialLinks?.length === 0
  ) {
    return null
  }

  return (
    <footer
      className='main-footer footer-two pt-100 pb-50 rpb-20 rel z-1'
      style={{
        backgroundImage: 'url(assets/images/footer/footer-bg-shape.png)',
      }}>
      <div className='container-1290 container'>
        <div className='row gp-100 align-items-center justify-content-between pb-20'>
          <div className='col-xl-6 col-lg-7'>
            <div className='footer-left-title mb-35 wow fadeInLeft delay-0-2s'>
              {metadata?.general?.description}
            </div>
          </div>
          <div className='col-lg-5 col-sm-7 col-6 col-small wow fadeInRight delay-0-2s'>
            <div className='footer-right-btn mb-35 text-lg-end'>
              <Link legacyBehavior href='/'>
                <span className='explore-more text-start'>
                  <i className='fas fa-arrow-right' />{' '}
                  <span>Send Us Message</span>
                </span>
              </Link>
            </div>
          </div>
          <div className='col-lg-3 order-lg-4 col-sm-6'>
            <div className='footer-widget footer-links wow fadeInUp delay-0-6s'>
              <h5 className='footer-title'>Links</h5>
              <div className='footer-widget widget_nav_menu'>
                <ul className='list-style-two'>
                  {footer?.footerLinks
                    ?.slice(0, 4)
                    ?.map((footerLink, index) => (
                      <li key={index}>
                        <Link
                          legacyBehavior
                          href={
                            (footerLink?.menuLink?.page?.value as Page)?.path!
                          }>
                          {(footerLink?.menuLink?.page?.value as Page)?.title}
                        </Link>
                      </li>
                    ))}
                </ul>
                {footer?.footerLinks?.slice(4)?.length! > 0 && (
                  <ul className='list-style-two'>
                    {footer?.footerLinks?.slice(4)?.map((footerLink, index) => (
                      <li key={index}>
                        <Link
                          legacyBehavior
                          href={
                            (footerLink?.menuLink?.page?.value as Page)?.path!
                          }>
                          {(footerLink?.menuLink?.page?.value as Page)?.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className='col-lg-5 order-lg-2 align-self-center me-auto'>
            <div className='footer-widget newsletter-widget wow fadeInUp delay-0-2s'>
              {/* <form className='footer-newsletter' action='#'>
                <input type='email' placeholder='Email Address' required />
                <button type='submit'>
                  <i className='fas fa-arrow-right' />
                </button>
              </form> */}
              <div>
                {socialLinks?.length ? (
                  <div>
                    <ul className='social-links'>
                      {socialLinks.map(({ platform, value, id }) => {
                        const Component = logoMapping[platform]

                        return Component ? (
                          <li key={id}>
                            <Link
                              href={value}
                              target='_blank'
                              className='social-link'>
                              <Component className='icon' />
                              <div>{platform}</div>
                            </Link>
                          </li>
                        ) : null
                      })}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <p className='copyright'>{footer?.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer

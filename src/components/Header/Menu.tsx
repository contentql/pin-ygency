import { Page, SiteSetting } from '@payload-types'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { FaAngleDown } from 'react-icons/fa6'

const Menu = ({
  singleMenu,
  headerLinks,
}: {
  singleMenu: boolean
  headerLinks: Required<SiteSetting>['navbar']['menuLinks']
}) => {
  return (
    <Fragment>
      {singleMenu ? (
        <SingleMenu headerLinks={headerLinks} />
      ) : (
        <Fragment>
          <DaskTopMenu />
          <MobileMenu />
        </Fragment>
      )}
    </Fragment>
  )
}
export default Menu

const DaskTopMenu = () => {
  return (
    <ul className='navigation d-none d-lg-flex desktop-menu'>
      <li className='dropdown'>
        <Link href='#'>Home</Link>
        <ul>
          <li className='dropdown'>
            <Link href='#'>MultiPage</Link>
            <ul>
              <li>
                <Link legacyBehavior href='/'>
                  Web Design
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index2'>
                  Web Development
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index3'>
                  Creative Design Studio
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index4'>
                  Web Developer
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index5'>
                  Marketing Agency
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index6'>
                  Creative Agency
                </Link>
              </li>
            </ul>
            <div className='dropdown-btn'>
              <span className='far fa-plus' />
            </div>
          </li>
          <li className='dropdown'>
            <Link href='#'>OnePage</Link>
            <ul>
              <li>
                <Link legacyBehavior href='index1-onepage'>
                  Web Design
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index2-onepage'>
                  Web Development
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index3-onepage'>
                  Creative Design Studio
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index4-onepage'>
                  Web Developer
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index5-onepage'>
                  Marketing Agency
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index6-onepage'>
                  Creative Agency
                </Link>
              </li>
            </ul>
            <div className='dropdown-btn'>
              <span className='far fa-plus' />
            </div>
          </li>
        </ul>
        <div className='dropdown-btn'>
          <span className='far fa-plus' />
        </div>
      </li>
      <li>
        <Link legacyBehavior href='about'>
          About Us
        </Link>
      </li>
      <li className='dropdown'>
        <Link href='#'>pages</Link>
        <ul>
          <li>
            <Link legacyBehavior href='faqs'>
              faqs
            </Link>
          </li>
          <li className='dropdown'>
            <Link href='#'>Products</Link>
            <ul>
              <li>
                <Link legacyBehavior href='shop'>
                  our Products
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='product-details'>
                  Product Details
                </Link>
              </li>
            </ul>
            <div className='dropdown-btn'>
              <span className='far fa-plus' />
            </div>
          </li>
          <li className='dropdown'>
            <Link href='#'>Team</Link>
            <ul>
              <li>
                <Link legacyBehavior href='team'>
                  Team Members
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='team-details'>
                  Team Details
                </Link>
              </li>
            </ul>
            <div className='dropdown-btn'>
              <span className='far fa-plus' />
            </div>
          </li>
          <li>
            <Link legacyBehavior href='contact'>
              Contact us
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='pricing'>
              Pricing Plan
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='404'>
              404 error
            </Link>
          </li>
        </ul>
        <div className='dropdown-btn'>
          <span className='far fa-plus' />
        </div>
      </li>
      <li className='dropdown'>
        <Link href='#'>Services</Link>
        <ul>
          <li>
            <Link legacyBehavior href='services'>
              Our Services
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='service-details'>
              Service Details One
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='service-details2'>
              Service Details Two
            </Link>
          </li>
        </ul>
        <div className='dropdown-btn'>
          <span className='far fa-plus' />
        </div>
      </li>
      <li className='dropdown'>
        <Link href='#'>Projects</Link>
        <ul>
          <li>
            <Link legacyBehavior href='projects'>
              Project Grid
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='project-list'>
              Project List
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='project-details'>
              Project Details
            </Link>
          </li>
        </ul>
        <div className='dropdown-btn'>
          <span className='far fa-plus' />
        </div>
      </li>
      <li className='dropdown'>
        <Link href='#'>blog</Link>
        <ul>
          <li>
            <Link legacyBehavior href='blog'>
              blog Grid
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='blog-standard'>
              blog standard
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='blog-details'>
              blog details
            </Link>
          </li>
        </ul>
        <div className='dropdown-btn'>
          <span className='far fa-plus' />
        </div>
      </li>
    </ul>
  )
}

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState('')
  const [multiMenu, setMultiMenu] = useState('')
  const activeMenuSet = (value: any) =>
      setActiveMenu(activeMenu === value ? '' : value),
    activeLi = (value: any) =>
      value === activeMenu ? { display: 'block' } : { display: 'none' }
  const multiMenuSet = (value: any) =>
      setMultiMenu(multiMenu === value ? '' : value),
    multiMenuActiveLi = (value: any) =>
      value === multiMenu ? { display: 'block' } : { display: 'none' }
  return (
    <ul className='navigation d-block d-lg-none mobile-menu'>
      <li className='dropdown'>
        <Link href='#'>Home</Link>
        <ul style={activeLi('home')}>
          <li className='dropdown'>
            <Link href='#'>MultiPage</Link>
            <ul style={multiMenuActiveLi('multiPage')}>
              <li>
                <Link legacyBehavior href='/'>
                  Web Design
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index2'>
                  Web Development
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index3'>
                  Creative Design Studio
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index4'>
                  Web Developer
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index5'>
                  Marketing Agency
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index6'>
                  Creative Agency
                </Link>
              </li>
            </ul>
            <div
              className='dropdown-btn'
              onClick={() => multiMenuSet('multiPage')}>
              <span className='far fa-plus' />
            </div>
          </li>
          <li className='dropdown'>
            <Link href='#'>OnePage</Link>
            <ul style={multiMenuActiveLi('OnePage')}>
              <li>
                <Link legacyBehavior href='index1-onepage'>
                  Web Design
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index2-onepage'>
                  Web Development
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index3-onepage'>
                  Creative Design Studio
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index4-onepage'>
                  Web Developer
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index5-onepage'>
                  Marketing Agency
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='index6-onepage'>
                  Creative Agency
                </Link>
              </li>
            </ul>
            <div
              className='dropdown-btn'
              onClick={() => multiMenuSet('OnePage')}>
              <span className='far fa-plus' />
            </div>
          </li>
        </ul>
        <div className='dropdown-btn' onClick={() => activeMenuSet('home')}>
          <span className='far fa-plus' />
        </div>
      </li>
      <li>
        <Link legacyBehavior href='about'>
          About Us
        </Link>
      </li>
      <li className='dropdown'>
        <Link href='#'>pages</Link>
        <ul style={activeLi('pages')}>
          <li>
            <Link legacyBehavior href='faqs'>
              faqs
            </Link>
          </li>
          <li className='dropdown'>
            <Link href='#'>Products</Link>
            <ul style={multiMenuActiveLi('Products')}>
              <li>
                <Link legacyBehavior href='shop'>
                  our Products
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='product-details'>
                  Product Details
                </Link>
              </li>
            </ul>
            <div
              className='dropdown-btn'
              onClick={() => multiMenuSet('Products')}>
              <span className='far fa-plus' />
            </div>
          </li>
          <li className='dropdown'>
            <Link href='#'>Team</Link>
            <ul style={multiMenuActiveLi('Team')}>
              <li>
                <Link legacyBehavior href='team'>
                  Team Members
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='team-details'>
                  Team Details
                </Link>
              </li>
            </ul>
            <div className='dropdown-btn' onClick={() => multiMenuSet('Team')}>
              <span className='far fa-plus' />
            </div>
          </li>
          <li>
            <Link legacyBehavior href='contact'>
              Contact us
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='pricing'>
              Pricing Plan
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='404'>
              404 error
            </Link>
          </li>
        </ul>
        <div className='dropdown-btn' onClick={() => activeMenuSet('pages')}>
          <span className='far fa-plus' />
        </div>
      </li>
      <li className='dropdown'>
        <Link href='#'>Services</Link>
        <ul style={activeLi('Services')}>
          <li>
            <Link legacyBehavior href='services'>
              Our Services
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='service-details'>
              Service Details One
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='service-details2'>
              Service Details Two
            </Link>
          </li>
        </ul>
        <div className='dropdown-btn' onClick={() => activeMenuSet('Services')}>
          <span className='far fa-plus' />
        </div>
      </li>
      <li className='dropdown'>
        <Link href='#'>Projects</Link>
        <ul style={activeLi('Projects')}>
          <li>
            <Link legacyBehavior href='projects'>
              Project Grid
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='project-list'>
              Project List
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='project-details'>
              Project Details
            </Link>
          </li>
        </ul>
        <div className='dropdown-btn' onClick={() => activeMenuSet('Projects')}>
          <span className='far fa-plus' />
        </div>
      </li>
      <li className='dropdown'>
        <Link href='#'>blog</Link>
        <ul style={activeLi('blog')}>
          <li>
            <Link legacyBehavior href='blog'>
              blog Grid
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='blog-standard'>
              blog standard
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='blog-details'>
              blog details
            </Link>
          </li>
        </ul>
        <div className='dropdown-btn' onClick={() => activeMenuSet('blog')}>
          <span className='far fa-plus' />
        </div>
      </li>
    </ul>
  )
}

const SingleMenu = ({
  headerLinks,
}: {
  headerLinks: Required<SiteSetting>['navbar']['menuLinks']
}) => {
  return (
    <ul className='navigation onepage clearfix'>
      {headerLinks?.map((link, index) =>
        link?.group ? (
          <Dropdown align='start' key={index}>
            <Dropdown.Toggle
              id='dropdown-basic'
              as='div'
              bsPrefix='custom-toggle'>
              <li>
                <Link href={''}>
                  {link?.menuLinkGroup?.groupTitle}{' '}
                  <span>
                    <FaAngleDown />
                  </span>
                </Link>
              </li>
            </Dropdown.Toggle>
            <Dropdown.Menu className='custom-dropdown-menu  fullwidth-toggle'>
              {link?.menuLinkGroup?.groupLinks?.map((nestedLink, index) => (
                <Dropdown.Item
                  key={index}
                  className='custom-dropdown-item'
                  href={
                    nestedLink?.type === 'custom'
                      ? nestedLink?.url!
                      : (nestedLink?.page?.value as Page)?.path!
                  }
                  target={nestedLink?.newTab ? '_blank' : '_self'}>
                  {nestedLink?.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <li key={index}>
            <Link
              target={link?.menuLink?.newTab ? '_blank' : '_self'}
              href={
                link?.menuLink?.type === 'custom'
                  ? link?.menuLink?.url!
                  : (link?.menuLink?.page?.value as Page)?.path!
              }>
              {link?.menuLink?.label}
            </Link>
          </li>
        ),
      )}
    </ul>
  )
}

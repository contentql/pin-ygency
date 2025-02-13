import { Page, SiteSetting } from '@payload-types'
import Link from 'next/link'
import { Fragment } from 'react'
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
        <Fragment></Fragment>
      )}
    </Fragment>
  )
}
export default Menu

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
                  <>
                    {link?.menuLinkGroup?.groupTitle}{' '}
                    <span>
                      <FaAngleDown />
                    </span>
                  </>
                </Link>
              </li>
            </Dropdown.Toggle>
            <Dropdown.Menu className='custom-dropdown-menu fullwidth-toggle'>
              {link?.menuLinkGroup?.groupLinks?.map((nestedLink, index) => (
                <Link
                  key={index}
                  legacyBehavior
                  passHref
                  href={
                    nestedLink?.type === 'reference'
                      ? (nestedLink?.page?.value as Page)?.path!
                      : nestedLink?.url!
                  }>
                  <Dropdown.Item
                    className='custom-dropdown-item'
                    as='a' // Ensures it's rendered as an <a> tag
                    target={nestedLink?.newTab ? '_blank' : '_self'}
                    rel='noopener noreferrer'>
                    {nestedLink?.label}
                  </Dropdown.Item>
                </Link>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <li key={index}>
            <Link
              legacyBehavior
              href={
                link?.menuLink?.type === 'custom'
                  ? link?.menuLink?.url!
                  : (link?.menuLink?.page?.value as Page)?.path!
              }>
              <a
                target={link?.menuLink?.newTab ? '_blank' : '_self'}
                rel='noopener noreferrer'>
                {link?.menuLink?.label}
              </a>
            </Link>
          </li>
        ),
      )}
    </ul>
  )
}

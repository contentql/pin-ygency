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
            <Dropdown.Menu className='custom-dropdown-menu  fullwidth-toggle'>
              {link?.menuLinkGroup?.groupLinks?.map((nestedLink, index) => (
                <Dropdown.Item className='custom-dropdown-item' key={index}>
                  <Link
                    style={{ width: '100%', display: 'inline-block' }}
                    href={
                      nestedLink?.type === 'custom'
                        ? nestedLink?.url!
                        : (nestedLink?.page?.value as Page)?.path!
                    }
                    target={nestedLink?.newTab ? '_blank' : '_self'}>
                    {nestedLink?.label}
                  </Link>
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

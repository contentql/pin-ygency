import { Media, SiteSetting } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { Accordion } from 'react-bootstrap'

import Menu from './Menu'

const Nav = ({
  singleMenu,
  headerData,
}: {
  singleMenu: boolean
  headerData: SiteSetting['navbar']
}) => {
  return (
    <nav className='main-menu navbar-expand-lg'>
      <Accordion>
        <div className='navbar-header py-10'>
          <div className='mobile-logo'>
            <Link legacyBehavior href='/'>
              <Image
                src={(headerData?.logo?.imageUrl as Media)?.url || ''}
                alt={'Logo'}
                title='Logo'
                height={40}
                width={150}
              />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Button as={'button'} className='navbar-toggle'>
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </Accordion.Button>
        </div>
        <Accordion.Collapse
          eventKey='navbar-collapse'
          className='navbar-collapse clearfix'>
          <Menu singleMenu={singleMenu} headerLinks={headerData?.menuLinks} />
        </Accordion.Collapse>
      </Accordion>
    </nav>
  )
}
export default Nav

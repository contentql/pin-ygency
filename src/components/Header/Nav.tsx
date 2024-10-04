import { Media, SiteSetting } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { Accordion, useAccordionButton } from 'react-bootstrap'

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
          <CustomToggle eventKey='0'></CustomToggle>
        </div>
        <Accordion.Collapse eventKey='0' className='navbar-collapse clearfix'>
          <Menu singleMenu={singleMenu} headerLinks={headerData?.menuLinks} />
        </Accordion.Collapse>
      </Accordion>
    </nav>
  )
}
export default Nav

function CustomToggle({ eventKey }: { eventKey: string }) {
  const decoratedOnClick = useAccordionButton(eventKey)

  return (
    <div className='navbar-toggle' onClick={decoratedOnClick}>
      <span className='icon-bar' />
      <span className='icon-bar' />
      <span className='icon-bar' />
    </div>
  )
}

import { SiteSetting } from '@payload-types'
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
  let logoDetails = {
    url: '',
    alt: '',
    height: 0,
    width: 0,
  }
  const { logo } = headerData
  if (Object.keys(logo).length && logo?.imageUrl === 'string') {
    logoDetails = {
      url: logo?.imageUrl,
      alt: '',
      height: logo?.height!,
      width: logo?.width!,
    }
  } else if (Object.keys(logo).length && typeof logo?.imageUrl !== 'string') {
    logoDetails = {
      url: logo.imageUrl?.url!,
      alt: logo.imageUrl?.alt || '',
      height: logo?.height!,
      width: logo?.width!,
    }
  }
  return (
    <nav className='main-menu navbar-expand-lg'>
      <Accordion>
        <div className='navbar-header py-10'>
          <div className='mobile-logo'>
            <Link legacyBehavior href='/'>
              {logoDetails.url && (
                <Image
                  style={{ objectFit: 'contain' }}
                  src={logoDetails.url}
                  alt={logoDetails.alt}
                  width={logoDetails?.width ? logoDetails?.width : 24}
                  height={logoDetails?.height ? logoDetails?.height : 24}
                />
              )}
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

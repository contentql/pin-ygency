'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import { generateMenuLinks } from '@/utils/generateMenuLinks'
import { useMetadata } from '@/utils/metadataContext'
import { sidebarClick, sidebarSignUpClick, stickyNav } from '@/utils/nav'

import UserDropdown from './Dropdown'
import Nav from './Nav'
import NavSearch from './NavSearch'

const DefaultHeader = ({
  singleMenu,
  dark,
}: {
  singleMenu: boolean
  dark: boolean
}) => {
  const headerData = useMetadata()

  useEffect(() => {
    stickyNav()
    // animation()
    sidebarClick()
    sidebarSignUpClick()
  }, [])

  const { navbar } = headerData
  const { logo, menuLinks } = navbar

  let logoDetails = {
    url: '',
    alt: '',
    height: 0,
    width: 0,
  }

  const navLinks = menuLinks?.length ? generateMenuLinks(menuLinks) : []

  if (Object.keys(logo).length && typeof logo?.imageUrl === 'string') {
    logoDetails = {
      url: logo?.imageUrl,
      alt: `${headerData.general?.title} logo`,
      height: logo?.height!,
      width: logo?.width!,
    }
  } else if (Object.keys(logo).length && typeof logo?.imageUrl === 'object') {
    logoDetails = {
      url: logo.imageUrl?.url!,
      alt: logo.imageUrl?.alt || `${headerData.general?.title} logo`,
      height: logo?.height!,
      width: logo?.width!,
    }
  }

  // if in case image or nav-links are not specified hiding the navbar
  if (!logoDetails.url && navLinks?.length === 0) {
    return null
  }

  return (
    <header className='main-header menu-absolute'>
      {/*Header-Upper*/}
      <div className='header-upper'>
        <div className='container-1620 clearfix container'>
          <div className='header-inner rpy-10 rel d-flex align-items-center'>
            <div className='logo-outer'>
              <div className='logo'>
                <Link href='/'>
                  <>
                    {logoDetails.url && (
                      <Image
                        style={{ objectFit: 'contain' }}
                        src={logoDetails.url}
                        alt={logoDetails.alt}
                        width={logoDetails?.width ? logoDetails?.width : 24}
                        height={logoDetails?.height ? logoDetails?.height : 24}
                      />
                    )}
                  </>
                </Link>
              </div>
            </div>
            <div className='nav-outer ms-lg-auto clearfix'>
              {/* Main Menu */}
              <Nav singleMenu={singleMenu} headerData={headerData?.navbar} />
              {/* Main Menu End*/}
            </div>

            <NavSearch />
            <UserDropdown />
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  )
}
export default DefaultHeader

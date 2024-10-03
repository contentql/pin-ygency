import { Media, User } from '@payload-types'
import Image from 'next/image'
import { Dropdown } from 'react-bootstrap'
import { FaRegCircleUser } from 'react-icons/fa6'

import { signOut } from '@/utils/signOut'

const UserDropdown = ({ user }: { user: User }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle id='dropdown-basic' as='div' bsPrefix='custom-toggle'>
        <div className='user-dropdown'>
          {user?.imageUrl ? (
            <Image
              style={{ objectFit: 'contain' }}
              src={(user?.imageUrl as Media)?.url || ''}
              alt='user'
              width={50}
              height={50}
            />
          ) : (
            <FaRegCircleUser title='user profile' size={38} />
          )}
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className='custom-dropdown-menu'>
        {user?.role?.includes('admin') ? (
          <Dropdown.Item className='custom-dropdown-item' href='/admin'>
            Admin
          </Dropdown.Item>
        ) : null}
        <Dropdown.Item className='custom-dropdown-item' href='/profile'>
          Profile
        </Dropdown.Item>
        <Dropdown.Item
          className='custom-dropdown-item'
          onClick={() => signOut()}>
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default UserDropdown

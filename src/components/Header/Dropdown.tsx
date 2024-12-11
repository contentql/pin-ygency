import { Media } from '@payload-types'
import Image from 'next/image'
import { Dropdown } from 'react-bootstrap'
import { CiUser } from 'react-icons/ci'

import { useUser } from '@/context/UserContext'
import { signOut } from '@/utils/signOut'

const UserDropdown = () => {
  const { user, setUser } = useUser()

  const handleSignOut = async () => {
    try {
      const response = await signOut()
      if (response.message === 'Logout successful.') {
        setUser(null)
      }
    } catch (error) {
      console.log({ error })
    }
  }

  if (!user) {
    return (
      <>
        <div className='menu-btns'>
          <div className='menu-sidebar'>
            <button>LogIn</button>
          </div>
        </div>
        <div className='menu-btns'>
          <div className='menu-sidebar-signup'>
            <button>SignUp</button>
          </div>
        </div>
      </>
    )
  }

  return (
    <Dropdown>
      <Dropdown.Toggle
        id='dropdown-basic p-40'
        as='div'
        bsPrefix='custom-toggle'>
        <div className='user-dropdown' style={{ cursor: 'pointer' }}>
          {user?.imageUrl ? (
            <Image
              style={{ objectFit: 'cover' }}
              src={(user?.imageUrl as Media)?.url || ''}
              alt='user'
              width={45}
              height={45}
            />
          ) : (
            <CiUser title='user profile' size={38} />
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
          onClick={() => handleSignOut()}>
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default UserDropdown

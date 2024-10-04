import { User } from '@payload-types'

import ProfileForm from './ProfileForm'
import Profile from './ProfileForm/Profile'

interface Props {
  user: User
}

const ProfileView: React.FC<Props> = ({ user }) => {
  return (
    <div className='margin-70'>
      <Profile />
      <ProfileForm user={user} />
    </div>
  )
}

export default ProfileView

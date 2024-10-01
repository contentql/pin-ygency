import { User } from '@payload-types'

import ProfileForm from './ProfileForm'
import Sidebar from './Sidebar'

interface Props {
  user: User
}

const ProfileView: React.FC<Props> = ({ user }) => {
  return (
    <div className='margin-70'>
      <div className='cs_profile '>
        <Sidebar userData={user} />
        <ProfileForm user={user} />
      </div>
    </div>
  )
}

export default ProfileView

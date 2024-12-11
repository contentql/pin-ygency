import ProfileForm from './ProfileForm'
import Profile from './ProfileForm/Profile'

const ProfileView: React.FC = () => {
  return (
    <div className='margin-70'>
      <Profile />
      <ProfileForm />
    </div>
  )
}

export default ProfileView

import Footer from '@/components/Footer'
import DefaultHeader from '@/components/Header/DefaultHeader'
import { SignInView } from '@/components/auth/sign-in'
import { SignUpView } from '@/components/auth/sign-up'
import { AuthWrapper } from '@/context/AuthWrapper'

interface LayoutProps {
  children: React.ReactNode
}

const AccountLayout: React.FC<LayoutProps> = async ({ children }) => {
  return (
    <AuthWrapper>
      <DefaultHeader singleMenu={true} dark />
      <SignInView />
      <SignUpView />

      <div>{children}</div>

      <Footer />
    </AuthWrapper>
  )
}

export default AccountLayout

import Branding from '@/components/Branding'
import Footer from '@/components/Footer'
import DefaultHeader from '@/components/Header/DefaultHeader'
import { SignInView } from '@/components/auth/sign-in'
import { SignUpView } from '@/components/auth/sign-up'

const MarketingLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DefaultHeader singleMenu={true} dark />
      <SignInView />
      <SignUpView />

      <main className='mt-16'>{children}</main>
      <Footer />
      <Branding />
    </>
  )
}

export default MarketingLayout

import { headers } from 'next/headers'

import Branding from '@/components/Branding'
import Footer from '@/components/Footer'
import DefaultHeader from '@/components/Header/DefaultHeader'
import { SignInView } from '@/components/auth/sign-in'
import { SignUpView } from '@/components/auth/sign-up'
import { serverClient } from '@/trpc/serverClient'
import { getCurrentUser } from '@/utils/getCurrentUser'

const MarketingLayout = async ({ children }: { children: React.ReactNode }) => {
  const metadata = await serverClient.siteSettings.getSiteSettings()

  const headersList = await headers()
  const user = await getCurrentUser(headersList)

  return (
    <div className='flex min-h-screen flex-col'>
      <DefaultHeader user={user} headerData={metadata} singleMenu={true} dark />
      <SignInView />
      <SignUpView />
      <main className='mt-16 flex-grow'>{children}</main>
      <Footer metadata={metadata} />
      <Branding />
    </div>
  )
}

export default MarketingLayout

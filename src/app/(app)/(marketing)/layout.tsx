import { headers } from 'next/headers'

import Branding from '@/components/Branding'
import Footer from '@/components/Footer'
import DefaultHeader from '@/components/Header/DefaultHeader'
import { SignInView } from '@/components/auth/sign-in'
import { SignUpView } from '@/components/auth/sign-up'
import { serverClient } from '@/trpc/serverClient'
import { getCurrentUser } from '@/utils/getCurrentUser'
import { MetadataProvider } from '@/utils/metadataContext'

const MarketingLayout = async ({ children }: { children: React.ReactNode }) => {
  const metadata = await serverClient.siteSettings.getSiteSettings()

  const headersList = await headers()
  const user = await getCurrentUser(headersList)

  return (
    <MetadataProvider metadata={metadata}>
      <DefaultHeader user={user} headerData={metadata} singleMenu={true} dark />
      <SignInView />
      <SignUpView />
      <main className='mt-16'>{children}</main>
      <Footer metadata={metadata} />
      <Branding />
    </MetadataProvider>
  )
}

export default MarketingLayout

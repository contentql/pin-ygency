import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { headers } from 'next/headers'

import Footer from '@/components/Footer'
import DefaultHeader from '@/components/Header/DefaultHeader'
import { SignInView } from '@/components/auth/sign-in'
import { SignUpView } from '@/components/auth/sign-up'
import { getCurrentUser } from '@/utils/getCurrentUser'
import { MetadataProvider } from '@/utils/metadataContext'

interface LayoutProps {
  children: React.ReactNode
}

const AccountLayout: React.FC<LayoutProps> = async ({ children }) => {
  const payload = await getPayloadHMR({ config: configPromise })

  const initData = await payload.findGlobal({
    slug: 'site-settings',
    draft: false,
  })

  const headersList = await headers()
  const user = await getCurrentUser(headersList)

  return (
    <div>
      <MetadataProvider metadata={initData}>
        <DefaultHeader
          user={user}
          headerData={initData}
          singleMenu={true}
          dark
        />
        <SignInView />
        <SignUpView />
        <div>{children}</div>
        <Footer metadata={initData} />
      </MetadataProvider>
    </div>
  )
}

export default AccountLayout

'use client'

import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

import Loading from '@/components/common/Loading'
import { trpc } from '@/trpc/client'

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const EmailVerificationView = ({ searchParams }: PageProps) => {
  const router = useRouter()

  const token = searchParams.token as string
  const userId = searchParams.id as string
  const { isLoading, isError, isSuccess } = trpc.auth.verifyEmail.useQuery({
    token: token,
    userId: userId,
  })

  if (isSuccess) {
    toast.success(`Your email successfully verified`)
    setTimeout(() => {
      router.replace('/')
    }, 2000)
  }
  if (isError) {
    toast.error(`Failed to verify your email address`)
  }
  return (
    <div className='main-container'>
      {isLoading ? (
        <Loading />
      ) : isSuccess ? (
        <div className=' message-container'>
          <h3 className='message-title '>Email Verified Successfully</h3>
          <div className='success-message'>
            Your email has been verified successfully. We are now redirecting
            you to the home page. Thank you for confirming your email and
            completing the process!
          </div>
        </div>
      ) : (
        <div className=' message-container'>
          <h3 className='message-title'>Email Verification Failed</h3>
          <div className='error-message'>
            There was an issue verifying your email. The link may have expired
            or been used. Please request a new link or contact support for help.
          </div>
        </div>
      )}
    </div>
  )
}

export default EmailVerificationView

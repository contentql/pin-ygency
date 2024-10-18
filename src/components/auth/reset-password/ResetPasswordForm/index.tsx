'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

import { trpc } from '@/trpc/client'
import { ResetPasswordSchema } from '@/trpc/routers/auth/validator'

interface Props {
  token: string
}

const ResetPasswordForm: React.FC<Props> = ({ token }) => {
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(ResetPasswordSchema),
    mode: 'onBlur',
    defaultValues: { token, password: '' },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  const {
    mutate: resetPasswordMutation,
    isPending: isResetPasswordPending,
    isError: isResetPasswordError,
    error: resetPasswordError,
    isSuccess: isResetPasswordSuccess,
  } = trpc.auth.resetPassword.useMutation({
    onSuccess: () => {
      toast.success('Password successfully updated, please login')
      router.push('/')
    },
    onError: () => {
      toast.error('Error while updating password, try again!')
    },
  })

  const onSubmit = async (data: z.infer<typeof ResetPasswordSchema>) => {
    resetPasswordMutation({
      ...data,
    })
  }

  return (
    <>
      <div className='main-container'>
        <h3> Almost there!</h3>
        <p>Please enter a new password to reset.</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='forgot-password-form'>
          <div className='form-group'>
            <label> Enter password</label>
            <input
              {...register('password')}
              type='password'
              id='password'
              name='password'
              placeholder='● ● ● ● ● ● ● ●'
            />
            {errors?.password && (
              <p className='form-error'>{errors.password.message}</p>
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <div className='menu-btns'>
              <div className='action-button'>
                <button type='submit' disabled={isResetPasswordPending}>
                  {isResetPasswordPending ? 'Processing...' : 'Reset Password'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default ResetPasswordForm

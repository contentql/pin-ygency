'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import slugify from 'slugify'

import { trpc } from '@/trpc/client'

import { SignUpFormData, SignUpFormSchema } from './validator'

const SignUpForm: React.FC = () => {
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [emailSentTo, setEmailSentTo] = useState<string>('')

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormSchema),
    mode: 'onBlur',
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = form

  const {
    mutate: signUpMutation,
    isPending: isSignUpPending,
    isError: isSignUpError,
    error: signUpError,
    isSuccess: isSignUpSuccess,
  } = trpc.auth.signUp.useMutation({
    onSuccess: data => {
      reset()
      setIsEmailSent(true)
      setEmailSentTo(data.email)
    },
    onError: () => {
      toast.error('Unable to create an account, try again!')
    },
  })

  const onSubmit = async (data: SignUpFormData) => {
    const randomNum = Math.floor(Math.random() * (24 - 1 + 1)) + 1
    const avatar = `/images/avatar/avatar_${randomNum}.jpg`

    const { confirmPassword, ...userData } = data

    signUpMutation({
      ...userData,
      avatar,
    })
  }

  return (
    <Fragment>
      <div className='form-back-drop-signup'></div>
      <section className='hidden-bar-signup'>
        <div className='inner-box-signup text-center'>
          <div className='cross-icon-signup'>
            <span className='fa fa-times' />
          </div>
          <div className='title'>
            <h4>Sign Up</h4>
          </div>
          {/*Appointment Form*/}
          <div className='appointment-form-signup'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='form-group-signup'>
                <input
                  {...register('username', {
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                      const value = slugify(event.target.value, {
                        remove: /[*+~.()'"!:@]/g,
                        lower: true,
                        strict: true,
                        locale: 'en',
                        trim: false,
                      })
                      setValue('username', value, { shouldValidate: true })
                    },
                  })}
                  type='text'
                  name='username'
                  placeholder='User Name'
                  required
                />
                {errors?.username && <p>{errors.username.message}</p>}
              </div>
              <div className='form-group-signup'>
                <input
                  {...register('email')}
                  type='text'
                  id='email'
                  name='email'
                  placeholder='john.doe@example.com'
                />
                {errors?.email && (
                  <p className='text-sm text-error'>{errors.email.message}</p>
                )}
              </div>
              <div className='form-group-signup'>
                <input
                  {...register('password')}
                  type='password'
                  id='password'
                  name='password'
                  placeholder='● ● ● ● ● ● ● ● ●'
                  required
                />
                {errors?.password && (
                  <p className='text-sm text-error'>
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className='form-group-signup'>
                <input
                  {...register('confirmPassword')}
                  type='password'
                  id='confirmPassword'
                  name='confirmPassword'
                  placeholder='● ● ● ● ● ● ● ● ●'
                  required
                />
                {errors?.confirmPassword && (
                  <p>{errors.confirmPassword.message}</p>
                )}
              </div>
              <div className='form-group-signup'>
                <button type='submit' className='theme-btn'>
                  {isSignUpPending ? 'Creating account...' : 'Sign Up'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default SignUpForm

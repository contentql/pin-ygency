'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Fragment, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { trpc } from '@/trpc/client'
import { SignInSchema } from '@/trpc/routers/auth/validator'

const SignInForm: React.FC = () => {
  const router = useRouter()

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form

  const {
    mutate: signInMutation,
    isPending: isSignInPending,
    isError: isSignInError,
    error: signInError,
    isSuccess: isSignInSuccess,
  } = trpc.auth.signIn.useMutation({
    onSuccess: result => {
      document.querySelector('body')!.classList.remove('side-content-visible')
      router.push('/profile')
      const isAdmin = result?.user?.role?.includes('admin')
      if (isAdmin) {
        router.push('/admin')
      } else {
        router.push('/profile')
      }
    },
    onError: () => {
      reset()
    },
  })

  const onSubmit = (data: z.infer<typeof SignInSchema>) => {
    signInMutation({
      ...data,
    })
    // startTransition(() => {
    //   signInWithCredentials({ ...data, redirectTo: '/' }).then(result => {
    //     if (!result) return
    //     if (result.success === true) {
    // document
    //   .querySelector('body')!
    //   .classList.remove('side-content-visible')
    //       // router.push('/')
    //     }
    //     if ('error' in result) {
    //       setBackendLoginResponse(result)
    //     }
    //   })
    // })
  }

  return (
    <Fragment>
      <div className='form-back-drop'></div>
      <section className='hidden-bar'>
        <div className='inner-box text-center'>
          <div className='cross-icon'>
            <span className='fa fa-times' />
          </div>
          <div>
            {isSignInSuccess ? (
              <p style={{ color: 'green', fontSize: '18px' }}>
                {' '}
                Successfully logged in! Redirecting...
              </p>
            ) : isSignInError ? (
              <p
                style={{
                  color: '#ff6666',
                  fontSize: '18px',
                  fontWeight: 'normal',
                }}>
                Invalid email or password
              </p>
            ) : null}
          </div>
          <div className='title'>
            <h4>Sign In</h4>
          </div>
          {/*Appointment Form*/}
          <div className='appointment-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='form-group'>
                <input
                  {...register('email')}
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email Address'
                  required
                />
                {errors?.email && (
                  <p className='form-error'>{errors.email.message}</p>
                )}
              </div>
              <div className='form-group'>
                <input
                  {...register('password')}
                  type='password'
                  id='password'
                  name='password'
                  placeholder='password'
                  required
                />
                {errors?.password && (
                  <p className='form-error'>{errors.password.message}</p>
                )}
              </div>
              <div className='form-group'>
                <p>
                  Forgot your password?{' '}
                  <Link
                    href='/forgot-password'
                    style={{
                      color: '#b2f5e1',
                      textDecoration: 'underline',
                    }}>
                    reset
                  </Link>
                </p>
                <button
                  type='submit'
                  className='theme-btn'
                  disabled={isSignInPending}>
                  {isSignInPending ? 'Signing in...' : 'Sign In'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
    // <div className='flex w-full items-center justify-center'>
    //   <div className='mx-auto w-full max-w-md  drop-shadow-2xl'>
    //     <div className='w-full max-w-md p-6'>
    // {isSignInSuccess ? (
    //   <Alert variant='success' className='mb-12'>
    //     <AlertDescription>
    //       Successfully logged in! Redirecting...
    //     </AlertDescription>
    //   </Alert>
    // ) : signInError ? (
    //   <Alert variant='danger' className='mb-12'>
    //     <AlertDescription>
    //       Sign in failed. Check the details you provided are incorrect.
    //     </AlertDescription>
    //   </Alert>
    // ) : null}
    //       <h1 className='mb-6 text-center text-3xl font-semibold text-base-content'>
    //         Sign In
    //       </h1>
    //       <h1 className='mb-6 text-center text-sm font-semibold text-base-content'>
    //         Join to Our Community with all time access and free{' '}
    //       </h1>

    //       <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
    //         <div>
    //           <LabelInputContainer className='mb-4'>
    //             <div className='inline-flex justify-between'>
    //               <label
    //                 htmlFor='email'
    //                 className='block text-sm font-medium text-base-content/70'>
    //                 E-Mail
    //               </label>
    // {errors?.email && (
    //   <p className='text-sm text-error'>{errors.email.message}</p>
    // )}
    //             </div>
    //             <Input
    //               {...register('email')}
    //               type='text'
    //               id='email'
    //               name='email'
    //               placeholder='john.doe@example.com'
    //             />
    //           </LabelInputContainer>
    //         </div>
    //         <div>
    //           <LabelInputContainer className='mb-8'>
    //             <div className='inline-flex justify-between'>
    //               <label
    //                 htmlFor='password'
    //                 className='block text-sm font-medium text-base-content/70'>
    //                 Password
    //               </label>
    //               {errors?.password && (
    //                 <p className='text-sm text-error'>
    //                   {errors.password.message}
    //                 </p>
    //               )}
    //             </div>
    //             <Input
    //               {...register('password')}
    //               type='password'
    //               id='password'
    //               name='password'
    //               placeholder='● ● ● ● ● ● ● ● ●'
    //             />
    //           </LabelInputContainer>
    //         </div>
    //         <p className='text-sm text-base-content/70'>
    //           Forgot your password?{' '}
    //           <Link className='underline' href='/reset-password'>
    //             Reset it.
    //           </Link>
    //         </p>
    //         <div>
    //           <button
    //             type='submit'
    //             className='w-full rounded-rounded-btn bg-primary  p-2 text-primary-content transition-all duration-500 hover:bg-primary-focus  focus:outline-none  disabled:cursor-not-allowed disabled:bg-opacity-50'
    //             disabled={isSignInPending}>
    //             {isSignInPending ? 'Signing in...' : 'Sign In'}
    //           </button>
    //         </div>
    //       </form>
    //       <div className='mt-4 text-center text-sm text-base-content/70'>
    //         <p>
    //           Don&apos;t have an account?{' '}
    //           <a href='/sign-up' className='text-base-content hover:underline'>
    //             SignUp here
    //           </a>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default SignInForm

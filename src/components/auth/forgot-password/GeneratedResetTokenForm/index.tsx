'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

import { trpc } from '@/trpc/client'
import { GenerateTokenSchema } from '@/trpc/routers/auth/validator'

const GenerateResetTokenForm: React.FC = () => {
  const [emailSentTo, setEmailSentTo] = useState<string>('')
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const form = useForm<z.infer<typeof GenerateTokenSchema>>({
    resolver: zodResolver(GenerateTokenSchema),
    mode: 'onBlur',
    defaultValues: { email: '' },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  const {
    mutate: generateResetPasswordTokenMutation,
    isPending: isGeneratePasswordPending,
    isError: isGeneratePasswordError,
    error: generatePasswordError,
    isSuccess: isGeneratePasswordSuccess,
  } = trpc.auth.forgotPassword.useMutation({
    onSuccess: () => {
      setShow(true)
    },
    onError: () => {
      setEmailSentTo('')
      toast.error('Error while sending email, please check')
    },
  })

  const onSubmit = async (data: z.infer<typeof GenerateTokenSchema>) => {
    setEmailSentTo(data?.email)
    generateResetPasswordTokenMutation({
      ...data,
    })
  }

  return (
    <>
      <div className='main-container'>
        <h3>Forgot password?</h3>
        <p>
          Remember your password?
          <a className='\' href='/'>
            SignIn here
          </a>
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='forgot-password-form'>
          <div className='form-group'>
            <label>Email</label>
            <input
              {...register('email')}
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              required
            />
            {errors?.email && (
              <p className='form-error'>{errors.email.message}</p>
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <div className='menu-btns'>
              <div className='action-button'>
                <button type='submit' disabled={isGeneratePasswordPending}>
                  {isGeneratePasswordPending ? 'Sending...' : 'Send Reset Link'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Modal
        show={show}
        keyboard
        animation={false}
        onHide={handleClose}
        centered>
        <Modal.Header className='modal-custom' closeButton>
          <Modal.Title>Rest Your Password</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-custom'>
          <p>
            A verification link has been sent to your inbox at{' '}
            <span className='user-email'>{emailSentTo}. </span> Please check
            your email to confirm your address and complete the password reset
            process.
          </p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default GenerateResetTokenForm

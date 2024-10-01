'use client'

import type { User } from '@payload-types'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { z } from 'zod'

import { trpc } from '@/trpc/client'

import DeleteAccountSection from './DeleteAccountSection'

const ProfileFormSchema = z.object({
  name: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  confirmPassword: z.string().optional().nullable(),
})
type ProfileFormDataType = z.infer<typeof ProfileFormSchema>

const ProfileForm = ({ user }: { user: User }) => {
  const [formData, setFormData] = useState<ProfileFormDataType>({
    name: user?.username,
    password: '',
    confirmPassword: '',
  })
  const trpcUtils = trpc.useUtils()

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const { mutate: updateUserMutation, isPending: isUpdateUserPending } =
    trpc.user.updateUser.useMutation({
      onSuccess: () => {
        toast.success('Profile updated successfully')
        trpcUtils.user.getUser.invalidate()
      },
      onError() {
        return null
      },
    })

  const handleUserUpdateForm = (e: any) => {
    e.preventDefault()
    const sanitizedData = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => Boolean(value)),
    )

    if (
      sanitizedData.password &&
      sanitizedData.password !== sanitizedData.confirmPassword
    ) {
      toast.error('Passwords do not match!')
      return
    }

    updateUserMutation({
      ...sanitizedData,
    })
  }

  return (
    <div className='cs_right_80'>
      <h2>Personal Information</h2>
      <form onSubmit={handleUserUpdateForm} className='cs_profile_form '>
        <div className='footer-newsletter'>
          <input
            type='text'
            placeholder='Email Address'
            id='email'
            name='email'
            value={user?.email}
            disabled
          />
        </div>
        <div className='footer-newsletter'>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='John'
            value={user?.username || ''}
            onChange={handleOnChange}
          />
        </div>
        <div className='footer-newsletter'>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            onChange={handleOnChange}
          />
        </div>
        <div className='footer-newsletter'>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            placeholder='Confirm password'
            onChange={handleOnChange}
          />
        </div>
        <div className='user-action'>
          <div className='menu-btns'>
            <div className='menu-sidebar-signup'>
              <button type='submit'>
                {isUpdateUserPending ? 'Updating...' : 'Update Profile'}
              </button>
            </div>
          </div>
          <DeleteAccountSection />
        </div>
      </form>
    </div>
  )
}

export default ProfileForm

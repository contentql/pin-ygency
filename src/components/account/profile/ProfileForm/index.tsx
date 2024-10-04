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
    name: user?.displayName,
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
    console.log('user data', sanitizedData)

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
    <div className='container'>
      <div className='user-profile'>
        <form onSubmit={handleUserUpdateForm} className='user-form'>
          <div className='form-row'>
            <div className='form-group'>
              <label>username</label>
              <input
                type='text'
                placeholder='username'
                id='username'
                name='username'
                value={user?.username!}
                disabled
              />
            </div>
            <div className='form-group'>
              <label>userId</label>
              <input
                type='text'
                placeholder='userId'
                id='id'
                name='id'
                value={user?.id}
                disabled
              />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group'>
              <label>Display Name</label>
              <input
                type='text'
                placeholder='Name'
                id='name'
                name='name'
                value={formData.name!}
                onChange={handleOnChange}
              />
            </div>
            <div className='form-group'>
              <label>Email</label>
              <input
                type='text'
                placeholder='email'
                id='email'
                name='email'
                value={user?.email}
                disabled
              />
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Password'
                onChange={handleOnChange}
              />
            </div>
            <div className='form-group'>
              <label>Confirm Password</label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Confirm password'
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className='user-action'>
            <div className='menu-btns'>
              <div className='action-button'>
                <button>
                  {isUpdateUserPending ? 'Updating...' : 'Update Profile'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <DeleteAccountSection />
    </div>
  )
}

export default ProfileForm

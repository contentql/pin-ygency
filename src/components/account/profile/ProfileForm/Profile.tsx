'use client'

import { Media } from '@payload-types'
import Image from 'next/image'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { CiUser } from 'react-icons/ci'
import { FaCamera } from 'react-icons/fa'

import { trpc } from '@/trpc/client'
import uploadMedia from '@/utils/uploadMedia'

const Profile = () => {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [userImage, setUserImage] = useState(null)
  // this is state to track uploading image, updating user profile
  const [uploadingImage, setUploadingImage] = useState(false)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function capitalizeWords(words: string) {
    return words
      ?.split(' ')
      ?.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })
      ?.join(' ')
  }

  const {
    data: user,
    isLoading: isUserPending,
    refetch: reFetchUser,
  } = trpc.user.getUser.useQuery()

  const { mutate: uploadUserImage } = trpc.user.updateUserImage.useMutation({
    onSuccess: async data => {
      setShow(false)
      reFetchUser()
      toast.success(`Image updated successfully`)
      setUserImage(null)
      setUploadedImage(null)
    },
    onError: () => {
      toast.error(`Failed to upload, please try again`)
    },
    onSettled: () => {
      setUploadingImage(false)
    },
  })

  const handleUpdateUserProfile = async () => {
    try {
      // setting true on uploading to media collection
      setUploadingImage(true)
      const doc = await uploadMedia(userImage)

      if (doc && doc.id) {
        uploadUserImage({ id: doc.id })
      } else {
        console.error(
          'Error: Unable to get document or document id is missing.',
        )
      }
    } catch (error) {
      setUploadingImage(false)
      console.error('Error uploading media:', error)
    }
  }

  const handleUpload = (event: any) => {
    setUserImage(event.target.files)
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = (e: any) => {
        setUploadedImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const userImageURL = user?.imageUrl
    ? (user?.imageUrl as Media)?.url!
    : (user?.imageUrl! as string)
  const latestProfilePic = uploadedImage ? uploadedImage : userImageURL

  return (
    <div className='wraper '>
      <div className='image-wraper'>
        <div className='user-image'>
          {user?.imageUrl ? (
            <Image
              src={(user?.imageUrl as Media)?.url || ''}
              alt={'user'}
              height={150}
              width={150}
            />
          ) : (
            <CiUser title='user profile' size={160} />
          )}
          <FaCamera
            size={24}
            color='#10b981'
            className='upload-image'
            onClick={handleShow}
          />
        </div>
      </div>
      <h5>{user?.username}</h5>
      <>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton className='modal-custom'>
            <Modal.Title>Upload Your Image</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-custom'>
            <div className='image'>
              {latestProfilePic ? (
                <Image
                  src={latestProfilePic}
                  width={120}
                  height={120}
                  className='user-image-upload'
                  alt='user profile'
                />
              ) : (
                <div className='user-image-upload' />
              )}
            </div>
            <p className='image-types'>
              Accepted file types: (.jpg, .jpeg, .png, .svg)
            </p>
          </Modal.Body>
          <Modal.Footer className='modal-custom'>
            <Button
              variant='primary'
              onClick={() =>
                document?.getElementById('dropzone-input')?.click()
              }>
              Click to upload
              <input
                id='dropzone-input'
                type='file'
                style={{ display: 'none' }}
                onChange={handleUpload}
              />
            </Button>
            {uploadedImage ? (
              <Button
                variant='primary'
                disabled={uploadingImage}
                onClick={handleUpdateUserProfile}>
                {uploadingImage ? 'Uploading...' : 'Upload'}
              </Button>
            ) : null}
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )
}

export default Profile

'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import toast from 'react-hot-toast'

import { trpc } from '@/trpc/client'

export default function DeleteAccountSection() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [isAllowedToDelete, setIsAllowedToDelete] = useState(false)
  const [confirmation, setConfirmation] = useState('')
  const router = useRouter()

  const {
    mutate: deleteUserMutation,
    isPending: isDeleteAccountPending,
    isError: isDeleteAccountError,
    error: DeleteAccountError,
    isSuccess: DeleteAccountSuccess,
  } = trpc.user.deleteUser.useMutation({
    onSuccess: () => {
      toast.success('Account deleted successfully')
      router.push('/sign-up')
    },
    onError: () => {
      toast.error('Unable to delete the account, try again!')
    },
  })

  const handleDeleteUser = async (e: any) => {
    e.preventDefault()

    deleteUserMutation()
  }

  useEffect(() => {
    if (isDeleteAccountPending === false && show === true) {
      setShow(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleteAccountPending])

  return (
    <div className='delete-account-warper'>
      <div>
        <h3>Delete Account</h3>
        <p>
          Delete your account and permanently erase all associated data. This
          action cannot be undone.
        </p>
      </div>
      <div className='menu-btns'>
        <div className='menu-sidebar-delete'>
          <button type='button' onClick={handleShow}>
            Delete Account
          </button>
        </div>
      </div>

      {/* Delete Account Dialog */}
      <>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header className='modal-custom' closeButton>
            <Modal.Title>Delete account</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-custom'>
            Permanently remove your Personal Account and all of its contents
            from the platform. This action is not reversible, so please continue
            with caution.
            <p>
              Type{' '}
              <span
                style={{
                  backgroundColor: 'red',
                  borderRadius: '4px',
                  color: 'white',
                  padding: '2px',
                }}>
                delete
              </span>{' '}
              to confirm.
            </p>
            <div className='delete-account'>
              <input
                type='text'
                id='confirmDelete'
                name='confirmDelete'
                placeholder='Type here'
                value={confirmation}
                onChange={e => {
                  setConfirmation(e.target.value)
                  if (e.target.value === 'delete') {
                    setIsAllowedToDelete(true)
                  } else {
                    setIsAllowedToDelete(false)
                  }
                }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer className='modal-custom'>
            <Button
              variant='primary'
              onClick={handleDeleteUser}
              disabled={!isAllowedToDelete}>
              {isDeleteAccountPending ? 'Deleting...' : 'Delete Account'}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )
}

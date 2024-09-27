'use client'

import '../../public/assets/css/custom.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

// import Container from '@/payload/blocks/common/Container';
import { trpc } from '@/trpc/client'

const WelcomePage = () => {
  const router = useRouter()
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)
  const [showLoadingModal, setShowLoadingModal] = useState(false)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const { mutate: runSeedMutation, isPending: isSeedLoading } =
    trpc.seed.runSeed.useMutation({
      onMutate: () => {
        setShow(true)
      },
      onSuccess: () => {
        setShow(false)
        window.location.reload()
      },
    })

  const handleSeedData = () => {
    runSeedMutation()
  }

  const handleLoadDemoClick = () => {
    setShow(true)
  }

  const handleConfirmLoad = () => {
    setShowConfirmationModal(false)
    handleSeedData()
  }

  return (
    <div className='h-screen'>
      <div className='welcome-dashboard'>
        <h1>
          Welcome to <span className='heading'>Ygency</span>
        </h1>
        <div>
          Your blog is ready to shine. Start by creating your first post or
          exploring tags, users, and more.
        </div>
        <div className='container'>
          <p>
            Want to see how your blog could look with sample content? Click
            below to load demo posts, tags, and users.
          </p>
          <Button variant='primary' onClick={handleLoadDemoClick}>
            Load demo Content
          </Button>
        </div>
        <Modal
          className='modal'
          dialogClassName='custom-modal'
          show={show}
          backdrop='static' // Disable closing when clicking outside
          keyboard={false}
          onHide={handleClose}>
          <div className='modal-content'>
            {isSeedLoading ? (
              <div className='loading'>
                <span className='loader'></span>
                <h4>Loading Demo Data...</h4>
                <p>
                  Once done you&apos;ll be redirected to homepage. Please do not
                  exit this page.
                </p>
              </div>
            ) : (
              <div>
                <h3>Are you sure you want to load demo data?</h3>
                <p>It would take around a minute.</p>
              </div>
            )}
            <Modal.Footer>
              <Button
                variant='secondary'
                disabled={isSeedLoading}
                onClick={handleClose}>
                Close
              </Button>
              <Button
                variant='primary'
                disabled={isSeedLoading}
                onClick={handleClose}>
                Yes, Load Data
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default WelcomePage

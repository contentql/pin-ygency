'use client'

import '../../public/assets/css/custom.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

// import Container from '@/payload/blocks/common/Container';
import { trpc } from '@/trpc/client'

const WelcomePage = () => {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const { mutate: runSeedMutation, isPending: isSeedLoading } =
    trpc.seed.runSeed.useMutation({
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
          show={show}
          backdrop='static'
          keyboard={false}
          onHide={handleClose}
          centered>
          <Modal.Header closeButton className='modal-custom'>
            <Modal.Title>Load Demo Data</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-custom'>
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
              <p>
                Are you sure you want to load demo data? This process may take
                around a minute to complete
              </p>
            )}
          </Modal.Body>
          <Modal.Footer className='modal-custom'>
            <Button
              variant='primary'
              disabled={isSeedLoading}
              onClick={handleConfirmLoad}>
              Yes, Load Data
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default WelcomePage

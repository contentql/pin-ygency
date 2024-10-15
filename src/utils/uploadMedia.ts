import { Media } from '@payload-types'
import toast from 'react-hot-toast'

async function uploadMedia(files: FileList | null): Promise<Media | undefined> {
  const formData = new FormData()
  if (!files) {
    toast.error(`please select a file to upload`)
    return undefined
  }
  formData.append('file', files[0])

  try {
    const response = await fetch(window.location.origin + '/api/media', {
      method: 'POST',
      body: formData,
    })
    console.log('response', response)

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`)
    }

    const { doc }: { doc: Media } = await response.json()

    return doc
  } catch (error) {
    if (error instanceof Error) {
      console.error('Upload failed', error.message)
    }
  }
}

export default uploadMedia

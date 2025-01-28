import { Media } from '@payload-types'

async function uploadMedia(file: File): Promise<Media> {
  const formData = new FormData()
  if (!file) {
    throw new Error(`Failed to upload file`)
  }

  formData.append('file', file)

  try {
    const response = await fetch(window.location.origin + '/api/media', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`)
    }

    const { doc }: { doc: Media } = await response.json()

    return doc
  } catch (error) {
    if (error instanceof Error) {
      console.error('Upload failed', error.message)
    }

    throw new Error(`Failed to upload file`)
  }
}

export default uploadMedia

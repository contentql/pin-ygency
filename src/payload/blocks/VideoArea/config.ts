import { Block } from 'payload'

const VideoAreaConfig: Block = {
  slug: 'VideoArea',
  interfaceName: 'VideoAreaType',
  labels: {
    singular: 'VideoArea Block',
    plural: 'VideoArea Blocks',
  },
  fields: [
    {
      name: 'video_image',
      type: 'upload',
      relationTo: 'media',
      label: 'Video Image',
      admin: {
        description:
          'Upload an image to represent the video. Recommended dimensions: [insert dimensions].',
      },
    },
    {
      name: 'video_link',
      type: 'text',
      label: 'Video Link',
      admin: {
        description:
          'Enter the URL for the video. Supported platforms: YouTube, Vimeo, etc.',
      },
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      admin: {
        description: 'Provide a brief description of the video content.',
      },
    },
  ],
}

export default VideoAreaConfig

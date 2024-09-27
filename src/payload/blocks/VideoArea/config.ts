import { Block } from 'payload'

const VideoAreaConfig: Block = {
  slug: 'VideoArea',
  // imageURL: '',
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
    },
    {
      name: 'video_link',
      type: 'text',
      label: 'Video Link',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
    },
  ],
}

export default VideoAreaConfig

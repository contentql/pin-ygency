import { Block } from 'payload'

const BannerConfig: Block = {
  slug: 'Banner',
  interfaceName: 'BannerType',
  labels: {
    singular: 'Banner Block',
    plural: 'Banner Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'Enter the main title for the banner section.',
      },
    },
    {
      name: 'banner_image1',
      type: 'upload',
      relationTo: 'media',
      label: 'Banner Image One',
      admin: {
        description:
          'Upload the first banner image. Recommended dimensions: [insert dimensions].',
      },
    },
    {
      name: 'banner_image2',
      type: 'upload',
      relationTo: 'media',
      label: 'Banner Image Two',
      admin: {
        description:
          'Upload the second banner image. Recommended dimensions: [insert dimensions].',
      },
    },
  ],
}

export default BannerConfig

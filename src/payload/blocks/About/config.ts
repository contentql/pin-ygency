import { Block } from 'payload'

const AboutConfig: Block = {
  slug: 'About',
  interfaceName: 'AboutType',
  labels: {
    singular: 'About Block',
    plural: 'About Blocks',
  },
  fields: [
    {
      name: 'badge_title',
      type: 'text',
      label: 'Badge Title',
      admin: {
        description: 'Enter a short badge title to highlight key information.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'Enter the main title for the About section.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      admin: {
        description: 'Provide a detailed description about this section.',
      },
    },
    {
      name: 'percentages',
      type: 'array',
      label: 'Percentages',
      maxRows: 6,
      fields: [
        {
          name: 'percentage',
          type: 'number',
          label: 'Percentage Number',
          admin: {
            description: 'Enter a percentage value (0-100).',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          admin: {
            description: 'Enter a title corresponding to the percentage value.',
          },
        },
      ],
    },
    {
      name: 'about_image',
      type: 'upload',
      relationTo: 'media',
      label: 'About Image',
      admin: {
        description: 'Upload an image that represents the About section.',
      },
    },
  ],
}

export default AboutConfig

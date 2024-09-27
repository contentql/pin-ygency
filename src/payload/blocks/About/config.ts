import { Block } from 'payload'

const AboutConfig: Block = {
  slug: 'About',
  // imageURL: '',
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
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
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
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
      ],
    },

    {
      name: 'about_image',
      type: 'upload',
      relationTo: 'media',
      label: 'About Image',
    },
  ],
}

export default AboutConfig

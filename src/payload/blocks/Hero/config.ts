import { Block } from 'payload'

const HeroConfig: Block = {
  slug: 'Hero',
  interfaceName: 'HeroType',
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true, // Optional: Marking the title as required
      admin: {
        description: 'Enter the main title for the hero section.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Hero Description',
      admin: {
        description: 'Provide a brief description to accompany the title.',
      },
    },
    {
      name: 'clients',
      type: 'array',
      label: 'Clients',
      maxRows: 7,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          required: true, // Optional: Marking the client image as required
          admin: {
            description: 'Upload the client’s logo or image.',
          },
        },
      ],
    },
    {
      name: 'client_description',
      type: 'text',
      label: 'Client Description',
      admin: {
        description:
          'A brief description about the clients featured in the hero section.',
      },
    },
    {
      name: 'hero_image',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
      required: true, // Optional: Marking the hero image as required
      admin: {
        description: 'Upload the main background image for the hero section.',
      },
    },
    {
      name: 'badge_title',
      type: 'text',
      label: 'Badge Title',
      admin: {
        description: 'Enter a badge title if applicable.',
      },
    },
  ],
}

export default HeroConfig

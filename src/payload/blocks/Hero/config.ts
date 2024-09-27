import { Block } from 'payload'

const HeroConfig: Block = {
  slug: 'Hero',
  // imageURL: '',
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
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Hero Description',
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
        },
      ],
    },
    {
      name: 'client_description',
      type: 'text',
      label: 'Client Description',
    },
    {
      name: 'hero_image',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
    },
    {
      name: 'badge_title',
      type: 'text',
      label: 'Badge Title',
    },
  ],
}

export default HeroConfig

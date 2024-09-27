import { Block } from 'payload'

const ServiceConfig: Block = {
  slug: 'Service',
  // imageURL: '',
  interfaceName: 'ServiceType',
  labels: {
    singular: 'Service Block',
    plural: 'Service Blocks',
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
      name: 'services',
      type: 'array',
      label: 'Services',
      fields: [
        {
          name: 'service_icon',
          type: 'select',
          options: [
            { label: 'Development', value: 'flaticon-development' },
            {
              label: 'Mobile Development',
              value: 'flaticon-mobile-development',
            },
            { label: 'Brainstorming', value: 'flaticon-brainstorming' },
            { label: 'Abstract', value: 'flaticon-abstract' },
            { label: 'UX', value: 'flaticon-ux' },
            { label: 'Optimization', value: 'flaticon-optimization' },
            { label: 'Goal', value: 'flaticon-goal' },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
      ],
    },
  ],
}

export default ServiceConfig

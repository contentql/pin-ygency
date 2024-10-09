import { Block } from 'payload'

const ServiceConfig: Block = {
  slug: 'Service',
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
      admin: {
        description: 'Enter a short title to highlight the service category.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'Main title for the services section.',
      },
    },
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      maxRows: 10, // Limit the number of services if desired
      fields: [
        {
          name: 'service_icon',
          type: 'select',
          label: 'Service Icon',
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
          admin: {
            description: 'Select an icon that represents the service.',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Service Title',
          admin: {
            description: 'Enter the name of the service.',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Service Image',
          admin: {
            description: 'Upload an image that represents the service.',
          },
        },
      ],
    },
  ],
}

export default ServiceConfig

import { Block } from 'payload'

const AdvertiseConfig: Block = {
  slug: 'Advertise',
  interfaceName: 'AdvertiseType',
  labels: {
    singular: 'Advertise Block',
    plural: 'Advertise Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Advertise Title',
      required: true, // Optional: Make this field required
      admin: {
        description: 'Enter the main title for the advertisement.',
      },
    },
    {
      name: 'banner_image',
      type: 'upload',
      relationTo: 'media',
      label: 'Banner Image',
      required: true, // Optional: Make this field required
      admin: {
        description: 'Upload an image for the advertisement banner.',
      },
    },
    {
      name: 'project_completion_count',
      type: 'text',
      label: 'Project Completion Count',
      admin: {
        description: 'Enter the number of completed projects.',
      },
    },
    {
      name: 'completion_status',
      type: 'text',
      label: 'Project Completion Status',
      admin: {
        description: 'Enter the current status of the projects.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Advertise Description',
      admin: {
        description: 'Provide a detailed description for the advertisement.',
      },
    },
    {
      name: 'clients',
      type: 'array',
      label: 'Clients',
      maxRows: 4,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Client Logo/Image',
          required: true, // Optional: Make this field required
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
          'A brief description about the clients featured in the advertisement.',
      },
    },
  ],
}

export default AdvertiseConfig

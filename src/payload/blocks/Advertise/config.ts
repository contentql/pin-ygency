import { Block } from 'payload'

const AdvertiseConfig: Block = {
  slug: 'Advertise',
  // imageURL: '',
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
    },
    {
      name: 'banner_image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
    {
      name: 'project_completion_count',
      type: 'text',
      label: 'Project Completion Count',
      admin: { description: 'Enter a number' },
    },
    {
      name: 'completion_status',
      type: 'text',
      label: 'Project Completion Status',
      admin: { description: 'Enter status of projects count' },
    },

    {
      name: 'description',
      type: 'textarea',
      label: 'Advertise Description',
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
          label: 'Image',
        },
      ],
    },
    {
      name: 'client_description',
      type: 'text',
      label: 'Client Description',
    },
  ],
}

export default AdvertiseConfig

import { Block } from 'payload'

export const OurClientsConfig: Block = {
  slug: 'OurClients',
  interfaceName: 'OurClientsType',
  labels: {
    singular: 'Our Clients Block',
    plural: 'Our Clients Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'Enter a title for the clients section.',
      },
    },
    {
      name: 'clients',
      type: 'array',
      label: 'Clients',
      admin: {
        description: 'Add logos of the clients. You can upload multiple logos.',
      },
      fields: [
        {
          name: 'client_logo',
          type: 'upload',
          label: 'Client Logo',
          relationTo: 'media',
          admin: {
            description: 'Upload the logo of the client.',
          },
        },
      ],
    },
  ],
}

export default OurClientsConfig

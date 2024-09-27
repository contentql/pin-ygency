import { Block } from 'payload'

export const OurClientsConfig: Block = {
  slug: 'OurClients',
  // imageURL: '',
  interfaceName: 'OurClientsType',
  labels: {
    singular: 'OurClients Block',
    plural: 'OurClients Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'clients',
      type: 'array',
      fields: [
        {
          name: 'client_logo',
          type: 'upload',
          label: 'Client logo',
          relationTo: 'media',
        },
      ],
    },
  ],
}
export default OurClientsConfig

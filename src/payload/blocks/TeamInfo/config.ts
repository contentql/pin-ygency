import { Block } from 'payload'

const TeamInfoConfig: Block = {
  slug: 'TeamInfo',
  // imageURL: '',
  interfaceName: 'TeamInfoType',
  labels: {
    singular: 'TeamInfo Block',
    plural: 'TeamInfo Blocks',
  },
  fields: [
    {
      name: 'caption',
      type: 'text',
      label: 'Caption',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
        },
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Creativity', value: 'flaticon-creativity' },
            {
              label: 'Mobile Banking',
              value: 'flaticon-mobile-banking',
            },
            { label: 'Optimization', value: 'flaticon-optimization-1' },
          ],
        },
      ],
    },
  ],
}

export default TeamInfoConfig

import { Block } from 'payload'

const TeamInfoConfig: Block = {
  slug: 'TeamInfo',
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
      admin: {
        description: 'A short caption that introduces the team section.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'The main title for the team section.',
      },
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          admin: {
            description: 'The title of the feature.',
          },
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          admin: {
            description: 'A detailed description of the feature.',
          },
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Creativity', value: 'flaticon-creativity' },
            { label: 'Mobile Banking', value: 'flaticon-mobile-banking' },
            { label: 'Optimization', value: 'flaticon-optimization-1' },
          ],
          admin: {
            description: 'Select an icon that represents the feature.',
          },
        },
      ],
    },
  ],
}

export default TeamInfoConfig

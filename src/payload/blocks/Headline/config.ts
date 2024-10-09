import { Block } from 'payload'

const HeadlineConfig: Block = {
  slug: 'Headline',
  interfaceName: 'HeadlineType',
  labels: {
    singular: 'Headline Block',
    plural: 'Headline Blocks',
  },
  fields: [
    {
      name: 'headlines',
      label: 'Headlines',
      type: 'array',
      admin: {
        description: 'Add multiple headlines to display in this block.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          admin: {
            description: 'The headline text to display.',
          },
        },
      ],
    },
  ],
}

export default HeadlineConfig

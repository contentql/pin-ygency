import { Block } from 'payload'

const HeadlineConfig: Block = {
  slug: 'Headline',
  // imageURL: '',
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
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
      ],
    },
  ],
}

export default HeadlineConfig

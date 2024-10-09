import { Block } from 'payload'

const StatisticsConfig: Block = {
  slug: 'Statistics',
  interfaceName: 'StatisticsType',
  labels: {
    singular: 'Statistics Block',
    plural: 'Statistics Blocks',
  },
  fields: [
    {
      name: 'statistics',
      type: 'array',
      label: 'Statistics',
      admin: {
        description: 'Add individual statistics with a number and title.',
      },
      fields: [
        {
          name: 'number',
          type: 'number',
          label: 'Number',
          admin: {
            description: 'Enter the numerical value for the statistic.',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          admin: {
            description: 'Provide a title for the statistic.',
          },
        },
      ],
    },
  ],
}

export default StatisticsConfig

import { Block } from 'payload'

const ServiceFeaturesConfig: Block = {
  slug: 'ServiceFeatures',
  interfaceName: 'ServiceFeaturesType',
  labels: {
    singular: 'Service Features Block',
    plural: 'Service Features Blocks',
  },
  fields: [
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      minRows: 1,
      maxRows: 10, // Optional: Set limits on the number of features
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          admin: {
            description: 'Enter the feature title.',
          },
        },
        {
          name: 'url',
          label: 'Url',
          type: 'text',
          admin: {
            description: 'Enter url.',
          },
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea', // Changed to textarea for longer descriptions
          admin: {
            description: 'Provide a detailed description of the feature.',
          },
        },
      ],
    },
  ],
}

export default ServiceFeaturesConfig

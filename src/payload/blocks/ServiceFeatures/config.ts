import { Block } from 'payload'

const ServiceFeaturesConfig: Block = {
  slug: 'ServiceFeatures',
  // imageURL: '',
  interfaceName: 'ServiceFeaturesType',
  labels: {
    singular: 'ServiceFeatures Block',
    plural: 'ServiceFeatures Blocks',
  },
  fields: [
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'text',
        },
      ],
    },
  ],
}

export default ServiceFeaturesConfig

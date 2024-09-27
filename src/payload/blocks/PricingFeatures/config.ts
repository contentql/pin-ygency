import { Block } from 'payload'

const PricingFeaturesConfig: Block = {
  slug: 'PricingFeatures',
  // imageURL: '',
  interfaceName: 'PricingFeaturesType',
  labels: {
    singular: 'PricingFeatures Block',
    plural: 'PricingFeatures Blocks',
  },
  fields: [
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'datails',
      type: 'array',
      label: 'Details',
      fields: [
        {
          name: 'heading',
          label: 'Heading',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'text',
        },
      ],
    },
    {
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
    },
    {
      name: 'button_path',
      label: 'Button Path',
      type: 'text',
    },
    {
      name: 'features',
      label: 'Features',
      type: 'array',
      fields: [
        {
          name: 'icons',
          type: 'select',
          options: [
            { label: 'bezier-curve', value: 'fa-bezier-curve' },
            {
              label: 'cogs',
              value: 'fa-cogs',
            },
            { label: 'chart-pie', value: 'fa-chart-pie' },
            { label: 'shield-cross', value: 'fa-shield-cross' },
          ],
        },
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

export default PricingFeaturesConfig

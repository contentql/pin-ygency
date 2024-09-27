import { Block } from 'payload'

const PricingSectionConfig: Block = {
  slug: 'PricingSection',
  // imageURL: '',
  interfaceName: 'PricingSectionType',
  labels: {
    singular: 'PricingSection Block',
    plural: 'PricingSection Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
    },
    {
      name: 'pricing',
      type: 'array',
      label: 'Pricing',
      fields: [
        {
          name: 'icons',
          type: 'select',
          options: [
            { label: 'flaticon-abstract', value: 'flaticon-abstract' },
            {
              label: 'flaticon-liquid',
              value: 'flaticon-liquid',
            },
            { label: 'flaticon-petals', value: 'flaticon-petals' },
          ],
        },
        {
          name: 'package_title',
          label: 'Package Title',
          type: 'text',
        },
        {
          name: 'price',
          label: 'Price',
          type: 'number',
        },
        {
          name: 'price_text',
          label: 'Price Text',
          type: 'text',
        },
        {
          name: 'available_features',
          label: 'Available Features',
          type: 'array',
          fields: [
            {
              name: 'feature',
              label: 'Feaure',
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
          name: 'button_url',
          label: 'Button Url',
          type: 'text',
        },
      ],
    },
  ],
}

export default PricingSectionConfig

import { Block } from 'payload'

const PricingSectionConfig: Block = {
  slug: 'PricingSection',
  interfaceName: 'PricingSectionType',
  labels: {
    singular: 'Pricing Section Block',
    plural: 'Pricing Section Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'Enter the main title for the pricing section.',
      },
    },
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
      admin: {
        description: 'Enter a subtitle for the pricing section.',
      },
    },
    {
      name: 'pricing',
      type: 'array',
      label: 'Pricing',
      admin: {
        description: 'Add pricing packages with details.',
      },
      fields: [
        {
          name: 'icons',
          type: 'select',
          options: [
            { label: 'Abstract', value: 'flaticon-abstract' },
            { label: 'Liquid', value: 'flaticon-liquid' },
            { label: 'Petals', value: 'flaticon-petals' },
          ],
          admin: {
            description: 'Select an icon to represent this pricing package.',
          },
        },
        {
          name: 'package_title',
          label: 'Package Title',
          type: 'text',
          admin: {
            description: 'Enter the title for this pricing package.',
          },
        },
        {
          name: 'price',
          label: 'Price',
          type: 'number',
          admin: {
            description: 'Enter the price for this package.',
          },
        },
        {
          name: 'price_text',
          label: 'Price Text',
          type: 'text',
          admin: {
            description:
              'Add any additional text related to the price, e.g., "per month".',
          },
        },
        {
          name: 'available_features',
          label: 'Available Features',
          type: 'array',
          admin: {
            description: 'List the features available in this pricing package.',
          },
          fields: [
            {
              name: 'feature',
              label: 'Feature',
              type: 'text',
              admin: {
                description: 'Enter a feature of this pricing package.',
              },
            },
          ],
        },
        {
          name: 'button_text',
          label: 'Button Text',
          type: 'text',
          admin: {
            description:
              'Enter the text for the button associated with this package.',
          },
        },
        {
          name: 'button_url',
          label: 'Button Url',
          type: 'text',
          admin: {
            description: 'Enter the URL for the button action.',
          },
        },
      ],
    },
  ],
}

export default PricingSectionConfig

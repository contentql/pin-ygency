import { Block } from 'payload'

const PricingFeaturesConfig: Block = {
  slug: 'PricingFeatures',
  interfaceName: 'PricingFeaturesType',
  labels: {
    singular: 'Pricing Features Block',
    plural: 'Pricing Features Blocks',
  },
  fields: [
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
      admin: {
        description: 'Enter a subtitle for the pricing features section.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'Enter the main title for the pricing features section.',
      },
    },
    {
      name: 'datails',
      type: 'array',
      label: 'Details',
      admin: {
        description: 'Add details related to the pricing features.',
      },
      fields: [
        {
          name: 'heading',
          label: 'Heading',
          type: 'text',
          admin: {
            description: 'Enter the heading for this detail.',
          },
        },
        {
          name: 'description',
          label: 'Description',
          type: 'text',
          admin: {
            description: 'Provide a description for this detail.',
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
          'Enter the text for the button in the pricing features section.',
      },
    },
    {
      name: 'button_path',
      label: 'Button Path',
      type: 'text',
      admin: {
        description: 'Enter the URL or path for the button to link to.',
      },
    },
    {
      name: 'features',
      label: 'Features',
      type: 'array',
      admin: {
        description: 'List the features associated with the pricing plans.',
      },
      fields: [
        {
          name: 'icons',
          type: 'select',
          options: [
            { label: 'Bezier Curve', value: 'fa-bezier-curve' },
            { label: 'Cogs', value: 'fa-cogs' },
            { label: 'Chart Pie', value: 'fa-chart-pie' },
            { label: 'Shield Cross', value: 'fa-shield-cross' },
          ],
          admin: {
            description: 'Select an icon to represent the feature.',
          },
        },
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          admin: {
            description: 'Enter the title of the feature.',
          },
        },
        {
          name: 'description',
          label: 'Description',
          type: 'text',
          admin: {
            description: 'Provide a description of the feature.',
          },
        },
      ],
    },
  ],
}

export default PricingFeaturesConfig

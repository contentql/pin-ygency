import { Block } from 'payload'

const ServiceBannerConfig: Block = {
  slug: 'ServiceBanner',
  interfaceName: 'ServiceBannerType',
  labels: {
    singular: 'Service Banner Block',
    plural: 'Service Banner Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        description: 'Enter the title for the service banner.',
      },
    },
  ],
}

export default ServiceBannerConfig

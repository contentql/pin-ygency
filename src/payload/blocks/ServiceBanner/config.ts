import { Block } from 'payload'

const ServiceBannerConfig: Block = {
  slug: 'ServiceBanner',
  // imageURL: '',
  interfaceName: 'ServiceBannerType',
  labels: {
    singular: 'ServiceBanner Block',
    plural: 'ServiceBanner Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
  ],
}

export default ServiceBannerConfig

import { Block } from 'payload'

const PageBannerConfig: Block = {
  slug: 'PageBanner',
  // imageURL: '',
  interfaceName: 'PageBannerType',
  labels: {
    singular: 'PageBanner Block',
    plural: 'PageBanner Blocks',
  },
  imageAltText: 'text',
  fields: [
    {
      name: 'page_name',
      type: 'text',
      label: 'Page Name',
      required: true,
    },
  ],
}
export default PageBannerConfig

import { Block } from 'payload'

const PageBannerConfig: Block = {
  slug: 'PageBanner',
  interfaceName: 'PageBannerType',
  labels: {
    singular: 'Page Banner Block',
    plural: 'Page Banner Blocks',
  },
  fields: [
    {
      name: 'page_name',
      type: 'text',
      label: 'Page Name',
      required: true,
      admin: {
        description: 'Enter the name of the page to display on the banner.',
      },
    },
  ],
}

export default PageBannerConfig

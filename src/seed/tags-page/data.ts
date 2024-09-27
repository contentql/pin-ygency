import { Page } from 'payload-types'

export type TagsPageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>

export const tagsPageData: TagsPageDataType = {
  title: 'Tags',
  isHome: false,
  _status: 'published',
  layout: [
    {
      blockType: 'List',
      title: 'Tags',
      description:
        'Navigate through topics effortlessly with our tags. Click to find related articles and streamline your reading. Discover tag categories below.',
      collectionSlug: 'tags',
    },
  ],
}

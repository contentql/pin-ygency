import { Page } from 'payload-types'

export type BlogsPageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>

export const blogsPageData: BlogsPageDataType = {
  title: 'Blogs',
  isHome: false,
  _status: 'published',
  layout: [
    {
      blockType: 'List',
      title: 'Free Blogs Posting Page for startups',
      description:
        'A super minimal & lightweight theme with Premium Membership and fully payload-compatible.',
      collectionSlug: 'blogs',
    },
  ],
}

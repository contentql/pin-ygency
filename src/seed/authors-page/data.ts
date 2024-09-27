import { Page } from 'payload-types'

export type AuthorsPageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>

export const authorsPageData: AuthorsPageDataType = {
  title: 'Authors',
  isHome: false,
  _status: 'published',
  layout: [
    {
      blockType: 'List',
      title: 'Discover Authors',
      description:
        'Discover the talented individuals shaping our content. Meet our authors, the creative minds bringing our blog to life.',
      collectionSlug: 'users',
    },
  ],
}

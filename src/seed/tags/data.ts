import path from 'path'
import { RequiredDataFromCollectionSlug } from 'payload'

export type TagDataType = RequiredDataFromCollectionSlug<'tags'>
export type TagImageType = {
  alt: string
  filePath: string
}

export const tagsData: TagDataType[] = [
  {
    title: 'Welcome',
    color: 'blue',
    description: 'This is a welcome tag',
    tagImage: '',
    _status: 'published',
  },

  {
    title: 'Management',
    color: 'purple',
    description: 'This is a Project Management tag',
    tagImage: '',
    _status: 'published',
  },
  {
    title: 'AI Insights',
    color: 'indigo',
    description: 'This is a AI Insights tag',
    tagImage: '',
    _status: 'published',
  },
  {
    title: 'Enterprise',
    color: 'green',
    description: 'This is a Enterprise tag',
    tagImage: '',
    _status: 'published',
  },
]
export const tagsImagesData: TagImageType[] = [
  {
    alt: 'Tag 1',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/shop/preview1.jpg',
    ),
  },
  {
    alt: 'Tag 2',
    filePath: path.join(process.cwd(), '/public/assets/images/shop/thumb1.jpg'),
  },
  {
    alt: 'Tag 3',
    filePath: path.join(process.cwd(), '/public/assets/images/shop/thumb2.jpg'),
  },
  {
    alt: 'Tag 4',
    filePath: path.join(process.cwd(), '/public/assets/images/shop/thumb3.jpg'),
  },
]

import path from 'path'
import { RequiredDataFromCollectionSlug } from 'payload'

export type AuthorDataType = RequiredDataFromCollectionSlug<'users'>

export type AuthorImageType = {
  alt: string
  filePath: string
}

export const authorsData: AuthorDataType[] = [
  {
    username: 'author-1',
    displayName: 'Ethan Miller ',
    email: 'author.1@gmail.com',
    password: 'Welcome@123',
    role: ['author'],
    imageUrl: '',
  },
  {
    username: 'author-2',
    displayName: 'Olivia Harris',
    email: 'author.2@gmail.com',
    password: 'Welcome@123',
    role: ['author'],
    imageUrl: '',
  },
  {
    username: 'author-3',
    displayName: 'Jacob Williams',
    email: 'author.3@gmail.com',
    password: 'Welcome@123',
    role: ['author'],
    imageUrl: '',
  },
  {
    username: 'author-4',
    displayName: 'Emily Thompson',
    email: 'author.4@gmail.com',
    password: 'Welcome@123',
    role: ['author'],
    imageUrl: '',
  },
]

export const authorImagesData: AuthorImageType[] = [
  {
    alt: 'author 1',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/team/member1.jpg',
    ),
  },
  {
    alt: 'author 2',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/team/member2.jpg',
    ),
  },
  {
    alt: 'author 3',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/team/member3.jpg',
    ),
  },
  {
    alt: 'author 4',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/team/member4.jpg',
    ),
  },
]

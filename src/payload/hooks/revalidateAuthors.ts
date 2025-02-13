import { User } from '@payload-types'
import { revalidateTag } from 'next/cache'
import type { CollectionAfterChangeHook } from 'payload'
import { CollectionAfterDeleteHook } from 'payload'

export const revalidateAuthorsAfterChange: CollectionAfterChangeHook<
  User
> = async ({ doc }) => {
  // if page is published & their is no dynamic block directly revalidating the page
  if (doc.role.includes('author')) {
    revalidateTag('list-authors')
    revalidateTag('list-authors-with-blog-count')
    revalidateTag(`details-author-${doc.username}`)
    revalidateTag(`details-blogs-by-author-${doc.username}`)

    console.log(`list-authors at ${new Date().getTime()}`)
  }
}

export const revalidateAuthorsAfterDelete: CollectionAfterDeleteHook<
  User
> = async ({ doc }) => {
  // if page is published & their is no dynamic block directly revalidating the page
  if (doc.role.includes('author')) {
    revalidateTag('list-authors')
    revalidateTag('list-authors-with-blog-count')
    revalidateTag(`details-author-${doc.username}`)
    revalidateTag(`details-blogs-by-author-${doc.username}`)

    console.log(`list-authors at ${new Date().getTime()}`)
  }
}

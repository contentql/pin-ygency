'use client'

import { ListType, User } from '@payload-types'

import { trpc } from '@/trpc/client'

import Authors from './Authors'

interface AuthorsWithCountProps extends User {
  totalDocs: number
}
const AuthorsList = ({
  authors,
  block,
}: {
  authors: AuthorsWithCountProps[]
  block: ListType
}) => {
  const { data: authorsWithCount, isLoading } =
    trpc.author.getAllAuthorsWithCount.useQuery(undefined, {
      initialData: authors,
    })
  return (
    <>
      <section
        className='page-banner-area overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center'
        style={{ backgroundImage: '/assets/images/banner/banner-bg.jpg' }}>
        <div className='container'>
          <div className='banner-inner rpt-10'>
            <h2 className='page-title wow fadeInUp delay-0-2s'>
              {block?.title}
            </h2>
            <p className='line-clamp-3'>{block?.description}</p>
          </div>
        </div>
      </section>
      <Authors authorsWithCount={authorsWithCount} isLoading={isLoading} />
    </>
  )
}

export default AuthorsList

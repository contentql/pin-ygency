'use client'

import { Page } from '@payload-types'
import { useDebouncedEffect } from '@payloadcms/ui'
import {
  type Action,
  ActionImpl,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarResults,
  KBarSearch,
  createAction,
  useKBar,
  useMatches,
  useRegisterActions,
} from 'kbar'
import { useRouter } from 'next-nprogress-bar'
import { useState } from 'react'

import { trpc } from '@/trpc/client'
import { useMetadata } from '@/utils/metadataContext'

const NavSearch = () => {
  const [formattedSearchResults, setFormattedSearchResults] = useState<
    Action[]
  >([])
  const router = useRouter()

  // if we return state that time only getting the searchQuery, visualState
  const { query, searchQuery, visualState } = useKBar(state => {
    return state
  })

  const { redirectionLinks } = useMetadata()

  const { mutate: globalSearchMutate } = trpc.search.globalSearch.useMutation({
    // during mutation adding searching text
    onMutate: () => {
      const loadingAction = createAction({
        name: `Searching...`,
        subtitle: searchQuery,
      })

      setFormattedSearchResults([loadingAction])
    },
    // on success adding those results
    onSuccess: data => {
      if (data && data.length > 0) {
        const list = data.map(result => {
          const section = result?.parsedValues?.category as
            | 'blogs'
            | 'tags'
            | 'authors'

          return {
            id: result.id,
            name: result.parsedValues?.title || '',
            subtitle: result.parsedValues?.description || '',
            perform: () => {
              if (redirectionLinks) {
                const { authorLink, blogLink, tagLink } = redirectionLinks

                const linkMap = {
                  blogs: blogLink,
                  tags: tagLink,
                  authors: authorLink,
                }

                const link = linkMap[section]

                const slug =
                  link && typeof link !== 'string'
                    ? (link?.value as Page)?.path!
                    : ''
                const slicedSlug = slug ? slug.split('[')[0] : ''

                if (slug) {
                  return router.push(
                    `${slicedSlug}${result?.parsedValues?.path}`,
                  )
                }
              }
            },
            section,
            priority: result.priority as number,
          }
        })

        setFormattedSearchResults(list)
      } else {
        const noResultsAction = createAction({
          name: `No results Found!`,
          subtitle: searchQuery,
        })

        setFormattedSearchResults([noResultsAction])
      }
    },
    // on error adding no results found
    onError: () => {
      const noResultsAction = createAction({
        name: `No results Found!`,
        subtitle: searchQuery,
      })

      setFormattedSearchResults([noResultsAction])
    },
  })

  useDebouncedEffect(
    () => {
      // not calling the API on initial mount
      if (visualState === 'hidden') return

      globalSearchMutate({ search: searchQuery })
    },
    800,
    [searchQuery],
  )

  useRegisterActions(formattedSearchResults, [formattedSearchResults])

  const { results } = useMatches()

  const SearchItem = ({
    item,
    active,
  }: {
    item: NonNullable<ActionImpl>
    active: boolean
  }) => {
    const { name, subtitle, section = '' } = item

    return (
      <div className='searched-item' data-active-item={active}>
        <div className='flex-data'>
          <h6>{name}</h6>
        </div>
        {!['No results Found!', 'Searching'].includes(name) && (
          <p className='hidden-text'>{subtitle}</p>
        )}
      </div>
    )
  }

  return (
    <div className='nav-search py-10'>
      <button
        className='far fa-search'
        onClick={() => {
          // in case of no results found clearing the search results
          if (formattedSearchResults.length > 0) {
            formattedSearchResults.forEach(item => {
              if (item?.name?.includes('No results found')) {
                setFormattedSearchResults([])
                return
              }
            })
          }

          // this will toggle the search-bar
          query.toggle()
        }}
      />
      <KBarPortal>
        <KBarPositioner className='kbar-pos'>
          <KBarAnimator className='kbar-animator '>
            <div
              style={{
                margin: 'auto',
                width: 'full',
                borderRadius: '10px',
                backgroundColor: '#1e293b',
                padding: '4px',
                zIndex: '9999px',
                overflow: 'hidden',
              }}>
              <KBarSearch
                defaultPlaceholder='Search'
                className='kbar-search '
              />
              {results && results.length > 0 ? (
                <div className='kbar-list mx-4 mt-2'>
                  <KBarResults
                    items={results}
                    onRender={({ item, active }) => {
                      return (
                        <div>
                          {typeof item === 'string' ? (
                            <div className='kar-result-item'>{item}</div>
                          ) : (
                            <SearchItem item={item} active={active} />
                          )}
                        </div>
                      )
                    }}
                  />
                </div>
              ) : null}
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
    </div>
  )
}
export default NavSearch

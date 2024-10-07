'use client'

import { Params } from '../types'
import { DisqusCommentsType } from '@payload-types'
import { DiscussionEmbed } from 'disqus-react'

interface DisqusCommentsProps extends DisqusCommentsType {
  params: Params
}

const DisqusComments: React.FC<DisqusCommentsProps> = ({
  params,
  ...block
}) => {
  const pageUrl = typeof window !== 'undefined' ? window.location.href : ''
  const disqusConfig = {
    url: pageUrl,
    identifier: params?.route.at(-1),
    title: params?.route.at(-1),
  }
  return (
    <div className='container'>
      <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>
        {block?.title}
      </h3>
      <DiscussionEmbed shortname={block?.shortName!} config={disqusConfig} />
    </div>
  )
}

export default DisqusComments

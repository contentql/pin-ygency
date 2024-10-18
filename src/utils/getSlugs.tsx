import { Page, SiteSetting } from '@payload-types'

const getSlugs = ({
  redirectionLinks,
}: {
  redirectionLinks: SiteSetting['redirectionLinks']
}) => {
  const authorLink = redirectionLinks?.authorLink?.value as Page
  const blogLink = redirectionLinks?.blogLink?.value as Page
  const tagLink = redirectionLinks?.tagLink?.value as Page
  const blogSlug =
    blogLink && typeof blogLink !== 'string' ? blogLink.path! : ''
  const slicedBlogSlug = blogSlug ? blogSlug.split('[')[0] : ''
  const authorSlug =
    authorLink && typeof authorLink !== 'string' ? authorLink.path! : ''
  const slicedAuthorSlug = authorSlug ? authorSlug.split('[')[0] : ''
  const tagSlug = tagLink && typeof tagLink !== 'string' ? tagLink.path! : ''
  const slicedTagSlug = tagSlug ? tagSlug.split('[')[0] : ''
  return { blog: slicedBlogSlug, author: slicedAuthorSlug, tag: slicedTagSlug }
}
export default getSlugs

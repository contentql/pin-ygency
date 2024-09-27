import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { TRPCError } from '@trpc/server'

import { seedAboutPage } from '@/seed/about-page'
import { seedAuthorDetailsPage } from '@/seed/author-details-page'
import { seedAuthors } from '@/seed/authors'
import { seedAuthorsPage } from '@/seed/authors-page'
import { seedBlogDetailsPage } from '@/seed/blog-details-page'
import { seedBlogs } from '@/seed/blogs'
import { seedBlogsPage } from '@/seed/blogs-page'
import { seedHomePage } from '@/seed/home-page'
import { seedPricingPage } from '@/seed/pricing-page'
import { seedServicePage } from '@/seed/service-page'
import { seedSiteSettingsGlobal } from '@/seed/site-settings'
import { seedTagDetailsPage } from '@/seed/tag-details-page'
import { seedTags } from '@/seed/tags'
import { seedTagsPage } from '@/seed/tags-page'
import { publicProcedure, router } from '@/trpc'

const payload = await getPayloadHMR({ config: configPromise })

export const seedRouter = router({
  runSeed: publicProcedure.mutation(async () => {
    try {
      // Ensure that the seeding functions are called in the correct order.
      // The blogs seeding depends on tags and authors being seeded first.
      // Therefore, make sure to seed tags and authors before seeding blogs.

      await seedHomePage()
      await seedServicePage()
      await seedAboutPage()
      await seedPricingPage()
      await seedTags()
      await seedAuthors()
      await seedBlogs()
      await seedAuthorsPage()
      await seedTagsPage()
      await seedBlogsPage()
      await seedBlogDetailsPage()
      await seedTagDetailsPage()
      await seedAuthorDetailsPage()
      await seedSiteSettingsGlobal()

      return { success: true }
    } catch (error: any) {
      console.error('Error seeding:', error)
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: error.message,
      })
    }
  }),
})

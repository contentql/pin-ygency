import { TRPCError } from '@trpc/server'
import ora from 'ora'

import { seedAboutPage } from '@/seed/about-page'
import { seedAuthorDetailsPage } from '@/seed/author-details-page'
import { seedAuthors } from '@/seed/authors'
import { seedAuthorsPage } from '@/seed/authors-page'
import { seedBlogDetailsPage } from '@/seed/blog-details-page'
import { seedBlogs } from '@/seed/blogs'
import { seedBlogsPage } from '@/seed/blogs-page'
import { seedContactPage } from '@/seed/contact-page'
import { seedForm } from '@/seed/forms'
import { seedHomePage } from '@/seed/home-page'
import { seedPricingPage } from '@/seed/pricing-page'
import { seedServicePage } from '@/seed/service-page'
import { seedSiteSettingsGlobal } from '@/seed/site-settings'
import { seedTagDetailsPage } from '@/seed/tag-details-page'
import { seedTags } from '@/seed/tags'
import { seedTagsPage } from '@/seed/tags-page'
import { publicProcedure, router } from '@/trpc'

export const seedRouter = router({
  runSeed: publicProcedure.mutation(async () => {
    const spinner = ora({
      text: 'Starting the seeding process...',
      color: 'cyan',
      spinner: 'dots',
    }).start()
    try {
      // Ensure that the seeding functions are called in the correct order.
      // The blogs seeding depends on tags and authors being seeded first.
      // Therefore, make sure to seed tags and authors before seeding blogs.

      await seedHomePage(spinner)
      await seedServicePage(spinner)
      await seedAboutPage(spinner)
      await seedPricingPage(spinner)
      await seedTags(spinner)
      await seedAuthors(spinner)
      await seedBlogs(spinner)
      const forms = await seedForm(spinner)
      const contactPage = await seedContactPage({ spinner, forms })
      await seedAuthorsPage(spinner)
      await seedTagsPage(spinner)
      await seedBlogsPage(spinner)

      const blogDetailsPage = await seedBlogDetailsPage(spinner)
      const tagDetailsPage = await seedTagDetailsPage(spinner)
      const authorDetailsPage = await seedAuthorDetailsPage(spinner)
      await seedSiteSettingsGlobal({
        blogDetailsPage,
        tagDetailsPage,
        authorDetailsPage,
        spinner,
      })

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

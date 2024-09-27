import { router } from '@/trpc'
import { authorRouter } from '@/trpc/routers/author'
import { blogRouter } from '@/trpc/routers/blog'
import { pageRouter } from '@/trpc/routers/page'
import { siteSettingsRouter } from '@/trpc/routers/site-settings'
import { tagRouter } from '@/trpc/routers/tag'

import { authRouter } from './auth'
import { searchRouter } from './search'
import { seedRouter } from './seed'
import { userRouter } from './user/user-route'

export const appRouter = router({
  auth: authRouter,
  page: pageRouter,
  blog: blogRouter,
  siteSettings: siteSettingsRouter,
  tag: tagRouter,
  author: authorRouter,
  user: userRouter,
  seed: seedRouter,
  search: searchRouter,
})

export type AppRouter = typeof appRouter

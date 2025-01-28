import { cqlConfig } from '@contentql/core'
import {
  BlogsCollection,
  MediaCollection,
  PagesCollection,
  SiteSettingsGlobal,
  TagsCollection,
  UsersCollection,
} from '@contentql/core/blog'
import { env } from '@env'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { ResetPassword } from '@/emails/reset-password'
import { UserAccountVerification } from '@/emails/verify-email'
import { migrations } from '@/migrations'
import { blocksConfig } from '@/payload/blocks/index'
import { revalidateAuthors } from '@/payload/hooks/revalidateAuthors'
import { revalidateBlogs } from '@/payload/hooks/revalidateBlogs'
import { revalidatePages } from '@/payload/hooks/revalidatePages'
import { revalidateSiteSettings } from '@/payload/hooks/revalidateSiteSettings'
import { revalidateTags } from '@/payload/hooks/revalidateTags'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const Pages = PagesCollection({ blocks: blocksConfig })

export default cqlConfig({
  admin: {
    components: {
      graphics: {
        Logo: '/src/payload/style/icons/Logo.tsx',
        Icon: '/src/payload/style/icons/Icon.tsx',
      },
    },
  },
  collections: [
    {
      ...UsersCollection,
      auth: {
        verify: {
          generateEmailHTML: ({ token, user }) => {
            return UserAccountVerification({
              actionLabel: 'verify your account',
              buttonText: 'Verify Account',
              userName: user.username,
              image: user.avatar,
              href: `${env.PAYLOAD_URL}/verify-email?token=${token}&id=${user.id}`,
            })
          },
        },
        forgotPassword: {
          generateEmailHTML: args => {
            return ResetPassword({
              resetPasswordLink: `${env.PAYLOAD_URL}/reset-password?token=${args?.token}`,
              userFirstName: args?.user.username,
            })
          },
        },
      },
      hooks: {
        afterChange: [revalidateAuthors],
      },
    },
    {
      ...Pages,
      hooks: {
        afterChange: [revalidatePages],
      },
    },
    {
      ...BlogsCollection,
      hooks: {
        afterChange: [revalidateBlogs],
      },
    },
    {
      ...TagsCollection,
      hooks: {
        afterChange: [revalidateTags],
      },
    },
    MediaCollection,
  ],
  globals: [
    {
      ...SiteSettingsGlobal,
      hooks: {
        afterChange: [revalidateSiteSettings],
      },
    },
  ],
  cors: [env.PAYLOAD_URL],
  csrf: [env.PAYLOAD_URL],
  baseURL: env.PAYLOAD_URL,
  secret: env.PAYLOAD_SECRET,

  dbURI: env.DATABASE_URI,
  dbSecret: env.DATABASE_SECRET,
  syncDB: false,
  prodMigrations: migrations,

  s3: {
    collections: {
      media: true,
    },
    bucket: env.S3_BUCKET,
    config: {
      credentials: {
        accessKeyId: env.S3_ACCESS_KEY_ID,
        secretAccessKey: env.S3_SECRET_ACCESS_KEY,
      },
      endpoint: env.S3_ENDPOINT,
      region: env.S3_REGION,
    },
  },

  resend: {
    apiKey: env.RESEND_API_KEY,
    defaultFromAddress: env.RESEND_SENDER_EMAIL,
    defaultFromName: env.RESEND_SENDER_NAME,
  },

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  editor: slateEditor({
    admin: {
      leaves: [
        {
          Button: 'src/payload/slate/strong/Button',
          Leaf: 'src/payload/slate/strong/Leaf',
          name: 'strong',
        },
        {
          Button: 'src/payload/slate/pre/Button',
          Leaf: 'src/payload/slate/pre/Leaf',
          name: 'pre',
        },
        {
          Button: 'src/payload/slate/mark/Button',
          Leaf: 'src/payload/slate/mark/Leaf',
          name: 'mark',
        },
        {
          Button: 'src/payload/slate/kbd/Button',
          Leaf: 'src/payload/slate/kbd/Leaf',
          name: 'kbd',
        },
        {
          Button: 'src/payload/slate/custom-iframe/Button',
          Leaf: 'src/payload/slate/custom-iframe/Leaf',
          name: 'custom-iframe',
        },
        {
          Button: 'src/payload/slate/italic/Button',
          Leaf: 'src/payload/slate/italic/Leaf',
          name: 'italic',
        },
        {
          Button: 'src/payload/slate/Strikethrough/Button',
          Leaf: 'src/payload/slate/Strikethrough/Leaf',
          name: 'strikethrough',
        },
        {
          Button: 'src/payload/slate/underline/Button',
          Leaf: 'src/payload/slate/underline/Leaf',
          name: 'underline',
        },
      ],
    },
  }),

  sharp: sharp,
})

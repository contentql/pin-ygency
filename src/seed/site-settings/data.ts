import path from 'path'
import { SiteSetting } from 'payload-types'

export type siteSettingsDataType = Omit<SiteSetting, 'id'>

export type ImageType = {
  alt: string
  filePath: string
}

export const siteSettingsData: siteSettingsDataType = {
  general: {
    title: 'Ygency',
    description: 'Ygency is a theme part of contentql',
    faviconUrl: 0,
    ogImageUrl: 0,
  },
  navbar: {
    logo: {
      imageUrl: 0,
      height: 40,
      width: 40,
    },
    menuLinks: [
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: 0,
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: 0,
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: 0,
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: 0,
          },
        },
      },
      {
        group: true,
        menuLinkGroup: {
          groupTitle: 'More',
          groupLinks: [
            {
              label: '',
              newTab: false,
              page: {
                relationTo: 'pages',
                value: 0,
              },
              type: 'reference',
            },
            {
              label: '',
              newTab: false,
              page: {
                relationTo: 'pages',
                value: 0,
              },
              type: 'reference',
            },
            {
              label: '',
              newTab: false,
              page: {
                relationTo: 'pages',
                value: 0,
              },
              type: 'reference',
            },
          ],
        },
      },
    ],
  },

  footer: {
    logo: {
      imageUrl: 0,
      description: '',
      height: 40,
      width: 40,
    },
    footerLinks: [
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: 0,
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: 0,
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: 0,
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: 0,
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: 0,
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: 0,
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: 0,
          },
        },
      },
    ],
    socialLinks: [
      {
        platform: 'youtube',
        value: 'https://youtube.com',
      },
      {
        platform: 'github',
        value: 'https://github.com/contentql',
      },
      {
        platform: 'twitter',
        value: 'https://x.com',
      },
      {
        platform: 'instagram',
        value: 'https://instagram.com',
      },
      {
        platform: 'linkedin',
        value: 'https://linkedin.com',
      },
    ],
    copyright: '© 2024 Ygency. All Rights Reserved.',
  },
  redirectionLinks: {
    authorLink: {
      relationTo: 'pages',
      value: 0,
    },
    tagLink: {
      relationTo: 'pages',
      value: 0,
    },
    blogLink: {
      relationTo: 'pages',
      value: 0,
    },
    productLink: {
      relationTo: 'pages',
      value: 0,
    },
  },
}

export const logo: ImageType = {
  alt: 'footer',
  filePath: path.join(process.cwd(), '/public/images/logo.svg'),
}
export const fullLogo: ImageType = {
  alt: 'header',
  filePath: path.join(
    process.cwd(),
    '/public/assets/images/logos/analytica.png',
  ),
}

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
    faviconUrl: '',
    ogImageUrl: '',
  },
  navbar: {
    logo: {
      imageUrl: '',
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
            value: '',
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: '',
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: '',
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: '',
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
                value: '',
              },
              type: 'reference',
            },
            {
              label: '',
              newTab: false,
              page: {
                relationTo: 'pages',
                value: '',
              },
              type: 'reference',
            },
            {
              label: '',
              newTab: false,
              page: {
                relationTo: 'pages',
                value: '',
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
      imageUrl: '',
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
            value: '',
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: '',
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: '',
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: '',
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: '',
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: '',
          },
        },
      },
      {
        group: false,
        menuLink: {
          label: '',
          page: {
            relationTo: 'pages',
            value: '',
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
      value: '',
    },
    tagLink: {
      relationTo: 'pages',
      value: '',
    },
    blogLink: {
      relationTo: 'pages',
      value: '',
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

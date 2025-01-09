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
    currency: 'usd',
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
  },

  themeSettings: {
    lightMode: {
      primary: '#C62E2E',
      background: '#FEF3E2',
      text: '#1A1A19',
      foreground: '#FBD288',
      popover: '#000000',
      border: '#CDC2A5',
    },

    darkMode: {
      primary: '#F15A59',
      background: '#191919',
      text: '#FFFAFA',
      foreground: '#F8C4B4',
      popover: '#000000',
      border: '#323232',
    },

    fonts: {
      display: {
        type: 'googleFont',
        customFont: null,
        remoteFont:
          'https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap',
        fontName: 'Finger Paint',
      },

      body: {
        type: 'googleFont',
        customFont: null,
        remoteFont:
          'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap',
        fontName: 'Work Sans',
      },
    },

    radius: 'medium',
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

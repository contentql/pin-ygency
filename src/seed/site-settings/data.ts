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
      // {
      //   group: false,
      //   menuLink: {
      //     label: '',
      //     page: {
      //       relationTo: 'pages',
      //       value: '',
      //     },
      //   },
      // },
      // {
      //   group: false,
      //   menuLink: {
      //     label: '',
      //     page: {
      //       relationTo: 'pages',
      //       value: '',
      //     },
      //   },
      // },
      // {
      //   group: false,
      //   menuLink: {
      //     label: '',
      //     page: {
      //       relationTo: 'pages',
      //       value: '',
      //     },
      //   },
      // },
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
    ],
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

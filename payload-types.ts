/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    tags: Tag;
    blogs: Blog;
    media: Media;
    pages: Page;
    search: Search;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    'site-settings': SiteSetting;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  displayName?: string | null;
  username?: string | null;
  imageUrl?: (string | null) | Media;
  role: ('admin' | 'author' | 'user')[];
  emailVerified?: string | null;
  socialLinks?:
    | {
        platform:
          | 'facebook'
          | 'instagram'
          | 'twitter'
          | 'linkedin'
          | 'youtube'
          | 'tiktok'
          | 'pinterest'
          | 'snapchat'
          | 'reddit'
          | 'tumblr'
          | 'whatsapp'
          | 'telegram'
          | 'github'
          | 'medium'
          | 'quora'
          | 'discord';
        value: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  _verified?: boolean | null;
  _verificationToken?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    blogImageSize2?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    blogImageSize3?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags".
 */
export interface Tag {
  id: string;
  tagImage: string | Media;
  title: string;
  description: string;
  slug?: string | null;
  color?: ('blue' | 'gray' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink') | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blogs".
 */
export interface Blog {
  id: string;
  blogImage: string | Media;
  title: string;
  description: string;
  tags?:
    | {
        relationTo: 'tags';
        value: string | Tag;
      }[]
    | null;
  author?:
    | {
        relationTo: 'users';
        value: string | User;
      }[]
    | null;
  content: {
    [k: string]: unknown;
  }[];
  slug?: string | null;
  publishOn?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  layout?:
    | (
        | AboutType
        | AdvertiseType
        | HeroType
        | SkillsType
        | ServiceType
        | HeadlineType
        | RecentWorkType
        | TestimonialType
        | TeamType
        | ServiceBannerType
        | ServiceFeaturesType
        | WorkProcessType
        | BannerType
        | OurClientsType
        | StatisticsType
        | TeamInfoType
        | VideoAreaType
        | ListType
        | DetailsType
        | ContactType
        | PageBannerType
        | PricingFeaturesType
        | PricingSectionType
        | DisqusCommentsType
      )[]
    | null;
  isHome?: boolean | null;
  isDynamic?: boolean | null;
  slugMode?: ('generate' | 'custom') | null;
  slug?: string | null;
  pathMode?: ('generate' | 'custom') | null;
  path?: string | null;
  parent?: (string | null) | Page;
  breadcrumbs?:
    | {
        doc?: (string | null) | Page;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: (string | null) | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AboutType".
 */
export interface AboutType {
  badge_title?: string | null;
  title?: string | null;
  description?: string | null;
  percentages?:
    | {
        percentage?: number | null;
        title?: string | null;
        id?: string | null;
      }[]
    | null;
  about_image?: (string | null) | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'About';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AdvertiseType".
 */
export interface AdvertiseType {
  title?: string | null;
  banner_image?: (string | null) | Media;
  project_completion_count?: string | null;
  completion_status?: string | null;
  description?: string | null;
  clients?:
    | {
        image?: (string | null) | Media;
        id?: string | null;
      }[]
    | null;
  client_description?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Advertise';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroType".
 */
export interface HeroType {
  title?: string | null;
  description?: string | null;
  clients?:
    | {
        image?: (string | null) | Media;
        id?: string | null;
      }[]
    | null;
  client_description?: string | null;
  hero_image?: (string | null) | Media;
  badge_title?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Hero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SkillsType".
 */
export interface SkillsType {
  title?: string | null;
  skills?:
    | {
        skill_image?: (string | null) | Media;
        skill_title?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Skills';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ServiceType".
 */
export interface ServiceType {
  badge_title?: string | null;
  title?: string | null;
  services?:
    | {
        service_icon?:
          | (
              | 'flaticon-development'
              | 'flaticon-mobile-development'
              | 'flaticon-brainstorming'
              | 'flaticon-abstract'
              | 'flaticon-ux'
              | 'flaticon-optimization'
              | 'flaticon-goal'
            )
          | null;
        title?: string | null;
        image?: (string | null) | Media;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Service';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeadlineType".
 */
export interface HeadlineType {
  headlines?:
    | {
        title?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Headline';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RecentWorkType".
 */
export interface RecentWorkType {
  badge_title?: string | null;
  title?: string | null;
  recent_works?:
    | {
        title?: string | null;
        image?: (string | null) | Media;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'RecentWork';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TestimonialType".
 */
export interface TestimonialType {
  image?: (string | null) | Media;
  testimonials?:
    | {
        reviewer_name?: string | null;
        review?: string | null;
        reviewer_image?: (string | null) | Media;
        reviewer_role?: string | null;
        rating?: number | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Testimonial';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TeamType".
 */
export interface TeamType {
  badge_title?: string | null;
  title?: string | null;
  team_members?:
    | {
        image?: (string | null) | Media;
        name?: string | null;
        role?: string | null;
        social_media?:
          | {
              icon?:
                | (
                    | 'fab fa-facebook-f'
                    | 'fab fa-instagram'
                    | 'fab fa-whatsapp'
                    | 'fab fa-twitter'
                    | 'fab fa-linkedin-in'
                  )
                | null;
              url: string;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Team';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ServiceBannerType".
 */
export interface ServiceBannerType {
  title: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'ServiceBanner';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ServiceFeaturesType".
 */
export interface ServiceFeaturesType {
  features?:
    | {
        title?: string | null;
        description?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'ServiceFeatures';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "WorkProcessType".
 */
export interface WorkProcessType {
  steps?:
    | {
        title?: string | null;
        description?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'WorkProcess';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BannerType".
 */
export interface BannerType {
  title?: string | null;
  banner_image1?: (string | null) | Media;
  banner_image2?: (string | null) | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Banner';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "OurClientsType".
 */
export interface OurClientsType {
  title?: string | null;
  clients?:
    | {
        client_logo?: (string | null) | Media;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'OurClients';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "StatisticsType".
 */
export interface StatisticsType {
  statistics?:
    | {
        number?: number | null;
        title?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Statistics';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TeamInfoType".
 */
export interface TeamInfoType {
  caption?: string | null;
  title?: string | null;
  features?:
    | {
        title?: string | null;
        description?: string | null;
        icon?: ('flaticon-creativity' | 'flaticon-mobile-banking' | 'flaticon-optimization-1') | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'TeamInfo';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "VideoAreaType".
 */
export interface VideoAreaType {
  video_image?: (string | null) | Media;
  video_link?: string | null;
  description?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'VideoArea';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ListType".
 */
export interface ListType {
  title?: string | null;
  description?: string | null;
  collectionSlug?: ('blogs' | 'tags' | 'users') | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'List';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "DetailsType".
 */
export interface DetailsType {
  collectionSlug?: ('blogs' | 'tags' | 'users') | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Details';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContactType".
 */
export interface ContactType {
  sub_title?: string | null;
  title?: string | null;
  background_text?: string | null;
  button_text?: string | null;
  button_url?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Contact';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "PageBannerType".
 */
export interface PageBannerType {
  page_name: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'PageBanner';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "PricingFeaturesType".
 */
export interface PricingFeaturesType {
  sub_title?: string | null;
  title?: string | null;
  datails?:
    | {
        heading?: string | null;
        description?: string | null;
        id?: string | null;
      }[]
    | null;
  button_text?: string | null;
  button_path?: string | null;
  features?:
    | {
        icons?: ('fa-bezier-curve' | 'fa-cogs' | 'fa-chart-pie' | 'fa-shield-cross') | null;
        title?: string | null;
        description?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'PricingFeatures';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "PricingSectionType".
 */
export interface PricingSectionType {
  title?: string | null;
  sub_title?: string | null;
  pricing?:
    | {
        icons?: ('flaticon-abstract' | 'flaticon-liquid' | 'flaticon-petals') | null;
        package_title?: string | null;
        price?: number | null;
        price_text?: string | null;
        available_features?:
          | {
              feature?: string | null;
              id?: string | null;
            }[]
          | null;
        button_text?: string | null;
        button_url?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'PricingSection';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "DisqusCommentsType".
 */
export interface DisqusCommentsType {
  title?: string | null;
  shortName: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'DisqusComments';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "search".
 */
export interface Search {
  id: string;
  title?: string | null;
  priority?: number | null;
  doc:
    | {
        relationTo: 'blogs';
        value: string | Blog;
      }
    | {
        relationTo: 'tags';
        value: string | Tag;
      }
    | {
        relationTo: 'users';
        value: string | User;
      };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "site-settings".
 */
export interface SiteSetting {
  id: string;
  general: {
    title: string;
    description: string;
    faviconUrl: string | Media;
    ogImageUrl: string | Media;
    keywords?: string[] | null;
  };
  navbar: {
    logo: BrandLogo;
    menuLinks?:
      | {
          group?: boolean | null;
          menuLink?: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            label: string;
            page?: {
              relationTo: 'pages';
              value: string | Page;
            } | null;
            url?: string | null;
            id?: string | null;
          };
          menuLinkGroup?: {
            groupTitle: string;
            groupLinks?:
              | {
                  type?: ('reference' | 'custom') | null;
                  newTab?: boolean | null;
                  label: string;
                  page?: {
                    relationTo: 'pages';
                    value: string | Page;
                  } | null;
                  url?: string | null;
                  id?: string | null;
                }[]
              | null;
          };
          id?: string | null;
        }[]
      | null;
  };
  footer: {
    logo: BrandLogo;
    footerLinks?:
      | {
          group?: boolean | null;
          menuLink?: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            label: string;
            page?: {
              relationTo: 'pages';
              value: string | Page;
            } | null;
            url?: string | null;
            id?: string | null;
          };
          menuLinkGroup?: {
            groupTitle: string;
            groupLinks?:
              | {
                  type?: ('reference' | 'custom') | null;
                  newTab?: boolean | null;
                  label: string;
                  page?: {
                    relationTo: 'pages';
                    value: string | Page;
                  } | null;
                  url?: string | null;
                  id?: string | null;
                }[]
              | null;
          };
          id?: string | null;
        }[]
      | null;
    socialLinks?:
      | {
          platform:
            | 'facebook'
            | 'instagram'
            | 'twitter'
            | 'linkedin'
            | 'youtube'
            | 'tiktok'
            | 'pinterest'
            | 'snapchat'
            | 'reddit'
            | 'tumblr'
            | 'whatsapp'
            | 'telegram'
            | 'github'
            | 'medium'
            | 'quora'
            | 'discord';
          value: string;
          id?: string | null;
        }[]
      | null;
    copyright?: string | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BrandLogo".
 */
export interface BrandLogo {
  imageUrl: string | Media;
  height?: number | null;
  width?: number | null;
  description?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
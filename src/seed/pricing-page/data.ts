import { Page } from 'payload-types'

export type PricingPageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>

export const PricingPageData: PricingPageDataType = {
  title: 'Pricing',
  isHome: false,
  _status: 'published',
  layout: [
    {
      blockType: 'PageBanner',
      page_name: 'Pricing Plan',
    },
    {
      blockType: 'PricingFeatures',
      title: 'Benefit Of Working With Us',
      sub_title: 'Why Choose Us',
      datails: [
        {
          heading: 'Company Mission',
          description:
            'On the other hand we denounce with righteous indignation dislike men who are so beguiled and demoralized',
        },
        {
          heading: 'Company Vision',
          description:
            'Desire that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs',
        },
      ],
      button_text: 'Learn More',
      button_path: '/',
      features: [
        {
          description:
            'We denounce with righteous indignatio dislike men who are beguiled and demoralized',
          icons: 'fa-bezier-curve',
          title: 'Ontime meeting with experts',
        },
        {
          description:
            'Quis autem veleum voluptate velit quam mole conse quatur veillum qui dolorem eum',
          title: 'Quality check by expert members',
          icons: 'fa-cogs',
        },
        {
          description:
            'At vero eos et accusamus et iusto odio dignissimo ducimus qui blanditiis praesentium',
          icons: 'fa-chart-pie',
          title: 'Detailed report submission',
        },
        {
          description:
            'To take trivial example which ever under laborious physical exercise to advantage',
          icons: 'fa-shield-cross',
          title: 'Filtering projects for mass tax',
        },
      ],
    },
    {
      blockType: 'PricingSection',
      title: 'Pricing Package',
      sub_title: 'Best Pricing Package For All Web Design Solutions',
      pricing: [
        {
          icons: 'flaticon-abstract',
          package_title: 'Regular Package',
          price: 18.3,
          price_text: 'per month',
          available_features: [
            {
              feature: 'Landing Page Design',
            },
            {
              feature: 'Landing Page Design',
            },
            {
              feature: 'Landing Page Design',
            },
            {
              feature: 'Landing Page Design',
            },
            {
              feature: 'Landing Page Design',
            },
          ],
          button_text: 'Choose Package',
          button_url: '/',
        },
        {
          icons: 'flaticon-liquid',
          package_title: 'Regular Package',
          price: 18.3,
          price_text: 'Per month',
          available_features: [
            {
              feature: 'Landing Page Design',
            },
            {
              feature: 'Landing Page Design',
            },
            {
              feature: 'Landing Page Design',
            },
            {
              feature: 'Landing Page Design',
            },
            {
              feature: 'Landing Page Design',
            },
          ],
          button_text: 'Choose Package',
          button_url: '/',
        },
        {
          icons: 'flaticon-petals',
          package_title: 'Regular Package',
          price: 18.3,
          price_text: 'Per month',
          available_features: [
            {
              feature: 'Landing Page Design',
            },
            {
              feature: 'Landing Page Design',
            },
            {
              feature: 'Landing Page Design',
            },
            {
              feature: 'Landing Page Design',
            },
            {
              feature: 'Landing Page Design',
            },
          ],
          button_text: 'Choose Package',
          button_url: '/',
        },
      ],
    },
    {
      blockType: 'Contact',
      sub_title: 'Work With Us',
      title: 'Have Any Projects On Minds! Feel Free To Contact Us',
      background_text: 'Lets Work together',
      button_text: 'Explore more',
      button_url: '/',
    },
  ],
}

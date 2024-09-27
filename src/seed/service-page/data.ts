import path from 'path'
import { Page } from 'payload-types'

export type ServicePageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>

export type ServiceImageType = {
  alt: string
  filePath: string
}

export const ServicePageData: ServicePageDataType = {
  title: 'Services',
  isHome: false,
  _status: 'published',
  layout: [
    {
      blockType: 'ServiceBanner',
      title: 'Digital  Services For Web Design & Development',
    },
    {
      blockType: 'ServiceFeatures',
      features: [
        {
          title: 'Web Development',
          description:
            'At vero eos et accusamus et iusto odio dignissimos ducimus quie blanditiis praesentium voluptatum delenit corruptie',
        },
        {
          title: 'Application Development',
          description:
            'At vero eos et accusamus et iusto odio dignissimos ducimus quie blanditiis praesentium voluptatum delenit corruptie',
        },
        {
          title: 'Digital Product Design',
          description:
            'At vero eos et accusamus et iusto odio dignissimos ducimus quie blanditiis praesentium voluptatum delenit corruptie',
        },
        {
          title: 'SEO Optimization',
          description:
            'At vero eos et accusamus et iusto odio dignissimos ducimus quie blanditiis praesentium voluptatum delenit corruptie',
        },
      ],
    },
    {
      blockType: 'Headline',
      headlines: [
        {
          title: 'Web Development',
        },
        {
          title: 'SEO Optimization',
        },
        {
          title: 'Design & Branding',
        },
      ],
    },
    {
      blockType: 'WorkProcess',
      steps: [
        {
          title: 'Idea Generate',
          description: 'Vero eos et accusamus iusto odio disimos',
        },
        {
          title: 'Plan & Design',
          description: 'Vero eos et accusamus iusto odio disimos',
        },
        {
          title: 'Project Testing',
          description: 'Vero eos et accusamus iusto odio disimos',
        },
        {
          title: 'Got Results',
          description: 'Vero eos et accusamus iusto odio disimos',
        },
      ],
    },
    {
      blockType: 'Testimonial',
      image: '',
      testimonials: [
        {
          rating: 4,
          review:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae dolor quae in rem, deleniti blanditiis similique nisi optio saepe facere vero sint. Ab consectetur perferendis officia quam ducimus! Pariatur!',
          reviewer_image: '',
          reviewer_name: 'James Manikanta',
        },
        {
          rating: 4,
          review:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae dolor quae in rem, deleniti blanditiis similique nisi optio saepe facere vero sint. Ab consectetur perferendis officia quam ducimus! Pariatur!',
          reviewer_image: '',
          reviewer_name: 'Jhonson Abdul',
        },
      ],
    },
  ],
}

export const ClientsImageData: ServiceImageType[] = [
  {
    alt: 'testimonial 1',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/team/member-six1.jpg',
    ),
  },
  {
    alt: 'testimonial 2',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/team/member-six2.jpg',
    ),
  },
]

export const AboutImageData: ServiceImageType = {
  alt: 'testimonial',
  filePath: path.join(
    process.cwd(),
    '/public/assets/images/about/about-image-shape.png',
  ),
}

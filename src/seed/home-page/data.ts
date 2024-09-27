import path from 'path'
import { Page } from 'payload-types'

export type HomePageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>

export type HomeImageType = {
  alt: string
  filePath: string
}

export const homePageData: HomePageDataType = {
  title: 'Home Page',
  isHome: true,
  _status: 'published',
  layout: [
    {
      blockType: 'Hero',
      title: 'Empowering Digital Transformation',
      description:
        'Harness the power of Analytica, your in-browser tool for streamlined development processes. Make the most of your coding time and bring your projects to life faster.',
      badge_title: 'Explore more',
      hero_image: '',
      clients: [
        {
          image: '',
        },
        {
          image: '',
        },
      ],
    },
    {
      blockType: 'Advertise',
      title: 'Innovative Web Development Solutions',
      description: 'Quis autem vel eum reprehe voluptate velit esse quam',
      clients: [
        {
          image: '',
        },
        {
          image: '',
        },
      ],
      project_completion_count: '150+',
      completion_status: 'Project Complete',
      client_description: 'We denounce indignatione dislike mende charms',
      banner_image: '',
    },
    {
      blockType: 'Skills',
      title: 'Here Are Numerous Topics That Will Enhance Your Skills',
      skills: [
        {
          skill_title: 'Bootstrap',
          skill_image: '',
        },
        {
          skill_title: 'HTML',
          skill_image: '',
        },
        {
          skill_title: 'CSS',
          skill_image: '',
        },
        {
          skill_title: 'Javascript',
          skill_image: '',
        },
        {
          skill_title: 'React',
          skill_image: '',
        },
      ],
    },
    {
      blockType: 'About',
      about_image: '',
      badge_title: 'About Company',
      title: 'We’re Award-Winning Web Development Agency',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptat emey accusantium doloremque laudantium totam aperiam eaque quabillo inventore veritatisey quasi architecto beatae dictasunt',
      percentages: [
        {
          percentage: 100,
          title: 'Clients Satisfactions',
        },
        {
          percentage: 100,
          title: 'Success Rating',
        },
        {
          percentage: 100,
          title: 'Project Complete',
        },
      ],
    },
    {
      blockType: 'Service',
      badge_title: 'Popular Services',
      title: 'We Provide Amazing Web Design Solutions',

      services: [
        {
          image: '',
          service_icon: 'flaticon-mobile-development',
          title: 'Web Development',
        },
        {
          image: '',
          service_icon: 'flaticon-mobile-development',
          title: 'Mobile Development',
        },
        {
          image: '',
          service_icon: 'flaticon-brainstorming',
          title: 'Team Agumentation',
        },
        {
          image: '',
          service_icon: 'flaticon-mobile-development',
          title: 'Design & Branding',
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
          title: 'Graphics',
        },
        {
          title: 'Product Design',
        },
      ],
    },
    {
      blockType: 'RecentWork',
      badge_title: 'Recent Works Gallery',
      title: 'Let’s Look Our Recent Project Gallery',
      recent_works: [
        {
          image: '',
          title: 'Business Task Management Dashboard Design',
        },
        {
          image: '',
          title: 'Mobile Application Design & Development',
        },
        {
          image: '',
          title: 'PSD, Figma & XD to HTML Design & Development',
        },
        {
          image: '',
          title: 'Business Development and Marketing Strategy',
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

//images

export const homePageHeroImageData: HomeImageType = {
  alt: 'hero',
  filePath: path.join(process.cwd(), '/public/assets/images/hero/hero-two.jpg'),
}
export const homePageAdvertiseImageData: HomeImageType = {
  alt: 'advertise',
  filePath: path.join(
    process.cwd(),
    '/public/assets/images/banner/add-banner.png',
  ),
}

export const ClientsImageData: HomeImageType[] = [
  {
    alt: 'client 1',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/team/member-six1.jpg',
    ),
  },
  {
    alt: 'client 2',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/team/member-six2.jpg',
    ),
  },
]

export const SkillsImageData: HomeImageType[] = [
  {
    alt: 'skill 1',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/skills/skill1.png',
    ),
  },
  {
    alt: 'skill 2',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/skills/skill2.png',
    ),
  },
  {
    alt: 'skill 3',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/skills/skill3.png',
    ),
  },
  {
    alt: 'skill 4',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/skills/skill4.png',
    ),
  },
  {
    alt: 'skill 5',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/skills/skill5.png',
    ),
  },
]

export const AboutImageData: HomeImageType = {
  alt: 'about',
  filePath: path.join(
    process.cwd(),
    '/public/assets/images/about/about-image-shape.png',
  ),
}
export const serviceImageData: HomeImageType[] = [
  {
    alt: 'service 1',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/services/service1.jpg',
    ),
  },
  {
    alt: 'service 2',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/services/service2.jpg',
    ),
  },
  {
    alt: 'service 3',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/services/service3.jpg',
    ),
  },
  {
    alt: 'service 4',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/services/service4.jpg',
    ),
  },
]

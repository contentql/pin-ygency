import path from 'path'
import { Page } from 'payload-types'

export type AboutPageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>

export type AboutImageType = {
  alt: string
  filePath: string
}

export const aboutPageData: AboutPageDataType = {
  title: 'About',
  isHome: false,
  _status: 'published',
  layout: [
    {
      blockType: 'Banner',
      title: 'We’re Digital Web Development Agency',
      banner_image1: '',
      banner_image2: '',
    },
    {
      blockType: 'VideoArea',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptat emey accusantium doloremque laudantium totam aperiam eaque quabillo inventore veritatisey quasi architecto beatae dictasunt',
      video_link:
        'https://www.youtube.com/watch?v=jCMU4qw6LqI&list=PLjy3Q_oHlvcwJtv01zNqziPXr0XoVrTn7&index=1&t=3s',
      video_image: '',
    },
    {
      blockType: 'TeamInfo',
      caption: 'Who We Are',
      title: 'We Are Professional And Experience Team',
      features: [
        {
          title: 'Customize your site',
          description:
            'At vero eos et accusamus iusto dignissim ducimuse blanditiis praesentiue',
          icon: 'flaticon-creativity',
        },
        {
          title: 'Customize your site',
          description:
            'At vero eos et accusamus iusto dignissim ducimuse blanditiis praesentiue',
          icon: 'flaticon-creativity',
        },
        {
          title: 'Optimize search engines',
          description:
            'At vero eos et accusamus iusto dignissim ducimuse blanditiis praesentiue',
          icon: 'flaticon-optimization-1',
        },
      ],
    },
    {
      blockType: 'Headline',
      headlines: [
        {
          title: 'Mobile Apps',
        },
        {
          title: 'Web Development',
        },
        {
          title: 'Design Branding',
        },
      ],
    },
    {
      blockType: 'Team',
      badge_title: 'our team',
      title: 'View our team members',
      team_members: [
        {
          image: '',
          name: 'Patrick V',
          role: 'Frontend Developer',
          social_media: [
            {
              url: '/',
              icon: 'fab fa-linkedin-in',
            },
            {
              url: '/',
              icon: 'fab fa-twitter',
            },
            {
              url: '/',
              icon: 'fab fa-instagram',
            },
          ],
        },
        {
          image: '',
          name: 'Shiva V',
          role: 'backend Developer',
          social_media: [
            {
              url: '/',
              icon: 'fab fa-linkedin-in',
            },
            {
              url: '/',
              icon: 'fab fa-twitter',
            },
            {
              url: '/',
              icon: 'fab fa-instagram',
            },
          ],
        },
        {
          image: '',
          name: 'Jagadeesh M',
          role: 'Full Stack Developer',
          social_media: [
            {
              url: '/',
              icon: 'fab fa-linkedin-in',
            },
            {
              url: '/',
              icon: 'fab fa-twitter',
            },
            {
              url: '/',
              icon: 'fab fa-instagram',
            },
          ],
        },
        {
          image: '',
          name: 'Manikanta P',
          role: 'Backend Developer',
          social_media: [
            {
              url: '/',
              icon: 'fab fa-linkedin-in',
            },
            {
              url: '/',
              icon: 'fab fa-twitter',
            },
            {
              url: '/',
              icon: 'fab fa-instagram',
            },
          ],
        },
      ],
    },
    {
      blockType: 'Statistics',
      statistics: [
        {
          number: 15,
          title: 'Years Of Experience',
        },
        {
          number: 30,
          title: 'Project’s Complete',
        },
        {
          number: 10,
          title: 'Professionals Team Member',
        },
        {
          number: 5,
          title: 'Awards Winning',
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
    {
      blockType: 'OurClients',
      title: 'We Have 1520+Global Clients',
      clients: [
        {
          client_logo: '',
        },
        {
          client_logo: '',
        },
        {
          client_logo: '',
        },
        {
          client_logo: '',
        },
      ],
    },
  ],
}

export const ClientsImageData: AboutImageType[] = [
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

export const AboutImageData: AboutImageType = {
  alt: 'testimonial',
  filePath: path.join(
    process.cwd(),
    '/public/assets/images/about/about-image-shape.png',
  ),
}

export const BannerImageData: AboutImageType[] = [
  {
    alt: 'banner 1',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/banner/inside-title1.png',
    ),
  },
  {
    alt: 'banner 2',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/banner/inside-title2.png',
    ),
  },
]

export const VideoImageData: AboutImageType = {
  alt: 'video',
  filePath: path.join(
    process.cwd(),
    '/public/assets/images/video/video-two-bg.jpg',
  ),
}
export const TeamMemberImagesData: AboutImageType[] = [
  {
    alt: 'member 1',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/team/member4.jpg',
    ),
  },
  {
    alt: 'member 2',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/team/member5.jpg',
    ),
  },
  {
    alt: 'member 3',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/team/member6.jpg',
    ),
  },
  {
    alt: 'member 4',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/team/member7.jpg',
    ),
  },
]

export const CompanyImagesData: AboutImageType[] = [
  {
    alt: 'company 1',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/client-logos/client-logo1.png',
    ),
  },
  {
    alt: 'company 2',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/client-logos/client-logo2.png',
    ),
  },
  {
    alt: 'company 3',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/client-logos/client-logo3.png',
    ),
  },
  {
    alt: 'company 4',
    filePath: path.join(
      process.cwd(),
      '/public/assets/images/client-logos/client-logo4.png',
    ),
  },
]

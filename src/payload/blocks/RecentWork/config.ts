import { Block } from 'payload'

export const RecentWorkConfig: Block = {
  slug: 'RecentWork',
  interfaceName: 'RecentWorkType',
  labels: {
    singular: 'Recent Work Block',
    plural: 'Recent Work Blocks',
  },
  fields: [
    {
      name: 'badge_title',
      type: 'text',
      label: 'Badge Title',
      admin: {
        description: 'A short title to highlight the section of recent works.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'Main title for the Recent Works section.',
      },
    },
    {
      name: 'recent_works',
      type: 'array',
      label: 'Recent Works',
      maxRows: 10, // Optional: limit the number of works
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          admin: {
            description: 'Enter the title of the recent work.',
          },
        },
        {
          name: 'url',
          type: 'text',
          label: 'Url',
          admin: {
            description: 'Enter Your website url here.',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          admin: {
            description: 'Upload an image representing the recent work.',
          },
        },
      ],
    },
  ],
}

export default RecentWorkConfig

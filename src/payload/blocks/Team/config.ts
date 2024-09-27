import { Block } from 'payload'

const TeamConfig: Block = {
  slug: 'Team',
  // imageURL: '',
  interfaceName: 'TeamType',
  labels: {
    singular: 'Team Block',
    plural: 'Team Blocks',
  },
  fields: [
    {
      name: 'badge_title',
      type: 'text',
      label: 'Badge Title',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'team_members',
      type: 'array',
      label: 'Team Members',

      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
        },
        {
          name: 'role',
          type: 'text',
          label: 'Role',
        },
        {
          name: 'social_media',
          label: 'Social Media',
          type: 'array',
          fields: [
            {
              name: 'icon',
              label: 'Social media icon',
              type: 'select',
              options: [
                { label: 'Facebook', value: 'fab fa-facebook-f' },
                { label: 'Instagram', value: 'fab fa-instagram' },
                { label: 'Whatsapp', value: 'fab fa-whatsapp' },
                { label: 'Twitter', value: 'fab fa-twitter' },
                { label: 'LinkedIn', value: 'fab fa-linkedin-in' },
              ],
            },
            {
              name: 'url',
              label: 'Social media Url',
              type: 'text',
              required: true,
            },
          ],
          validate: siblingData => {
            if (siblingData?.length) {
              const uniqueIcons = new Set(
                siblingData.map((socialMedia: any) => socialMedia.icon),
              )

              const isUnique = uniqueIcons.size === siblingData.length

              return isUnique ? true : 'Duplicate social media entry found!'
            }

            return true
          },
        },
      ],
    },
  ],
}

export default TeamConfig

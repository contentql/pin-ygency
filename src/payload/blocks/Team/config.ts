import { Block } from 'payload'

const TeamConfig: Block = {
  slug: 'Team',
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
      admin: {
        description: 'Title displayed on the team block badge.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'Main title for the team section.',
      },
    },
    {
      name: 'team_members',
      type: 'array',
      label: 'Team Members',
      admin: {
        description: 'Add team members to display in this block.',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          admin: {
            description: 'Upload the team member’s photo.',
          },
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          admin: {
            description: 'Enter the team member’s name.',
          },
        },
        {
          name: 'role',
          type: 'text',
          label: 'Role',
          admin: {
            description: 'Specify the team member’s role or position.',
          },
        },
        {
          name: 'social_media',
          label: 'Social Media',
          type: 'array',
          admin: {
            description: 'Add social media links for the team member.',
          },
          fields: [
            {
              name: 'icon',
              label: 'Social Media Icon',
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
              label: 'Social Media URL',
              type: 'text',
              required: true,
              admin: {
                description: 'Enter the URL of the social media profile.',
              },
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

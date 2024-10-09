import { Block } from 'payload'

const SkillsConfig: Block = {
  slug: 'Skills',
  interfaceName: 'SkillsType',
  labels: {
    singular: 'Skills Block',
    plural: 'Skills Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      required: true, // Optional: Make this field required
      admin: {
        description: 'Enter the title for the skills section.',
      },
    },
    {
      name: 'skills',
      type: 'array',
      label: 'Skills',
      maxRows: 18,
      fields: [
        {
          name: 'skill_image',
          type: 'upload',
          relationTo: 'media',
          label: 'Skill Image',
          required: true, // Optional: Make this field required
          admin: {
            description: 'Upload an image representing the skill.',
          },
        },
        {
          name: 'skill_title',
          type: 'text',
          label: 'Skill Title',
          required: true, // Optional: Make this field required
          admin: {
            description: 'Enter the name of the skill.',
          },
        },
      ],
    },
  ],
}

export default SkillsConfig

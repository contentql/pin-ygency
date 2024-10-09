import { Block } from 'payload'

const WorkProcessConfig: Block = {
  slug: 'WorkProcess',
  interfaceName: 'WorkProcessType',
  labels: {
    singular: 'Work Process Block',
    plural: 'Work Process Blocks',
  },
  fields: [
    {
      name: 'steps',
      type: 'array',
      label: 'Steps',
      minRows: 1,
      maxRows: 10, // Optional: Limit the number of steps
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          admin: {
            description: 'Enter the title of the step.',
          },
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea', // Changed to textarea for longer descriptions
          admin: {
            description: 'Provide a detailed description of this step.',
          },
        },
      ],
    },
  ],
}

export default WorkProcessConfig

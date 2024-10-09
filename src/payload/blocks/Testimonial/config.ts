import { Block } from 'payload'

const TestimonialConfig: Block = {
  slug: 'Testimonial',
  interfaceName: 'TestimonialType',
  labels: {
    singular: 'Testimonial Block',
    plural: 'Testimonial Blocks',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      admin: {
        description: 'Upload an image to represent the testimonial block.',
      },
    },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      admin: {
        description: 'Add individual testimonials from reviewers.',
      },
      fields: [
        {
          name: 'reviewer_name',
          type: 'text',
          label: 'Reviewer Name',
          admin: {
            description: 'Enter the name of the reviewer.',
          },
        },
        {
          name: 'review',
          type: 'textarea',
          label: 'Review',
          admin: {
            description: 'Write the testimonial review here.',
          },
        },
        {
          name: 'reviewer_image',
          type: 'upload',
          relationTo: 'media',
          label: 'Reviewer Image',
          admin: {
            description: 'Upload an image of the reviewer.',
          },
        },
        {
          name: 'reviewer_role',
          type: 'text',
          label: 'Reviewer Role',
          admin: {
            description: 'Specify the role or position of the reviewer.',
          },
        },
        {
          name: 'rating',
          type: 'number',
          label: 'Rating',
          max: 5,
          min: 1,
          admin: {
            description: 'Rate the testimonial between 1 and 5.',
          },
        },
      ],
    },
  ],
}

export default TestimonialConfig

import { Block } from 'payload'

const TestimonialConfig: Block = {
  slug: 'Testimonial',
  // imageURL: '',
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
    },

    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      fields: [
        {
          name: 'reviewer_name',
          type: 'text',
          label: 'Reviewer Name',
        },
        {
          name: 'review',
          type: 'textarea',
          label: 'Review',
        },

        {
          name: 'reviewer_image',
          type: 'upload',
          relationTo: 'media',
          label: 'Reviewer Image',
        },
        {
          name: 'reviewer_role',
          type: 'text',
          label: 'Review Role',
        },
        {
          name: 'rating',
          type: 'number',
          max: 5,
          min: 1,
          label: 'Rating',
        },
      ],
    },
  ],
}

export default TestimonialConfig

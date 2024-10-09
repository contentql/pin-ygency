import { Block } from 'payload'

const ContactConfig: Block = {
  slug: 'Contact',
  interfaceName: 'ContactType',
  labels: {
    singular: 'Contact Block',
    plural: 'Contact Blocks',
  },
  fields: [
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
      admin: {
        description: 'Enter a brief subtitle for the contact section.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'Enter the main title for the contact section.',
      },
    },
    {
      name: 'background_text',
      type: 'text',
      label: 'Background Text',
      admin: {
        description:
          'Enter any background text to display behind the contact form or section.',
      },
    },
    {
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
      admin: {
        description: 'Enter the text for the button in the contact section.',
      },
    },
    {
      name: 'button_url',
      label: 'Button Url',
      type: 'text',
      admin: {
        description: 'Enter the URL that the button should link to.',
      },
    },
  ],
}

export default ContactConfig

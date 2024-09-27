import { Block } from 'payload'

const ContactConfig: Block = {
  slug: 'Contact',
  // imageURL: '',
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
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'background_text',
      type: 'text',
      label: 'Background Text',
    },
    {
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
    },
    {
      name: 'button_url',
      label: 'Button Url',
      type: 'text',
    },
  ],
}

export default ContactConfig

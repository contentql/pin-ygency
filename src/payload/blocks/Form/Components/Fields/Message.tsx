import { getHTML } from '@/utils/slateToHTML'

interface MessageField {
  message?:
    | {
        [k: string]: unknown
      }[]
    | null
  id?: string | null
  blockName?: string | null
  blockType: 'message'
}
const Message: React.FC<MessageField> = ({ message }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: getHTML(message!) }} />
    </div>
  )
}
export default Message

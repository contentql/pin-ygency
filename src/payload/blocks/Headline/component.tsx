import { Params } from '../types'
import { HeadlineType } from '@payload-types'

interface HeadlineProps extends HeadlineType {
  params: Params
}
const Headline: React.FC<HeadlineProps> = ({ params, ...block }) => {
  return (
    <div className='headline-area bgc-primary pb-65 pt-80'>
      <div className='container-fluid'>
        <div className='headline-wrap marquee'>
          <span>
            {block?.headlines?.map((headline, index) => (
              <span key={index} className='marquee-item'>
                <i className='fas fa-star-of-life' />
                <b>{headline?.title}</b>
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Headline

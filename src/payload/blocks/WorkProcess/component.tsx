import { Params } from '../types'
import { WorkProcessType } from '@payload-types'
import Image from 'next/image'

interface WorkProcessProps extends WorkProcessType {
  params: Params
}
const WorkProcess: React.FC<WorkProcessProps> = ({ params, ...block }) => {
  return (
    <section className='work-process-area pt-130 rpt-100 rel z-1'>
      <div className='container-1290 rel z-1 container'>
        <div className='row gap-70'>
          {block?.steps?.map((step, index) =>
            index % 2 == 0 ? (
              <div key={index} className='col-xl-3 col-md-6'>
                <div className='work-step-item style-two wow fadeInDown delay-0-2s mt-60'>
                  <span className='step-number'>Step 0{index + 1}</span>
                  <h4 className='title'>{step?.title}</h4>
                  <div className='content'>
                    <p>{step?.description}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div key={index} className='col-xl-3 col-md-6'>
                <div className='work-step-item style-two wow fadeInUp delay-0-2s'>
                  <span className='step-number'>Step 0{index + 1}</span>
                  <h4 className='title'>{step?.title}</h4>
                  <div className='content'>
                    <p>{step?.description}</p>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
        <div className='bg-line-shape'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src='/assets/images/shapes/work-process-line.png'
            alt='Work Process Line'
            height={199}
            width={1320}
          />
        </div>
      </div>
    </section>
  )
}

export default WorkProcess

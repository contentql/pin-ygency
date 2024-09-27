import { Params } from '../types'
import { Media, SkillsType } from '@payload-types'
import Image from 'next/image'

interface SkillsProps extends SkillsType {
  params: Params
}
const Skills: React.FC<SkillsProps> = ({ params, ...block }) => {
  return (
    <section className='skills-area pt-100 rpt-70 rel z-1'>
      <div className='container-1590 container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title wow fadeInUp delay-0-2s mb-60 text-center'>
              <h2>{block?.title}</h2>
            </div>
          </div>
        </div>
        <div className='skills-wrap'>
          {block?.skills?.map((skill, idx) => (
            <div key={idx} className='skill-item'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                src={(skill?.skill_image as Media)?.url as string}
                alt='Skill Icon'
                height={35}
                width={35}
              />
              <span className='text'>{skill?.skill_title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skills

import { DisqusComments } from '@contentql/core/client'
import dynamic from 'next/dynamic'

// import { About } from './About'
// import { Advertise } from './Advertise';
// import { Banner } from './Banner';
// import { Contact } from './Contact';
// import { FormBlock } from './Form';
// import { Headline } from './Headline';
// import { Hero } from './Hero';
// import { List } from './List';
// import { OurClients } from './OurClients';
// import { PageBanner } from './PageBanner';
// import { PricingFeatures } from './PricingFeatures';
// import { PricingSection } from './PricingSection';
// import { RecentWork } from './RecentWork';
// import { Service } from './Service';
// import { ServiceBanner } from './ServiceBanner';
// import { ServiceFeatures } from './ServiceFeatures';
// import { Skills } from './Skills';
// import { Statistics } from './Statistics';
// import { Team } from './Team';
// import { TeamInfo } from './TeamInfo';
// import { Testimonial } from './Testimonial';
// import { VideoArea } from './VideoArea';
// import { WorkProcess } from './WorkProcess';

const Details = dynamic(() => import('./Details/component'))
const About = dynamic(() => import('./About/component'))
const Advertise = dynamic(() => import('./Advertise/component'))
const Banner = dynamic(() => import('./Banner/component'))
const Contact = dynamic(() => import('./Contact/component'))
const FormBlock = dynamic(() => import('./Form/component'))
const Headline = dynamic(() => import('./Headline/component'))
const Hero = dynamic(() => import('./Hero/component'))
const List = dynamic(() => import('./List/component'))
const OurClients = dynamic(() => import('./OurClients/component'))
const PageBanner = dynamic(() => import('./PageBanner/component'))
const PricingFeatures = dynamic(() => import('./PricingFeatures/component'))
const PricingSection = dynamic(() => import('./PricingSection/component'))
const RecentWork = dynamic(() => import('./RecentWork/component'))
const Service = dynamic(() => import('./Service/component'))
const ServiceBanner = dynamic(() => import('./ServiceBanner/component'))
const ServiceFeatures = dynamic(() => import('./ServiceFeatures/component'))
const Skills = dynamic(() => import('./Skills/component'))
const Statistics = dynamic(() => import('./Statistics/component'))
const Team = dynamic(() => import('./Team/component'))
const TeamInfo = dynamic(() => import('./TeamInfo/component'))
const Testimonial = dynamic(() => import('./Testimonial/component'))
const VideoArea = dynamic(() => import('./VideoArea/component'))
const WorkProcess = dynamic(() => import('./WorkProcess/component'))

export const blocksJSX = {
  About,
  Advertise,
  Hero,
  Skills,
  Service,
  Headline,
  RecentWork,
  Testimonial,
  Team,
  ServiceBanner,
  ServiceFeatures,
  WorkProcess,
  Banner,
  OurClients,
  Statistics,
  TeamInfo,
  VideoArea,
  List,
  Details,
  Contact,
  PageBanner,
  PricingFeatures,
  PricingSection,
  DisqusComments,
  FormBlock,
}

// Exporting an object that maps block names (as keys) to their corresponding JSX components (as values)
import { About, AboutConfig } from './About'
import { Advertise, AdvertiseConfig } from './Advertise'
import { Banner, BannerConfig } from './Banner'
import { Contact, ContactConfig } from './Contact'
import { Details, DetailsConfig } from './Details'
import { DisqusComments, DisqusCommentsConfig } from './Disqus'
import { Headline, HeadlineConfig } from './Headline'
import { Hero, HeroConfig } from './Hero'
import { List, ListConfig } from './List'
import { OurClients, OurClientsConfig } from './OurClients'
import { PageBanner, PageBannerConfig } from './PageBanner'
import { PricingFeatures, PricingFeaturesConfig } from './PricingFeatures'
import { PricingSection, PricingSectionConfig } from './PricingSection'
import { RecentWork, RecentWorkConfig } from './RecentWork'
import { Service, ServiceConfig } from './Service'
import { ServiceBanner, ServiceBannerConfig } from './ServiceBanner'
import { ServiceFeatures, ServiceFeaturesConfig } from './ServiceFeatures'
import { Skills, SkillsConfig } from './Skills'
import { Statistics, StatisticsConfig } from './Statistics'
import { Team, TeamConfig } from './Team'
import { TeamInfo, TeamInfoConfig } from './TeamInfo'
import { Testimonial, TestimonialConfig } from './Testimonial'
import { VideoArea, VideoAreaConfig } from './VideoArea'
import { WorkProcess, WorkProcessConfig } from './WorkProcess'

// This object allows dynamic rendering of components based on the block names
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
}

// Exporting an array that consolidates all block configurations
// This array is useful for registering or iterating over all blocks and their configurations in one place
export const blocks = [
  AboutConfig,
  AdvertiseConfig,
  HeroConfig,
  SkillsConfig,
  ServiceConfig,
  HeadlineConfig,
  RecentWorkConfig,
  TestimonialConfig,
  TeamConfig,
  ServiceBannerConfig,
  ServiceFeaturesConfig,
  WorkProcessConfig,
  BannerConfig,
  OurClientsConfig,
  StatisticsConfig,
  TeamInfoConfig,
  VideoAreaConfig,
  ListConfig,
  DetailsConfig,
  ContactConfig,
  PageBannerConfig,
  PricingFeaturesConfig,
  PricingSectionConfig,
  DisqusCommentsConfig,
]

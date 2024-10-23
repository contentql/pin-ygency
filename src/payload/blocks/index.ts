// Exporting an object that maps block names (as keys) to their corresponding JSX components (as values)
import { AboutConfig } from './About'
import { AdvertiseConfig } from './Advertise'
import { BannerConfig } from './Banner'
import { ContactConfig } from './Contact'
import { DetailsConfig } from './Details'
import { FormConfig } from './Form'
import { HeadlineConfig } from './Headline'
import { HeroConfig } from './Hero'
import { ListConfig } from './List'
import { OurClientsConfig } from './OurClients'
import { PageBannerConfig } from './PageBanner'
import { PricingFeaturesConfig } from './PricingFeatures'
import { PricingSectionConfig } from './PricingSection'
import { RecentWorkConfig } from './RecentWork'
import { ServiceConfig } from './Service'
import { ServiceBannerConfig } from './ServiceBanner'
import { ServiceFeaturesConfig } from './ServiceFeatures'
import { SkillsConfig } from './Skills'
import { StatisticsConfig } from './Statistics'
import { TeamConfig } from './Team'
import { TeamInfoConfig } from './TeamInfo'
import { TestimonialConfig } from './Testimonial'
import { VideoAreaConfig } from './VideoArea'
import { WorkProcessConfig } from './WorkProcess'

// This object allows dynamic rendering of components based on the block names

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
  FormConfig,
]

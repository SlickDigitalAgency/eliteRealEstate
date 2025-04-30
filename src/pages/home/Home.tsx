import { HERO_SLIDES } from "@/constants/hero/HeroData";
import {
  STATISTICS,
  AWARDS,
  CHART_DATA,
  EXCELLENCE_QUOTE,
} from "@/constants/brandStatement/BrandStatementData";
import HomeHero from "@/components/hero/HomeHero";
import BrandStatement from "@/components/brandStatement/BrandStatement";
import Testimonials from "@/components/testimonials/Testimonials";
import FeaturedProperties from "@/components/featuredProperties/FeaturedProperties";
import { propertiesData } from "@/constants/properties/PropertiesData";
import AgentProfile from "@/components/agent/AgentProfile";
import { agentProfileData } from "@/constants/agent/AgentProfileData";
import Cta from "@/components/common/cta/Cta";

const Home = () => {
  return (
    <main>
      <HomeHero slides={HERO_SLIDES} />
      <BrandStatement
        statistics={STATISTICS}
        awards={AWARDS}
        chartData={CHART_DATA}
        quote={EXCELLENCE_QUOTE}
      />
      <FeaturedProperties properties={propertiesData} />
      <AgentProfile {...agentProfileData} />
      <Testimonials />
      <Cta />
    </main>
  );
};

export default Home;

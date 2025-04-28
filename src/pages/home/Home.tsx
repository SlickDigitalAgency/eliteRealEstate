import { HERO_SLIDES } from "@/constants/hero/HeroData";
import { STATISTICS, AWARDS, CHART_DATA, EXCELLENCE_QUOTE } from "@/constants/redefiningLuxuryRealEstate/RedefiningLuxuryRealEstateData";
import HomeHero from "@/components/hero/HomeHero";
import RedefiningLuxuryRealEstate from "@/components/redefiningLuxuryRealEstate/RedefiningLuxuryRealEstate";

const Home = () => {
  return (
    <main>
      <HomeHero slides={HERO_SLIDES} />
      <RedefiningLuxuryRealEstate
        statistics={STATISTICS}
        awards={AWARDS}
        chartData={CHART_DATA}
        quote={EXCELLENCE_QUOTE}
      />
    </main>
  );
};

export default Home;
import HomeHero from '@/components/Home/HomeHero';
import FeaturedWorks from '@/components/Home/FeaturedWorks';
import ValueProposition from '@/components/Home/ValueProposition';
import Stats from '@/components/Home/Stats';
import CaseStudies from '@/components/Home/CaseStudies';
import QuickContact from '@/components/Home/QuickContact';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedWorks />
      <ValueProposition />
      <Stats />
      <CaseStudies />
      <QuickContact />
    </>
  );
}

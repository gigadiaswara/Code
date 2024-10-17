import HeroSection from '../views/components/heroSection';
import CompanyOverview from '../views/components/companyOverview';
import ServicesSection from '../views/components/servicesSection';
import OurClient from '@/views/components/ourClient';
import OurTeam from '@/views/components/ourTeam';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CompanyOverview />
      <ServicesSection />
      <OurClient />
      <OurTeam/>
    </>
  );
};

export default HomePage;

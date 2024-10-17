import HeroSection from '../views/heroSection';
import CompanyOverview from '../views/companyOverview';
import ServicesSection from '../views/servicesSection';
import OurClient from '../views/ourClient';
import OurTeam from '../views/ourTeam';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CompanyOverview />
      <ServicesSection />
      <OurClient />
      <OurTeam />
    </>
  );
};

export default HomePage;
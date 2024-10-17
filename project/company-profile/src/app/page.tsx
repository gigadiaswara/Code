import HeroSection from '@/views/components/heroSection';
import CompanyOverview from '@/views/components/companyOverview';
import ServicesSection from '@/views/components/servicesSection';
import OurClient from '@/views/components/ourClient';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <CompanyOverview />
      <ServicesSection />
      <OurClient />
    </main>
  );
};

export default HomePage;
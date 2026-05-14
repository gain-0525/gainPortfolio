import Header from '../components/layout/Header';
import ActivitiesSection from '../sections/ActivitesSection';
import ContactSection from '../sections/ContactSection';
import HeroSection from '../sections/HeroSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <SkillsSection />
      <ActivitiesSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import StatusBar from '@/components/StatusBar';
import World3D from '@/components/World3D';
import HeroOverlay from '@/components/HeroOverlay';
import SectionPanel from '@/components/SectionPanel';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Research from '@/components/Research';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const SECTION_COMPONENTS: Record<string, React.FC> = {
  about: About,
  projects: Projects,
  skills: Skills,
  research: Research,
  contact: Contact,
};

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const openSection = (id: string) => setActiveSection(id);
  const closeSection = () => setActiveSection(null);

  const ActiveComponent = activeSection ? SECTION_COMPONENTS[activeSection] : null;

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-ink text-paper">
      <StatusBar onNavigate={openSection} onHome={closeSection} />
      <World3D onSelect={openSection} paused={!!activeSection} />
      {!activeSection && <HeroOverlay onNavigate={openSection} />}

      <AnimatePresence>
        {activeSection && ActiveComponent && (
          <SectionPanel key={activeSection} onClose={closeSection}>
            <ActiveComponent />
            {activeSection === 'contact' && <Footer />}
          </SectionPanel>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;

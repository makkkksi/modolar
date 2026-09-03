import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EditorialStatement } from './components/EditorialStatement';
import { OperationalFocus } from './components/OperationalFocus';
import { InterventionModes } from './components/InterventionModes';
import { EcosystemDiagram } from './components/EcosystemDiagram';
import { Capabilities } from './components/Capabilities';
import { NavyPhilosophy } from './components/NavyPhilosophy';
import { Methodology } from './components/Methodology';
import { CaseStudies } from './components/CaseStudies';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="modolar-app">
      <Navbar />
      <main id="main-content">
        <Hero />
        <EditorialStatement />
        <OperationalFocus />
        <InterventionModes />
        <EcosystemDiagram />
        <Capabilities />
        <NavyPhilosophy />
        <Methodology />
        <CaseStudies />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

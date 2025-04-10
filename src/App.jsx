import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdativeEngagement from './components/AdativeEngagement';
import StrategySection from './components/StrategySection';
import FlexibleDeploymentSection from './components/FlexibleDeploymentSection';
import WhyAELSection from './components/WhyAELSection';
import MetricsSection from './components/MetricsSection';
import AELActionSection from './components/AELActionSection';
import FeaturedOnSection from './components/FeaturedOnSection';
import FooterSection from './components/FooterSection';
import ContactFormOverlay from './components/ContactFormOverlay';
import CanvasAEMLanding from './components/nab/CanvasAEMLanding';
import Solutions from './components/Solutions';
import { FormProvider, useForm } from './contexts/FormContext';
import './index.css';

function AppContent() {
  const sectionsRef = useRef([]);
  const [activeSection, setActiveSection] = useState(0);
  const totalSections = 9;
  const { isFormOpen, closeForm } = useForm();
  
  // Set up refs array
  useEffect(() => {
    sectionsRef.current = sectionsRef.current.slice(0, totalSections);
  }, []);
  
  // Track active section without forcing scroll
  useEffect(() => {
    const sections = sectionsRef.current;
    
    const handleScroll = () => {
      // Get current scroll position
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Find which section should be active
      let newActiveSection = 0;
      sections.forEach((section, index) => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        // Section is active when it occupies the middle of the viewport
        const viewportMiddle = scrollY + windowHeight / 2;
        if (viewportMiddle >= sectionTop && viewportMiddle < sectionBottom) {
          newActiveSection = index;
        }
      });
      
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };
    
    // Handle scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Add keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextSection = Math.min(activeSection + 1, totalSections - 1);
        scrollToSection(nextSection);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevSection = Math.max(activeSection - 1, 0);
        scrollToSection(prevSection);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Scroll to section for keyboard navigation only
    const scrollToSection = (index) => {
      const targetSection = sectionsRef.current[index];
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    };
    
    // Trigger initial check without forcing scroll
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSection, totalSections]);
  
  return (
    <div className="font-montserrat">
      {/* First section - Landing Page */}
      <section 
        ref={el => sectionsRef.current[0] = el}
        className="bg-black" 
      >
        <LandingPage />
      </section>
      
      {/* Second section - Adative Engagement */}
      <section 
        ref={el => sectionsRef.current[1] = el}
        className="bg-black" 
      >
        <AdativeEngagement />
      </section>
      
      {/* Third section - Strategy Section */}
      <section 
        ref={el => sectionsRef.current[2] = el}
        className="bg-gray-900" 
      >
        <StrategySection />
      </section>
      
      {/* Fourth section - Flexible Deployment */}
      <section 
        ref={el => sectionsRef.current[3] = el}
        className="bg-black" 
      >
        <FlexibleDeploymentSection />
      </section>
      
      {/* Fifth section - AEL Action */}
      <section 
        ref={el => sectionsRef.current[4] = el}
        className="bg-black" 
      >
        <AELActionSection />
      </section>
      
      {/* Sixth section - Why AEL */}
      <section 
        ref={el => sectionsRef.current[5] = el}
        className="bg-black" 
      >
        <WhyAELSection />
      </section>
      
      {/* Seventh section - Metrics */}
      <section 
        ref={el => sectionsRef.current[6] = el}
        className="bg-black" 
      >
        <MetricsSection />
      </section>
      
      {/* Eighth section - Featured On */}
      <section 
        ref={el => sectionsRef.current[7] = el}
        className="bg-black"
      >
        <FeaturedOnSection />
      </section>
      
      {/* Ninth section - Footer */}
      <section 
        ref={el => sectionsRef.current[8] = el}
        className="bg-black"
      >
        <FooterSection />
      </section>

      {/* Contact Form Overlay */}
      <ContactFormOverlay isOpen={isFormOpen} onClose={closeForm} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <FormProvider>
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/nab" element={<CanvasAEMLanding />} caseSensitive/>
          <Route path="/NAB" element={<CanvasAEMLanding />} caseSensitive/>
          <Route path="/solutions" element={<Solutions />} />
        </Routes>
      </FormProvider>
    </Router>
  );
}

export default App;
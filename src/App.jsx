import { useEffect, useRef, useState } from 'react';
import LandingPage from './components/LandingPage';
import AdativeEngagement from './components/AdativeEngagement';
import StrategySection from './components/StrategySection';
import FlexibleDeploymentSection from './components/FlexibleDeploymentSection';
import WhyAELSection from './components/WhyAELSection';
import MetricsSection from './components/MetricsSection';
import AELActionSection from './components/AELActionSection';
import FeaturedOnSection from './components/FeaturedOnSection';
import FooterSection from './components/FooterSection';
import './index.css';

export default function App() {
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 9; // Updated to include FeaturedOnSection
  
  // Initialize section refs
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, totalSections);
  }, [totalSections]);

  useEffect(() => {
    // Improved section-by-section scrolling
    const scrollContainer = scrollContainerRef.current;
    let isScrolling = false;
    let scrollTimeout;
    
    const scrollToSection = (index) => {
      if (isScrolling) return;
      
      isScrolling = true;
      const targetIndex = Math.max(0, Math.min(totalSections - 1, index));
      
      if (targetIndex !== currentSection) {
        setCurrentSection(targetIndex);
        const targetSection = sectionRefs.current[targetIndex];
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }
      
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 800);
    };
    
    const handleWheel = (e) => {
      e.preventDefault();
      
      // Only respond to significant wheel movements
      if (Math.abs(e.deltaY) < 30) return;
      
      const direction = e.deltaY > 0 ? 1 : -1;
      scrollToSection(currentSection + direction);
    };
    
    // Touch handling
    let touchStartY = 0;
    let touchStartTime = 0;
    
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
    };
    
    const handleTouchMove = (e) => {
      // Prevent default to stop natural scrolling
      e.preventDefault();
      
      if (isScrolling) return;
      
      const touchY = e.touches[0].clientY;
      const diff = touchStartY - touchY;
      const timeDiff = Date.now() - touchStartTime;
      
      // Only trigger for swipes with sufficient distance and speed
      if (Math.abs(diff) > 50 && timeDiff < 300) {
        const direction = diff > 0 ? 1 : -1;
        scrollToSection(currentSection + direction);
        touchStartY = touchY;
      }
    };
    
    // Handle keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
    };
    
    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    scrollContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    scrollContainer.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(scrollTimeout);
    };
  }, [currentSection, totalSections]);

  return (
    <div 
      ref={scrollContainerRef}
      className="h-screen overflow-y-auto font-montserrat"
      style={{ scrollBehavior: 'smooth' }}
    >
      {/* First section - Landing Page */}
      <section 
        ref={el => sectionRefs.current[0] = el}
        className="min-h-screen w-full" 
      >
        <LandingPage />
      </section>
      
      {/* Second section - Adative Engagement */}
      <section 
        ref={el => sectionRefs.current[1] = el}
        className="min-h-screen w-full" 
      >
        <AdativeEngagement />
      </section>
      
      {/* Third section - Strategy Section */}
      <section 
        ref={el => sectionRefs.current[2] = el}
        className="min-h-screen w-full" 
      >
        <StrategySection />
      </section>
      
      {/* Fourth section - Flexible Deployment */}
      <section 
        ref={el => sectionRefs.current[3] = el}
        className="min-h-screen w-full" 
      >
        <FlexibleDeploymentSection />
      </section>
      
      {/* Fifth section - AEL Action */}
      <section 
        ref={el => sectionRefs.current[4] = el}
        className="min-h-screen w-full" 
      >
        <AELActionSection />
      </section>
      
      {/* Sixth section - Why AEL */}
      <section 
        ref={el => sectionRefs.current[5] = el}
        className="min-h-screen w-full" 
      >
        <WhyAELSection />
      </section>
      
      {/* Seventh section - Metrics */}
      <section 
        ref={el => sectionRefs.current[6] = el}
        className="min-h-screen w-full" 
      >
        <MetricsSection />
      </section>
      
      {/* Eighth section - Featured On */}
      <section 
        ref={el => sectionRefs.current[7] = el}
        className="min-h-screen w-full" 
      >
        <FeaturedOnSection />
      </section>
      
      {/* Ninth section - Footer */}
      <section 
        ref={el => sectionRefs.current[8] = el}
        className="w-full" 
      >
        <FooterSection />
      </section>
    </div>
  );
}
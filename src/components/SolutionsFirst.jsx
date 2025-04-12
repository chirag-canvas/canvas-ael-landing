import { useForm } from '../contexts/FormContext';
import { Link } from 'react-router-dom';
import WhyAELSection from './WhyAELSection';
import FooterSection from './FooterSection';
import FromPilotToPerformanceSection from './FromPilotToPerformanceSection';

export default function SolutionsFirst() {
  const { openForm } = useForm();
  
  return (
    <div className="min-h-screen bg-black relative overflow-hidden text-white font-montserrat flex flex-col">
      {/* Canvas Logo in top-left corner - responsive positioning */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-8 md:top-10 md:left-20 z-50">
        <img src="/images/canvas-logo.svg" alt="Canvas Logo" className="w-10 sm:w-12 md:w-16" />
      </div>
      
      {/* Improved gradient background with distinct left/right colors */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-20 top-0 w-1/2 h-full bg-[#6cc2ff] opacity-20 blur-[70px]"></div>
        <div className="absolute right-40 top-0 w-1/2 h-full bg-[#37ffb6] opacity-20 blur-[70px]"></div>
        
        {/* Blackish blur border effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute inset-0 border-[50px] border-black opacity-20 blur-[80px]"></div>
      </div>
      
      {/* Mobile menu button - only visible on mobile */}
      <div className="absolute top-4 right-4 z-50 md:hidden">
        <button 
          onClick={() => {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
              mobileMenu.classList.toggle('hidden');
            }
          }}
          className="text-white p-2 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      
      {/* Mobile menu - hidden by default */}
      <div id="mobile-menu" className="hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-sm flex items-center justify-center">
        <button 
          onClick={() => {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
              mobileMenu.classList.add('hidden');
            }
          }}
          className="absolute top-4 right-4 text-white p-2 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="flex flex-col items-center gap-8 text-xl">
          <Link to="/NAB" className="font-medium">Solutions</Link>
          <Link to="/NAB" className="font-medium">Pricing</Link>
          <a href="#" className="font-medium text-gray-400">Resources</a>
          <Link to="/NAB" className="font-medium">FAQ</Link>
          <button 
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              if (mobileMenu) {
                mobileMenu.classList.add('hidden');
              }
              openForm();
            }}
            className="px-6 py-3 rounded-full font-medium text-white mt-4" 
            style={{ background: "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)" }}
          >
            Explore AEL
          </button>
        </div>
      </div>

      {/* Navigation - desktop version */}
      <nav className="container mx-auto py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 flex flex-wrap justify-between items-center relative z-10">
        <div className="flex items-center">
          {/* Logo space - actual logo is positioned absolutely above */}
          <div className="w-10 sm:w-12 md:w-16"></div>
        </div>
        <div className="hidden md:flex flex-wrap items-center gap-4 lg:gap-8">
          <Link to="/solutions" className="font-medium hover:opacity-80 transition-opacity">Solutions</Link>
          <Link to="/NAB" className="font-medium hover:opacity-80 transition-opacity">Pricing</Link>
          <a href="#" className="font-medium text-gray-400 hover:text-white transition-colors">Resources</a>
          <Link to="/NAB" className="font-medium hover:opacity-80 transition-opacity">FAQ</Link>
          <button 
            onClick={openForm}
            className="px-4 py-2 lg:px-6 lg:py-2.5 rounded-full font-medium text-white whitespace-nowrap hover:opacity-90 transition-opacity" 
            style={{ background: "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)" }}
          >
            Explore AEL
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-20 text-center relative z-10 flex-1 flex flex-col justify-center">
        <div className="md:mt-0 mt-[-40px]">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 max-w-5xl mx-auto py-2 text-center">
        Curiosity-Powered Engagement & Monetization 
          </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 max-w-5xl mx-auto py-2 text-center">
            Canvas{" "}
            <span
                style={{
                background: "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
                }}
            >
                Adaptive Engagement Layer
            </span>{" "}
            (AEL) For
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-6 -mt-2 max-w-2xl mx-auto">OTT, Broadcasters and Video Platforms</p>

          {/* Video Area (replacing Laptop Image) */}
          <div className="mt-8 sm:mt-12 md:mt-16 relative">
            <div className="relative z-10 flex justify-center px-4 sm:px-6 md:px-0">
              <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[600px]">
                <video 
                  className="w-full rounded-lg shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.height = '200px';
                    e.target.style.background = '#000';
                    e.target.style.border = '2px solid #333';
                    e.target.style.borderRadius = '8px';
                  }}
                >
                  <source src="/Landing page/First scroll Laptop Video/Laptop video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
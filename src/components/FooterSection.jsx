import { useForm } from '../contexts/FormContext';
import { useState, useEffect } from 'react';

export default function FooterSection() {
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)";
  const { openForm } = useForm();
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <footer className="w-full bg-black text-white py-12 md:py-16">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-4 mb-12">
          {/* Left Section */}
          <div className={`flex flex-col ${isMobile ? 'items-center justify-center text-center' : 'items-start'}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Get Started</h3>
            
            <div className="space-y-3 mb-8">
              <a href="#" className="block text-lg text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="block text-lg text-gray-400 hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="block text-lg text-gray-400 hover:text-white transition-colors">Watch Demo</a>
            </div>
            
            <div className={`flex ${isMobile ? 'justify-center ml-0' : 'justify-end -ml-2'} mt-14`}>
              <button 
                onClick={openForm}
                className="px-8 py-3 rounded-full font-medium text-white text-base"
                style={{ background: gradient }}
              >
                Explore AEL
              </button>
            </div>
          </div>
          
          {/* Right Section */}
          <div className={`flex flex-col ${isMobile ? 'items-center justify-center text-center mt-8' : 'items-start md:items-end'}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-5">Canvas Space Inc.</h3>
            
            <p className={`text-lg text-gray-400 mb-2 ${isMobile ? 'text-center' : 'md:text-right'}`}>5548, Abington Drive, Newark,<br/>California, 94560</p>
            
            <a href="mailto:hello@canvas.space" className="text-lg text-gray-400 hover:text-white mb-6">hello@canvas.space</a>
            
            {/* Social Icons */}
            <div className={`flex space-x-4 mb-8 ${isMobile ? 'justify-center' : ''}`}>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
            
            <div className={`flex ${isMobile ? 'justify-center' : 'justify-end md:pr-0'}`}>
              <div className="gradient-border-container relative">
                <button 
                  className="px-8 py-3 rounded-full font-medium bg-transparent relative text-base"
                >
                  <span
                  style={{
                    background: gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline-block"
                  }}
                >
                  Contact us
                </span>
                </button>
                <style jsx="true">{`
                  .gradient-border-container {
                    position: relative;
                    display: inline-block;
                    padding: 2px;
                    border-radius: 9999px;
                    background: ${gradient};
                  }
                  .gradient-border-container:before {
                    content: '';
                    position: absolute;
                    inset: 1px;
                    background: black;
                    border-radius: 9999px;
                    z-index: 0;
                  }
                  .gradient-border-container button {
                    position: relative;
                    z-index: 1;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
        
        {/* Legal Section */}
        <div className="w-full border-t border-gray-800 pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-white text-base">Terms & Conditions</a>
            <a href="#" className="text-gray-400 hover:text-white text-base">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-base">Terms Of Use</a>
          </div>
          
          <p className="text-center text-gray-600 text-sm pb-4">©2024 Canvas Space Inc. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
} 
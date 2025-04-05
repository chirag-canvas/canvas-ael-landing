import { useRef, useState, useEffect } from 'react';

export default function FeaturedOnSection() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%), rgb(49, 52, 142) 100%)";
  
  const logos = [
    { name: "Meet the Drapers", src: "/Landing page/As featured on/Meet the Drapers.jpg", width: "200px" },
    { name: "Mathrubhumi", src: "/Landing page/As featured on/Mathrubhumi.jpg", width: "180px" },
    { name: "The Hindu", src: "/Landing page/As featured on/The Hindu.jpg", width: "200px" },
    { name: "Deccan Chronicle", src: "/Landing page/As featured on/Deccan Chronicle.jpg", width: "180px" },
    { name: "Indian Express", src: "/Landing page/As featured on/Indian Express.jpg", width: "180px" },
    { name: "THEWEEK", src: "/Landing page/As featured on/THEWEEK.jpg", width: "180px" },
  ];
  
  // Check scrolling possibilities
  const checkScrollability = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    setCanScrollLeft(slider.scrollLeft > 0);
    setCanScrollRight(
      slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 10
    );
  };
  
  // Use effect to check initially and add resize listener
  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);
  
  // Scroll functions
  const scrollLeft = () => {
    if (!sliderRef.current) return;
    // Adjust scroll amount based on screen size
    const scrollAmount = window.innerWidth < 640 ? -150 : -300;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(checkScrollability, 500);
  };
  
  const scrollRight = () => {
    if (!sliderRef.current) return;
    // Adjust scroll amount based on screen size
    const scrollAmount = window.innerWidth < 640 ? 150 : 300;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(checkScrollability, 500);
  };
  
  // Handle slider scroll event
  const handleSliderScroll = () => {
    checkScrollability();
  };
  
  return (
    <div className="text-white py-12 sm:py-16 md:py-20 bg-black">
      <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="rounded-xl sm:rounded-2xl py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10 bg-[#111111]">
          <div className="w-full max-w-6xl mx-auto text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 pt-8 sm:pt-12 md:pt-20 pb-3 sm:pb-5">
              <span
                className="bg-gradient-to-r from-[#f7901e] via-[#6ec377] to-[#36538b] bg-clip-text text-transparent"
              >
                As Featured On
              </span>
            </h1>
            <div className="relative px-8 sm:px-12 md:px-16">
              {/* Left scroll button */}
              <button 
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-gray-800 bg-opacity-70 ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                aria-label="Scroll left"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {/* Slider container - Responsive width */}
              <div className="mx-auto overflow-hidden">
                <div 
                  ref={sliderRef}
                  onScroll={handleSliderScroll}
                  className="overflow-x-auto hide-scrollbar flex items-center justify-start space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 py-4"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {logos.map((logo, index) => (
                    <div 
                      key={index}
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{ 
                        height: "80px",
                        width: window.innerWidth < 640 ? "150px" : logo.width
                      }}
                    >
                      <img 
                        src={logo.src} 
                        alt={logo.name} 
                        className="object-contain max-h-full max-w-full" 
                        style={{ 
                          width: 'auto', 
                          maxWidth: '100%',
                          maxHeight: '80px'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right scroll button */}
              <button 
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-gray-800 bg-opacity-70 ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                aria-label="Scroll right"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8">
                  <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            {/* Add a CSS style for hiding scrollbars */}
            <style jsx="true">{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              @media (max-width: 640px) {
                .logo-container {
                  width: 120px !important;
                }
                .logo-container img {
                  max-width: 120px !important;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
}
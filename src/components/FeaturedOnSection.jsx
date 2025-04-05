import { useRef, useState, useEffect } from 'react';

export default function FeaturedOnSection() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%), rgb(49, 52, 142) 100%)";
  
  const logos = [
    { name: "Meet the Drapers", src: "/Landing page/As featured on/Meet the Drapers.jpg", width: "240px" },
    { name: "Mathrubhumi", src: "/Landing page/As featured on/Mathrubhumi.jpg", width: "210px" },
    { name: "The Hindu", src: "/Landing page/As featured on/The Hindu.jpg", width: "230px" },
    { name: "Deccan Chronicle", src: "/Landing page/As featured on/Deccan Chronicle.jpg", width: "210px" },
    { name: "Indian Express", src: "/Landing page/As featured on/Indian Express.jpg", width: "210px" },
    { name: "THEWEEK", src: "/Landing page/As featured on/THEWEEK.jpg", width: "200px" },
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
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    setTimeout(checkScrollability, 500);
  };
  
  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    setTimeout(checkScrollability, 500);
  };
  
  // Handle slider scroll event
  const handleSliderScroll = () => {
    checkScrollability();
  };
  
  return (
    <div className="text-white py-20 bg-black">
      <div className="mx-auto px-12 sm:px-16 md:px-20 lg:px-50">
        <div className="rounded-2xl py-10 px-6 md:px-10" style={{ backgroundColor: "#1e1e1e" }}>
          <div className="w-full max-w-6xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 pt-20 pb-5">
            <span
              className="bg-gradient-to-r from-[#f7901e] via-[#6ec377] to-[#36538b] bg-clip-text text-transparent"
            >
              As Featured On
            </span>
          </h1>
            <div className="relative px-16">
              {/* Left scroll button */}
              <button 
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 rounded-full flex items-center justify-center bg-gray-800 bg-opacity-70 ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                aria-label="Scroll left"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {/* Slider container - Fixed width to show only 3 logos */}
              <div className="mx-auto overflow-hidden">
                <div 
                  ref={sliderRef}
                  onScroll={handleSliderScroll}
                  className="overflow-x-auto hide-scrollbar flex items-center justify-start space-x-6 md:space-x-8 py-4"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {logos.map((logo, index) => (
                    <div 
                      key={index}
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{ height: "120px" }}
                    >
                      <img 
                        src={logo.src} 
                        alt={logo.name} 
                        className="object-contain max-h-full" 
                        style={{ width: logo.width }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right scroll button */}
              <button 
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 rounded-full flex items-center justify-center bg-gray-800 bg-opacity-70 ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                aria-label="Scroll right"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            {/* Add a CSS style for hiding scrollbars */}
            <style jsx="true">{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
} 
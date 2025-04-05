import { useRef, useState, useEffect } from 'react';

export default function FeaturedOnSection() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
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
    <div className="bg-black text-white font-montserrat">
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{
          background: "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>
          As Featured On
        </h2>
        
        <div className="relative">
          {/* Left scroll button */}
          <button 
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-black bg-opacity-70 ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {/* Slider container with fixed width to show only 3 logos */}
          <div className="mx-auto max-w-3xl overflow-hidden">
            <div 
              ref={sliderRef}
              onScroll={handleSliderScroll}
              className="overflow-x-auto hide-scrollbar flex space-x-8 py-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {/* Logo placeholders - These will be replaced with actual logos later */}
              {[...Array(6)].map((_, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-56 h-28 bg-gray-800 rounded-lg flex items-center justify-center"
                >
                  <p className="text-gray-400">Logo {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right scroll button */}
          <button 
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-black bg-opacity-70 ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  );
} 
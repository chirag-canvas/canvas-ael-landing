import { useRef, useState, useEffect } from 'react';

export default function FeaturedOnSection() {
  const sliderRef = useRef(null);
  const mobileSliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%), rgb(49, 52, 142) 100%)";
  
  const logos = [
    { name: "Meet the Drapers", src: "/Landing page/As featured on/Meet the Drapers.jpg", width: "200px" },
    { name: "Mathrubhumi", src: "/Landing page/As featured on/Mathrubhumi.jpg", width: "180px" },
    { name: "The Hindu", src: "/Landing page/As featured on/The Hindu.jpg", width: "200px" },
    { name: "Deccan Chronicle", src: "/Landing page/As featured on/Deccan Chronicle.jpg", width: "180px" },
    { name: "Indian Express", src: "/Landing page/As featured on/Indian Express.jpg", width: "180px" },
    { name: "THEWEEK", src: "/Landing page/As featured on/THEWEEK.jpg", width: "180px" },
  ];
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Check horizontal scrolling possibilities (desktop)
  const checkHorizontalScrollability = () => {
    if (isMobile) return;
    
    const slider = sliderRef.current;
    if (!slider) return;
    
    setCanScrollLeft(slider.scrollLeft > 0);
    setCanScrollRight(
      slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 10
    );
  };
  
  // Check vertical scrolling possibilities (mobile)
  const checkVerticalScrollability = () => {
    if (!isMobile) return;
    
    const slider = mobileSliderRef.current;
    if (!slider) return;
    
    setCanScrollUp(slider.scrollTop > 0);
    setCanScrollDown(
      slider.scrollTop < slider.scrollHeight - slider.clientHeight - 10
    );
  };
  
  // Use effect to check initially and add resize listener
  useEffect(() => {
    if (isMobile) {
      checkVerticalScrollability();
    } else {
      checkHorizontalScrollability();
    }
    
    window.addEventListener('resize', () => {
      if (isMobile) {
        checkVerticalScrollability();
      } else {
        checkHorizontalScrollability();
      }
    });
    
    return () => window.removeEventListener('resize', () => {
      if (isMobile) {
        checkVerticalScrollability();
      } else {
        checkHorizontalScrollability();
      }
    });
  }, [isMobile]);
  
  // Horizontal scroll functions (desktop)
  const scrollLeft = () => {
    if (!sliderRef.current || isMobile) return;
    const scrollAmount = -200;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(checkHorizontalScrollability, 500);
  };
  
  const scrollRight = () => {
    if (!sliderRef.current || isMobile) return;
    const scrollAmount = 200;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(checkHorizontalScrollability, 500);
  };
  
  // Vertical scroll functions (mobile)
  const scrollUp = () => {
    if (!mobileSliderRef.current || !isMobile) return;
    const scrollAmount = -180;
    mobileSliderRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    setTimeout(checkVerticalScrollability, 500);
  };
  
  const scrollDown = () => {
    if (!mobileSliderRef.current || !isMobile) return;
    const scrollAmount = 180;
    mobileSliderRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    setTimeout(checkVerticalScrollability, 500);
  };
  
  // Handle slider scroll events
  const handleHorizontalScroll = () => {
    if (!isMobile) {
      checkHorizontalScrollability();
    }
  };
  
  const handleVerticalScroll = () => {
    if (isMobile) {
      checkVerticalScrollability();
    }
  };
  
  return (
    <div className="text-white py-12 sm:py-16 md:py-5 bg-[#111111]">
      <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className={`${isMobile ? 'h-[350px]' : 'h-[400px]'} rounded-xl sm:rounded-2xl py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10 bg-[#111111]`}>
          <div className="w-full max-w-6xl mx-auto text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:pt-8 md:pt-12 pb-3 sm:pb-5">
              <span
                className="bg-gradient-to-r from-[#f7901e] via-[#6ec377] to-[#36538b] bg-clip-text text-transparent"
              >
                As Featured On
              </span>
            </h1>
            
            {isMobile ? (
              // Mobile vertical layout - Limited to 3 visible items
              <div className="relative">
                {/* Up scroll button */}
                <button 
                  onClick={scrollUp}
                  disabled={!canScrollUp}
                  className={`absolute left-1/2 -translate-x-1/2 top-0 z-10 w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 bg-opacity-70 ${!canScrollUp ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                  aria-label="Scroll up"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                    <path d="M18 15L12 9L6 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {/* Vertical scroll container */}
                <div className="mx-auto overflow-hidden h-[220px]">
                  <div 
                    ref={mobileSliderRef}
                    onScroll={handleVerticalScroll}
                    className="overflow-y-auto hide-scrollbar flex flex-col items-center space-y-3 py-2 px-2 h-full"
                    style={{
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none'
                    }}
                  >
                    {logos.map((logo, index) => (
                      <div 
                        key={index}
                        className="flex-shrink-0 flex items-center justify-center w-full py-2"
                      >
                        <img 
                          src={logo.src} 
                          alt={logo.name} 
                          className="object-contain h-[60px] max-w-[80%]" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Down scroll button */}
                <button 
                  onClick={scrollDown}
                  disabled={!canScrollDown}
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 z-10 w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 bg-opacity-70 ${!canScrollDown ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                  aria-label="Scroll down"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                    <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ) : (
              // Desktop horizontal layout - Limited to 3 visible items
              <div className="relative px-8 sm:px-12 md:px-16">
                <button 
                  onClick={scrollLeft}
                  disabled={!canScrollLeft}
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-gray-800 bg-opacity-70 ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                  aria-label="Scroll left"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                    <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {/* Fixed width container to show exactly 3 logos */}
                <div className="mx-auto overflow-hidden" style={{ maxWidth: "650px" }}>
                  <div 
                    ref={sliderRef}
                    onScroll={handleHorizontalScroll}
                    className="overflow-x-auto hide-scrollbar flex items-center justify-start space-x-4 md:space-x-6 py-4"
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
                          width: logo.width
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
                
                <button 
                  onClick={scrollRight}
                  disabled={!canScrollRight}
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-gray-800 bg-opacity-70 ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                  aria-label="Scroll right"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                    <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
            
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
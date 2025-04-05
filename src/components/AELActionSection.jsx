import { useState } from 'react';

export default function AELActionSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)";

  const testimonialsData = [
    {
      title: "15-20% Engagement Lift",
      quote: "Capturing first-party insights for personalization.",
      author: "CMO, Leading Content Platform",
      image: "/Landing page/Our AEL in Action/Engagement lift.png"
    },
    {
      title: "20% CPM Lift",
      quote: "Enhancing CPMs and ad revenue with data-rich audiences.",
      author: "CEO, Premium VOD",
      image: "/Landing page/Our AEL in Action/CPM lift.png"
    } 
  ];

  return (
    <div className="bg-black text-white py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-8 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 opacity-20" style={{ 
        background: 'radial-gradient(circle at 70% 30%, rgba(54, 134, 149, 0.3), transparent 60%), radial-gradient(circle at 30% 70%, rgba(110, 195, 119, 0.3), transparent 60%)'
      }}></div>

      {/* Center radial gradient */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] sm:w-[120px] md:w-[180px] lg:w-[250px] h-[100px] sm:h-[150px] md:h-[250px] lg:h-[350px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6cc2ff] via-[#37ffb6] to-transparent opacity-60 blur-[60px] sm:blur-[80px] md:blur-[120px] lg:blur-[150px]"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-4 sm:mb-6 md:mb-10 lg:mb-16">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
            <span style={{
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Our AEL in Action
            </span>
          </h2>
        </div>

        {/* Main Content - Two Column Layout that stacks on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center relative">
          {/* Left Column - Testimonial and Screenshot */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6 md:pr-4 lg:pr-10 text-center">
            <div className="space-y-1 sm:space-y-2 md:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold" style={{
                background: gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                {testimonialsData[activeSlide].title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">"{testimonialsData[activeSlide].quote}"</p>
              <p className="text-xs sm:text-sm text-gray-400 italic">{testimonialsData[activeSlide].author}</p>
            </div>
            
            <div className="rounded-lg sm:rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
              <img 
                src={testimonialsData[activeSlide].image} 
                alt="AEL in action" 
                className="w-full h-auto object-cover object-center"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found";
                  e.target.classList.add("bg-gray-800");
                }}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-2 sm:space-x-3 mt-2 sm:mt-3 md:mt-4">
              <button 
                onClick={() => setActiveSlide(prev => (prev === 0 ? testimonialsData.length - 1 : prev - 1))}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Previous"
              >
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setActiveSlide(prev => (prev === testimonialsData.length - 1 ? 0 : prev + 1))}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Next"
              >
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Vertical Divider - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px">
            <div className="h-full w-full" style={{ background: gradient }}></div>
          </div>

          {/* Horizontal Divider - Only visible on mobile */}
          <div className="md:hidden w-full h-px my-3 sm:my-4">
            <div className="h-full w-full" style={{ background: gradient }}></div>
          </div>

          {/* Right Column - Metrics */}
          <div className="flex flex-col items-center space-y-3 md:pl-4 lg:pl-10 top-0">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 md:mb-4">Proven Impact Metrics</h3>
            
            <div className="space-y-2 sm:space-y-3 md:space-y-4 max-w-[280px] sm:max-w-[320px] mx-auto">
              {/* Metric 1 */}
              <div className="p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-full border-2 border-transparent bg-black max-w-[220px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] mx-auto"
                style={{ 
                  border: "2px solid transparent",
                  backgroundImage: `linear-gradient(black, black), ${gradient}`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box"
                }}>
                <div className="text-center">
                  <h4 className="text-base sm:text-lg md:text-xl font-bold mb-0.5" style={{
                    background: gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>10-20%</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Increased Engagement</p>
                </div>
              </div>
              
              {/* Metric 2 */}
              <div className="p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-full border-2 border-transparent bg-black max-w-[220px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] mx-auto"
                style={{ 
                  border: "2px solid transparent",
                  backgroundImage: `linear-gradient(black, black), ${gradient}`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box"
                }}>
                <div className="text-center">
                  <h4 className="text-base sm:text-lg md:text-xl font-bold mb-0.5" style={{
                    background: gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>30%</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Reduced Churn</p>
                </div>
              </div>
              
              {/* Metric 3 */}
              <div className="p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-full border-2 border-transparent bg-black max-w-[220px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] mx-auto"
                style={{ 
                  border: "2px solid transparent",
                  backgroundImage: `linear-gradient(black, black), ${gradient}`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box"
                }}>
                <div className="text-center">
                  <h4 className="text-base sm:text-lg md:text-xl font-bold mb-0.5" style={{
                    background: gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>5X Engagement</h4>
                  <p className="text-xs sm:text-sm text-gray-300">With A/B Test & Contextual Interactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
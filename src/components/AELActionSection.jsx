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
    <div className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-20 px-4 md:px-8 relative">
      {/* Gradient background */}
      <div className="absolute inset-0 opacity-20" style={{ 
        background: 'radial-gradient(circle at 70% 30%, rgba(54, 134, 149, 0.3), transparent 60%), radial-gradient(circle at 30% 70%, rgba(110, 195, 119, 0.3), transparent 60%)'
      }}></div>

      {/* Center radial gradient */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] sm:w-[200px] md:w-[250px] h-[200px] sm:h-[300px] md:h-[350px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6cc2ff] via-[#37ffb6] to-transparent opacity-60 blur-[100px] sm:blur-[150px]"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative">
          {/* Left Column - Testimonial and Screenshot */}
          <div className="space-y-6 md:space-y-8 md:pr-6 lg:pr-12 text-center">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{
                background: gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                {testimonialsData[activeSlide].title}
              </h3>
              <p className="text-lg sm:text-xl text-gray-300">"{testimonialsData[activeSlide].quote}"</p>
              <p className="text-gray-400 italic">{testimonialsData[activeSlide].author}</p>
            </div>
            
            <div className="rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
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
            <div className="flex justify-center space-x-4 mt-4 sm:mt-6">
              <button 
                onClick={() => setActiveSlide(prev => (prev === 0 ? testimonialsData.length - 1 : prev - 1))}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Previous"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setActiveSlide(prev => (prev === testimonialsData.length - 1 ? 0 : prev + 1))}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Next"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Vertical Divider - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px ml-8">
            <div className="h-full w-full" style={{ background: gradient }}></div>
          </div>

          {/* Horizontal Divider - Only visible on mobile */}
          <div className="md:hidden w-full h-px my-6">
            <div className="h-full w-full" style={{ background: gradient }}></div>
          </div>

          {/* Right Column - Metrics */}
          <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:pl-6 lg:pl-12 top-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-8">Proven Impact Metrics</h3>
            
            <div className="space-y-4 sm:space-y-6 max-w-md mx-auto">
              {/* Metric 1 */}
              <div className="p-3 sm:p-4 md:p-5 rounded-full border-2 border-transparent bg-black max-w-[280px] sm:max-w-[320px] md:max-w-[350px] mx-auto"
                style={{ 
                  border: "2px solid transparent",
                  backgroundImage: `linear-gradient(black, black), ${gradient}`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box"
                }}>
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl font-bold mb-1" style={{
                    background: gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>10-20%</h4>
                  <p className="text-sm sm:text-base text-gray-300">Increased Engagement</p>
                </div>
              </div>
              
              {/* Metric 2 */}
              <div className="p-3 sm:p-4 md:p-5 rounded-full border-2 border-transparent bg-black max-w-[280px] sm:max-w-[320px] md:max-w-[350px] mx-auto"
                style={{ 
                  border: "2px solid transparent",
                  backgroundImage: `linear-gradient(black, black), ${gradient}`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box"
                }}>
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl font-bold mb-1" style={{
                    background: gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>30%</h4>
                  <p className="text-sm sm:text-base text-gray-300">Reduced Churn</p>
                </div>
              </div>
              
              {/* Metric 3 */}
              <div className="p-3 sm:p-4 md:p-5 rounded-full border-2 border-transparent bg-black max-w-[280px] sm:max-w-[320px] md:max-w-[350px] mx-auto"
                style={{ 
                  border: "2px solid transparent",
                  backgroundImage: `linear-gradient(black, black), ${gradient}`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box"
                }}>
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl font-bold mb-1" style={{
                    background: gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>5X Engagement</h4>
                  <p className="text-sm sm:text-base text-gray-300">With A/B Test & Contextual Interactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
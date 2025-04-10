import { useState, useEffect } from 'react';

export default function AdaptiveEngagement() {
  // Fixed typo in function name from AdativeEngagement to AdaptiveEngagement
  const [activeTab, setActiveTab] = useState('ott');
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)";
  const blueGreenGradient = "linear-gradient(120deg, rgba(54, 134, 149, 0.8), rgba(110, 195, 119, 0.8))";

  // Auto switch tabs every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => prev === 'ott' ? 'media' : 'ott');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const ottContent = [ 
    {
        title: "Media Companies",
        description: "From Views to Loyalty- drive engagement and deep viewer insights",
        image: "/Landing page/AEL for First-Party Data/Creator platform.png",
        dotColor: "bg-purple-500"
      },
      {
        title: "OVPs & CMS Platforms",
        description: "Maximize Streams with enhanced interactivity without changing the infrastructure",
        image: "/Landing page/AEL for First-Party Data/Video platforms.png",
        dotColor: "bg-green-500"
      },
      {
        title: "Ad-Tech & SSAI Players",
        description: "Capture moments, enhance pre-rolls & personalise UX sensitive apps",
        image: "/Landing page/AEL for First-Party Data/Audio platform.png",
        dotColor: "bg-red-500"
      }
    ];
  
    
    const mediaContent = [
      {
        title: "Subscription Management Platforms",
        description: "Optimize conversions with precise & moment-driven data",
        image: "/Landing page/AEL for First-Party Data/Subscription management platform.png",
        dotColor: "bg-yellow-500"
      },
      {
        title: "FAST & Live Providers",
        description: "Enhance CPMs by adding live polls, time-gated unlocks, and more",
        image: "/Landing page/AEL for First-Party Data/OTT Platforms.jpg",
        dotColor: "bg-orange-500"
      },
      {
        title: "Gaming & Creator Tools",
        description: "Optimize Streams, Maximize Insights & Deepen Retention",
        image: "/Landing page/AEL for First-Party Data/OVP.png",
        dotColor: "bg-blue-500"
      },
      
    ];
  
  
  return (
    <div className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 relative flex items-center justify-center">
      {/* Main Content Container with Light Black Background */}
      <div className="w-full sm:w-[98%] lg:w-[95%] bg-[#111111] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm border border-gray-800">
        {/* Heading Section - Responsive sizes */}
        <div className="container mx-auto text-center max-w-6xl mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
            <span style={{ 
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Grow Attention with Precision Engagement 
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            <span style={{ 
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              with the Adaptive Engagement Layer
            </span>
          </h2>
        </div>

        {/* Category Buttons - Responsive sizing and stacking on small screens */}
        <div className="flex lg:flex-row sm:flex-col justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
          <button 
            onClick={() => setActiveTab('ott')}
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-medium text-white min-w-0 sm:min-w-[160px] md:min-w-[200px] transition-all duration-300 text-base sm:text-lg md:text-xl relative" 
            style={{ 
              background: activeTab === 'ott' ? gradient : 'transparent',
              position: 'relative',
              boxShadow: activeTab === 'ott' ? '0 0 15px rgba(54, 134, 149, 0.7)' : 'none'
            }}>
            {activeTab !== 'ott' && (
              <>
                <div className="absolute inset-0 rounded-full p-[2px]" 
                    style={{
                      background: gradient,
                      zIndex: -1
                    }}
                />
                <div className="absolute inset-[2px] rounded-full bg-black" 
                    style={{
                      zIndex: -1
                    }}
                />
              </>
            )}
            Canvas AEL
          </button>
          <button 
            onClick={() => setActiveTab('media')}
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-medium text-white min-w-0 sm:min-w-[160px] md:min-w-[200px] transition-all duration-300 text-base sm:text-lg md:text-xl relative" 
            style={{ 
              background: activeTab === 'media' ? gradient : 'transparent',
              position: 'relative',
              boxShadow: activeTab === 'media' ? '0 0 15px rgba(54, 134, 149, 0.7)' : 'none'
            }}>
            {activeTab !== 'media' && (
              <>
                <div className="absolute inset-0 rounded-full p-[2px]" 
                    style={{
                      background: gradient,
                      zIndex: -1
                    }}
                />
                <div className="absolute inset-[2px] rounded-full bg-black" 
                    style={{
                      zIndex: -1
                    }}
                />
              </>
            )}
            Canvas AEL +
          </button>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {(activeTab === 'ott' ? ottContent : mediaContent).map((card, index) => (
            <div 
              key={index}
              className="rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 transition-all"
              style={{ 
                border: "2px solid transparent",
                backgroundImage: `linear-gradient(to bottom, #1a202c, #000), ${blueGreenGradient}`,
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow: '0 0 15px rgba(54, 134, 149, 0.5)'
              }}>
              <div className="h-48 sm:h-56 md:h-64 bg-black relative overflow-hidden">
                <img 
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    const placeholder = document.createElement('div');
                    placeholder.className = 'w-full h-full flex items-center justify-center bg-gray-900';
                    
                    // Add placeholder content
                    const icon = document.createElement('div');
                    icon.className = 'w-12 h-12 border-2 border-white rounded-full flex items-center justify-center';
                    icon.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>';
                    
                    placeholder.appendChild(icon);
                    e.target.parentNode.appendChild(placeholder);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="bg-gray-800 inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-2 sm:mb-4 gap-1 sm:gap-2">
                  <span className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ${card.dotColor} rounded-full`}></span>
                  <span className="font-bold text-xs sm:text-sm" style={{ 
                    background: gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>{card.title}</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-2">{card.description}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
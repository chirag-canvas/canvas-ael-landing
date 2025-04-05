import { useState, useEffect } from 'react';

export default function AdativeEngagement() {
  const [activeTab, setActiveTab] = useState('ott');
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)";

  // Auto switch tabs every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => prev === 'ott' ? 'media' : 'ott');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const ottContent = [
    {
      title: "OTT PLATFORMS",
      description: "Maximize engagement & enhance CPMs with high-value data",
      image: "/Landing page/AEL for First-Party Data/OTT Platforms.jpg",
      dotColor: "bg-orange-500"
    },
    {
      title: "OVP PLATFORMS",
      description: "Optimize Streams, Maximize Insights & Deepen Retention",
      image: "/Landing page/AEL for First-Party Data/OVP.png",
      dotColor: "bg-blue-500"
    },
    {
      title: "SUBSCRIPTION MANAGEMENT PLATFORMS",
      description: "Turn Churn into Loyalty with Targeted Engagement.",
      image: "/Landing page/AEL for First-Party Data/Subscription management platform.png",
      dotColor: "bg-yellow-500"
    }
  ];

  const mediaContent = [
    {
      title: "CREATOR PLATFORMS",
      description: "Transform content into engaging experiences with data-driven insights",
      image: "/Landing page/AEL for First-Party Data/Creator platform.png",
      dotColor: "bg-purple-500"
    },
    {
      title: "VIDEO PLATFORMS",
      description: "Elevate viewer engagement with interactive experiences",
      image: "/Landing page/AEL for First-Party Data/Video platforms.png",
      dotColor: "bg-green-500"
    },
    {
      title: "AUDIO PLATFORMS",
      description: "Create immersive audio experiences with listener insights",
      image: "/Landing page/AEL for First-Party Data/Audio platform.png",
      dotColor: "bg-red-500"
    }
  ];
  
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-8 relative flex items-center justify-center">
      {/* Main Content Container with Light Black Background */}
      <div className="w-[95%] lg:w-[90%] bg-gray-900/60 rounded-3xl p-6 md:p-10 backdrop-blur-sm border border-gray-800">
        {/* Heading Section */}
        <div className="container mx-auto text-center max-w-5xl mb-12">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-2">
            <span style={{ 
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Adative Engagement Layer (AEL)
            </span>
          </h1>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold">
            <span style={{ 
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              For First Party Data Collection
            </span>
          </h2>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('ott')}
            className="px-8 py-3 rounded-full font-medium text-white min-w-[180px] transition-all duration-300" 
            style={{ 
              background: activeTab === 'ott' ? gradient : 'transparent',
              border: activeTab === 'ott' ? 'none' : "2px solid transparent",
              backgroundImage: activeTab === 'ott' ? gradient : `linear-gradient(black, black), ${gradient}`,
              backgroundOrigin: activeTab === 'ott' ? 'border-box' : "border-box",
              backgroundClip: activeTab === 'ott' ? 'border-box' : "padding-box, border-box"
            }}>
            OTT
          </button>
          <button 
            onClick={() => setActiveTab('media')}
            className="px-8 py-3 rounded-full font-medium text-white min-w-[180px] transition-all duration-300" 
            style={{ 
              background: activeTab === 'media' ? gradient : 'transparent',
              border: activeTab === 'media' ? 'none' : "2px solid transparent",
              backgroundImage: activeTab === 'media' ? gradient : `linear-gradient(black, black), ${gradient}`,
              backgroundOrigin: activeTab === 'media' ? 'border-box' : "border-box",
              backgroundClip: activeTab === 'media' ? 'border-box' : "padding-box, border-box"
            }}>
            Media Platforms
          </button>
        </div>

        {/* Feature Cards Section */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {(activeTab === 'ott' ? ottContent : mediaContent).map((card, index) => (
            <div 
              key={index}
              className="rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 transition-all"
              style={{ 
                border: "2px solid transparent",
                backgroundImage: `linear-gradient(to bottom, #1a202c, #000), ${gradient}`,
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box"
              }}>
              <div className="h-64 bg-black relative overflow-hidden">
                <img 
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center"
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
              <div className="p-6">
                <div className="bg-gray-800 inline-flex items-center px-4 py-2 rounded-full mb-4 gap-2">
                  <span className={`w-5 h-5 ${card.dotColor} rounded-full`}></span>
                  <span className="font-bold" style={{ 
                    background: gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>{card.title}</span>
                </div>
                <h3 className="text-xl text-gray-200 mb-2">{card.description}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
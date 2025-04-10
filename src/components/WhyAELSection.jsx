export default function WhyAELSection() {
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)";
  
  const features = [
    {
      icon: "/Landing page/AEL & AEL+ The Curiosity/First Party Data Collection.svg",
      title: "First Party Data Collection & Monetization"
    },
    {
      icon: "/Landing page/AEL & AEL+ The Curiosity/Higher CPMs.svg",
      title: "Higher CPMs & Retention"
    },
    {
      icon: "/Landing page/AEL & AEL+ The Curiosity/Personalized UX.svg",
      title: "Personalized UX"
    },
    {
      icon: "/Landing page/AEL & AEL+ The Curiosity/Power to Power unlock.svg",
      title: "Reward-to-Unlock Experiences"
    }
  ];
  
  return (
    <div className="bg-black text-white flex items-center justify-center px-3 sm:px-4 md:px-8 py-6 sm:py-8 md:py-16 relative">
      <div className="w-full md:w-[95%] lg:w-[98%] bg-[#111111] rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-10 backdrop-blur-sm border border-gray-800">
        {/* Middle gradient stripe */}
        <div className="absolute top-1/3 left-1/4 right-1/4 h-1/3 opacity-20" style={{ 
          background: gradient,
          filter: 'blur(100px)'
        }}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 py-3 sm:py-4 md:py-6">
          <div className="text-center mb-4 sm:mb-6 md:mb-10 flex flex-col items-center justify-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-2 md:mb-3 py-1 sm:py-2" style={{ 
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              AEL & AEL + 
            </h2>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-2 md:mb-3 py-1 sm:py-2" style={{ 
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              The Curiosity-Powered Engagement & Monetization Engine you need
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden h-[140px] sm:h-auto sm:aspect-square" 
                style={{ 
                  border: "2px solid transparent",
                  backgroundImage: `linear-gradient(to bottom, #000, #000), ${gradient}`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box"
                }}
              >
                <div className="h-full w-full p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center bg-black">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-2 sm:mb-3 md:mb-4">
                    <img 
                      src={feature.icon}
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-center">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
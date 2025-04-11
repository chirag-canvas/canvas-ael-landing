export default function WhyAELSection() {
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)";
  const features = [
    {
      icon: "/images/first-party-data.svg",
      title: "First Party Data Collection & Monetization"
    },
    {
      icon: "/images/higher-cpms.svg",
      title: "Higher CPMs & Retention"
    },
    {
      icon: "/images/personalized-ux.svg",
      title: "Personalized UX"
    },
    {
      icon: "/images/power-unlock.svg",
      title: "Reward-to-Unlock Experiences"
    }
  ];
  return (
    <div className="bg-black text-white flex items-center justify-center px-3 sm:px-4 md:px-8 py-6 sm:py-8 md:py-12 relative">
      {/* Background gradient effect */}
      <div className="h-auto sm:h-[500px] md:h-[600px] lg:h-[650px] w-full sm:w-[95%] lg:w-[98%] bg-[#111111] rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-10 backdrop-blur-sm border border-gray-800">
        <div className="absolute inset-0 opacity-20" style={{ 
          background: 'radial-gradient(circle at 70% 50%, rgba(54, 134, 149, 0.3), transparent 60%), radial-gradient(circle at 30% 50%, rgba(110, 195, 119, 0.3), transparent 60%)'
        }}></div>
        <div className="absolute top-1/3 left-1/4 right-1/4 h-1/3 opacity-20" style={{ 
          background: gradient,
          filter: 'blur(100px)'
      }}></div>
        <div className="container mx-auto max-w-7xl relative z-10">
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
                    className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden h-[140px] sm:h-[140px] md:h-auto md:aspect-square" 
                    style={{ 
                      border: "2px solid transparent",
                      backgroundImage: `linear-gradient(to bottom, #000, #000), ${gradient}`,
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box"
                    }}
                  >
                    <div className="h-full w-full bg-black flex flex-col items-center justify-center p-3 sm:p-4 md:p-6">
                      <div className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-2 sm:mb-3 md:mb-4 flex items-center justify-center">
                        {feature.customIcon ? (
                          <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7447 3.31202C13.8123 2.30302 15.3363 2.09202 16.6203 2.77802C19.0393 4.10502 18.0173 7.51002 16.2913 9.12802C16.0613 9.34702 16.1763 9.71902 16.4823 9.75602C16.5564 9.76556 16.6313 9.77218 16.7063 9.77602C17.8043 9.84102 19.2133 9.42302 19.8193 7.50502C20.1743 6.36602 19.9043 4.91902 19.0553 3.98702C18.1613 3.00602 16.8493 2.58602 15.4093 2.83602C14.3103 3.02602 13.3233 3.61402 12.5903 4.53502C12.3743 4.81102 12.4773 5.19402 12.7947 5.31502C12.8071 5.32042 12.8172 5.32876 12.8237 5.33902C12.8366 5.36232 12.8291 5.39102 12.8063 5.40502C12.7865 5.41657 12.7629 5.41944 12.7417 5.41202C12.2733 5.26002 11.7607 5.16702 11.1887 5.14902C9.73074 5.10202 8.51474 5.71902 7.67574 6.81202C7.55574 6.97602 7.51574 7.17902 7.55874 7.37102C7.56304 7.39526 7.55845 7.42007 7.54574 7.44102C7.53302 7.46196 7.51276 7.47785 7.48874 7.48602C7.40674 7.51402 7.33974 7.57802 7.30474 7.66102L3.50874 16.9C3.32974 17.322 3.77774 17.725 4.15274 17.486L5.99774 16.3C6.14674 16.205 6.33974 16.216 6.47574 16.33L8.59774 18.169C8.90574 18.437 9.38574 18.114 9.28574 17.694L6.07374 6.50802C6.0442 6.39925 6.05074 6.28517 6.09274 6.18002C6.09274 6.18002 6.09274 6.18002 6.09274 6.17902C6.16774 5.99502 6.33474 5.87002 6.51974 5.85002C6.56874 5.84402 6.61774 5.84102 6.66574 5.84302C8.26074 5.91402 9.75974 6.6 10.2097 8.24902C10.2307 8.32602 10.2847 8.38902 10.3597 8.41902C10.3858 8.43031 10.4152 8.43184 10.4427 8.42302C10.4707 8.41399 10.494 8.39512 10.5077 8.37002C11.0667 7.27402 11.9137 6.34002 12.7447 5.65002C12.8487 5.56302 12.8297 5.40402 12.7127 5.33502C12.4647 5.18802 12.5617 4.82202 12.8637 4.80402C12.9627 4.79802 13.0617 4.79402 13.1607 4.79302C13.4567 4.78802 13.5097 4.39502 13.2397 4.29402C12.8047 4.13202 12.3397 4.04802 11.8637 4.04802C10.0637 4.04802 8.51574 5.21102 7.97874 6.89602C7.94874 7.00002 7.85974 7.08102 7.75274 7.10702C7.60574 7.14302 7.48974 7.26702 7.45774 7.41702L4.11774 19.046C4.08574 19.196 4.15574 19.35 4.28474 19.434L6.74474 21.061C7.22274 21.375 7.85374 21.055 7.89274 20.489L8.09274 17.43C8.10574 17.253 8.25674 17.115 8.43474 17.115C8.53074 17.115 8.62074 17.155 8.68774 17.225L12.2447 20.878C12.2877 20.923 12.3417 20.954 12.4017 20.97C12.8007 21.052 13.1277 20.663 13.0167 20.269L12.2447 17.459C12.2087 17.322 12.2677 17.178 12.3917 17.11C12.5017 17.051 12.5467 16.923 12.5157 16.801L10.3317 8.39802C10.3087 8.30402 10.3377 8.20502 10.4037 8.13902C10.4697 8.07302 10.5697 8.04502 10.6627 8.06602C10.7407 8.08302 10.8167 8.13302 10.8537 8.20702L12.9247 12.333C13.0657 12.615 13.4387 12.65 13.6287 12.396C14.4427 11.289 15.8337 9.33102 15.9977 7.26102C16.0307 6.96702 16.0117 6.69702 15.9457 6.43602C15.8777 6.17502 15.6097 6.05302 15.3967 6.22802C14.4127 7.07502 13.2087 8.26002 13.2087 8.26002C13.1087 8.36502 12.9527 8.39302 12.8197 8.32702C12.8077 8.32163 12.7976 8.31329 12.7911 8.30302C12.7782 8.27972 12.7857 8.25102 12.8087 8.23702C12.8283 8.22547 12.8519 8.22261 12.8727 8.23002C12.8727 8.23002 15.3647 9.20802 16.5517 9.06402C17.6137 8.93602 18.0077 7.98402 17.7097 7.14502C17.1217 5.46802 14.6617 4.52502 13.6047 4.31302C13.5187 4.29802 13.4547 4.23702 13.4327 4.15302C13.4147 4.08402 13.4327 4.01302 13.4777 3.95902C13.5937 3.81902 13.7577 3.70202 13.9527 3.65102C14.5317 3.49402 15.5107 3.52102 16.0817 4.36202C16.3057 4.69702 16.2717 5.16902 15.8027 4.89402C15.4257 4.67302 15.0267 5.25002 15.4067 5.50002C15.9057 5.83202 16.5767 5.95902 16.7957 5.22502C17.0187 4.47102 16.5757 3.84702 16.1647 3.52102C15.1747 2.74402 13.8897 2.75302 12.7447 3.31202Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <img 
                            src={feature.icon} 
                            alt={feature.title} 
                            className="w-full h-full object-contain"
                          />
                        )}
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
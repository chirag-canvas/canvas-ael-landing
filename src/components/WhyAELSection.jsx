export default function WhyAELSection() {
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)";
  
  return (
    <div className="bg-black text-white flex items-center justify-center px-3 sm:px-4 md:px-8 py-6 sm:py-8 md:py-16 relative">
      <div className="w-full md:w-[95%] lg:w-[98%] bg-[#111111] rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-10 backdrop-blur-sm border border-gray-800">

      {/* Middle gradient stripe */}
      <div className="absolute top-1/3 left-1/4 right-1/4 h-1/3 opacity-20" style={{ 
        background: gradient,
        filter: 'blur(100px)'
      }}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10 py-3 sm:py-4 md:py-6">
        <div className="text-center mb-4 sm:mb-6 md:mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 py-1 sm:py-2" style={{ 
            background: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Why AEL is the future of first-party engagement?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {/* Card 1 */}
          <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden h-[140px] sm:h-auto sm:aspect-square" 
            style={{ 
              border: "2px solid transparent",
              backgroundImage: `linear-gradient(to bottom, #000, #000), ${gradient}`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box"
            }}>
            <div className="h-full w-full p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center bg-black">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-2 sm:mb-3 md:mb-4">
                <svg className="w-full h-full text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-center">First Party Data Collection & Monetization</h3>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden h-[140px] sm:h-auto sm:aspect-square" 
            style={{ 
              border: "2px solid transparent",
              backgroundImage: `linear-gradient(to bottom, #000, #000), ${gradient}`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box"
            }}>
            <div className="h-full w-full p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center bg-black">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-2 sm:mb-3 md:mb-4">
                <svg className="w-full h-full text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-center">Higher CPMs & Retention</h3>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden h-[140px] sm:h-auto sm:aspect-square" 
            style={{ 
              border: "2px solid transparent",
              backgroundImage: `linear-gradient(to bottom, #000, #000), ${gradient}`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box"
            }}>
            <div className="h-full w-full p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center bg-black">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-2 sm:mb-3 md:mb-4">
                <svg className="w-full h-full text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-center">Personalized UX</h3>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden h-[140px] sm:h-auto sm:aspect-square" 
            style={{ 
              border: "2px solid transparent",
              backgroundImage: `linear-gradient(to bottom, #000, #000), ${gradient}`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box"
            }}>
            <div className="h-full w-full p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center bg-black">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-2 sm:mb-3 md:mb-4">
                <svg className="w-full h-full text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-center">Secure & Own Your Data</h3>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
} 
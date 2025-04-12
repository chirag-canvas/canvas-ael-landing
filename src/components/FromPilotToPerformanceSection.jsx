export default function FromPilotToPerformanceSection() {
    const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)";
  
    return (
      <div className="bg-black text-white flex items-center justify-center px-3 sm:px-4 md:px-8 py-6 sm:py-8 md:py-16 relative">
        {/* <div className="w-full md:w-[95%] lg:w-[98%] bg-[#111111] rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-10 backdrop-blur-sm border border-gray-800"> */}
  
          {/* Middle background glow */}
          <div className="absolute top-1/6 left-1/4 right-1/4 h-1/2 opacity-20" style={{
            background: gradient,
            filter: 'blur(100px)'
          }}></div>
  
          <div className="container mx-auto max-w-6xl relative z-10 py-3 sm:py-4 md:py-6">
            <div className="text-center mb-4 sm:mb-6 md:mb-10">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 py-1 sm:py-2"
                style={{
                  background: gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                From Pilot to Performance
              </h2>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                {
                  title: "Align On Pilot Scope & Goals",
                  icon: "Landing page/From pilot to performance/Align on Pilot scope.svg"
                },
                {
                  title: "A/B Test, Optimize & Scale",
                  icon: "Landing page/From pilot to performance/A_B test.svg"
                },
                {
                  title: "Seamless Integration & Setup",
                  icon: "Landing page/From pilot to performance/Seamless integration.svg"
                },
                {
                  title: "Long Term Growth & Partnership",
                  icon: "Landing page/From pilot to performance/Long term growth.svg"
                }
              ].map((card, index) => (
                <div key={index} className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden h-[140px] sm:h-auto sm:aspect-square"
                  style={{
                    border: "2px solid transparent",
                    backgroundImage: `linear-gradient(to bottom, #000, #000), ${gradient}`,
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box"
                  }}>
                  <div className="h-full w-full p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center bg-black">
                    <img src={card.icon} alt="" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2 sm:mb-3 md:mb-4" />
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-center">{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
        {/* </div> */}
      </div>
    );
  }
  
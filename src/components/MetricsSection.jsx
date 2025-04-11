import { Link } from 'react-router-dom';

export default function MetricsSection() {
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)";
  
  // You can adjust these values to control your card dimensions
  const cardHeight = "h-[140px]"; // For mobile
  const cardHeightSm = "sm:h-[200px]"; // For small screens
  const cardHeightMd = "md:h-[300px] w-[90%]"; // For medium screens
  const cardWidth = "w-full"; // Full width by default (controlled by grid)
  
  const metrics = [
    {
      value: "2.9x",
      description: "User Engagements = retention & upsells"
    },
    {
      value: "5-10x",
      description: "Higher ad relevance = higher value audience"
    },
    {
      value: "10x",
      description: "Better audience segmentation = Lower acquisition cost"
    }
  ];

  return (
    <div className="bg-black text-white flex items-center justify-center px-3 sm:px-4 md:px-8 py-6 sm:py-8 md:py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6 sm:mb-10 md:mb-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 px-1">
            <span style={{ 
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              The Next Wave of Media Engagement & Monetization
            </span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-8 mr-3">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className={`rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden ${cardHeight} ${cardHeightSm} ${cardHeightMd} ${cardWidth} mx-2`}
              style={{ 
                border: "2px solid transparent",
                backgroundImage: `linear-gradient(to bottom, #000, #000), ${gradient}`,
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box"
              }}
            >
              <div className="h-full w-full p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center bg-black">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 md:mb-10 text-white">{metric.value}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 text-center">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6 sm:mt-10 md:mt-16">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 md:mb-10 text-white">Turn Unknown Visitors to Known Users</h3>
          
          <div className="flex justify-center">
            <Link 
              to="/NAB"
              className="px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-medium text-white text-sm sm:text-base inline-block"
              style={{ background: gradient }}
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
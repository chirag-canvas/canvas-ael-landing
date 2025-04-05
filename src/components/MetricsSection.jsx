export default function MetricsSection() {
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)";
  
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 md:px-8 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ 
            background: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            The Future of First-Party Engagement
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Metric 1 */}
          <div className="aspect-square rounded-2xl overflow-hidden" 
            style={{ 
              border: "2px solid transparent",
              backgroundImage: `linear-gradient(to bottom, #000, #000), ${gradient}`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box"
            }}>
            <div className="h-full w-full p-8 flex flex-col items-center justify-center bg-black">
              <h3 className="text-6xl font-bold mb-10 text-white">2.9x</h3>
              <p className="text-gray-300 text-center">User Engagements = retention & upsells</p>
            </div>
          </div>
          
          {/* Metric 2 */}
          <div className="aspect-square rounded-2xl overflow-hidden" 
            style={{ 
              border: "2px solid transparent",
              backgroundImage: `linear-gradient(to bottom, #000, #000), ${gradient}`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box"
            }}>
            <div className="h-full w-full p-8 flex flex-col items-center justify-center bg-black">
              <h3 className="text-6xl font-bold mb-10 text-white">5-10x</h3>
              <p className="text-gray-300 text-center">Higher ad relevance = higher value audience</p>
            </div>
          </div>
          
          {/* Metric 3 */}
          <div className="aspect-square rounded-2xl overflow-hidden" 
            style={{ 
              border: "2px solid transparent",
              backgroundImage: `linear-gradient(to bottom, #000, #000), ${gradient}`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box"
            }}>
            <div className="h-full w-full p-8 flex flex-col items-center justify-center bg-black">
              <h3 className="text-6xl font-bold mb-10 text-white">10x</h3>
              <p className="text-gray-300 text-center">Better audience segmentation = Lower acquisition cost</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-10 text-white">Turn Unknown Visitors to Known Users</h3>
          
          <div className="flex justify-center">
            <button 
              className="px-8 py-3 rounded-full font-medium text-white"
              style={{ background: gradient }}
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
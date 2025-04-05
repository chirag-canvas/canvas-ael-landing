export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden text-white font-montserrat">
      {/* Canvas Logo in top-left corner */}
      <div className="absolute top-10 left-20 z-50">
        <img src="/images/canvas-logo.svg" alt="Canvas Logo" className="w-16" />
      </div>
      
      {/* Glowing Gradient Center - Updated with new colors */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6cc2ff] via-[#37ffb6] to-transparent opacity-60 blur-[150px]"></div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto py-8 px-6 md:px-8 flex flex-wrap justify-between items-center relative z-10">
        <div className="flex items-center">
          {/* Removed duplicate logo here */}
        </div>
        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          <a href="#" className="font-medium">Solutions</a>
          <a href="#" className="font-medium">Pricing</a>
          <a href="#" className="font-medium text-gray-400">Resources</a>
          <a href="#" className="font-medium">FAQ</a>
          <a href="#" className="px-5 py-2 md:px-6 md:py-2.5 rounded-full font-medium text-white whitespace-nowrap" style={{ background: "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)" }}>Join For Free</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 md:px-8 py-12 md:py-20 text-center relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 max-w-4xl mx-auto py-2" style={{
          background: "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>
          Transform Insights to Loyalty & Engagement
        </h1>
        <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto">Turn user interactions into high-value data & revenue</p>
        <button className="px-6 py-3 rounded-full font-medium text-white" style={{ background: "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)" }}>
          Join For Free
        </button>

        {/* Video Area (replacing Laptop Image) */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <div className="w-[80%] h-[80%] border-2 border-dashed border-blue-400 rounded-[50%] opacity-30"></div>
          </div>
          
          <div className="relative z-10 flex justify-center">
            <div className="w-full max-w-[600px]">
              <video 
                className="w-full rounded-lg shadow-lg"
                autoPlay
                loop
                muted
                playsInline
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.height = '300px';
                  e.target.style.background = '#000';
                  e.target.style.border = '2px solid #333';
                  e.target.style.borderRadius = '8px';
                }}
              >
                <source src="/videos/lion-king.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
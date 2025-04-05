import { useState, useEffect, useRef } from 'react';

export default function StrategySection() {
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)";
  const [activeFeature, setActiveFeature] = useState(0);
  const videoRef = useRef(null);
  
  const features = [
    {
      title: "Data Activation Points",
      desc: "(Forms, Polls, Promo Code)",
      videoSrc: "/Landing page/AEL Built for Strategy/Data Capture Points.mp4", // Fixed video path
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
    },
    {
      title: "Engagement Signals",
      desc: "(Icons, Quizzes, Feedback)",
      videoSrc: "/Landing page/AEL Built for Strategy/Engagement Signals.mp4", // Fixed video path
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      ),
    },
    {
      title: "Revenue Amplifiers",
      desc: "(Payments, Donation, Ad Free Access)",
      videoSrc: "/Landing page/AEL Built for Strategy/Revenue Amplifiers.mp4", // Fixed video path
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "AEL Suite",
      desc: "(All-in-one customizable\nAdaptive Engagement Layer)",
      videoSrc: "/Landing page/AEL Built for Strategy/AEL Suite.mp4", // Fixed video path
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
  ];

  // Auto switch features every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  // Change video when active feature changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = features[activeFeature].videoSrc;
      videoRef.current.load();
      videoRef.current.play().catch(err => console.log('Video autoplay failed:', err));
    }
  }, [activeFeature]);

  return (
    <div className="relative bg-black text-white px-4 md:px-8 py-20 overflow-hidden">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 flex justify-center items-start z-0">
        <div className="w-[400px] h-[200px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6cc2ff] via-[#37ffb6] to-transparent opacity-60 blur-[150px]"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Title Section - Fixed visibility */}
        <div className="text-center mb-16">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "block", // Ensure visibility
            }}
          >
            AEL Built for Strategy & Scale
          </h1>
          <p className="text-xl text-gray-200">
            Turn Passive Viewers to Actionable Data
          </p>
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-8">
          {/* Features */}
          <div className="w-full md:w-[45%] space-y-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={`flex items-start space-x-5 cursor-pointer transition-all duration-300 ${activeFeature === idx ? 'scale-105' : 'opacity-80 hover:opacity-100'}`}
                onClick={() => setActiveFeature(idx)}
              >
                <div className="relative">
                  {activeFeature === idx && (
                    <div
                      className="w-1 h-20 absolute -left-3 top-0"
                      style={{ background: gradient }}
                    ></div>
                  )}
                  <div className={`w-14 h-14 rounded-full border-2 ${activeFeature === idx ? 'border-white' : 'border-gray-400'} flex items-center justify-center bg-black transition-all duration-300`}>
                    <svg
                      className={`w-7 h-7 ${activeFeature === idx ? 'text-white' : 'text-gray-400'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-1 ${activeFeature === idx ? 'text-white' : 'text-gray-300'}`}>
                    {feature.title}
                  </h3>
                  <p className={`${activeFeature === idx ? 'text-gray-200' : 'text-gray-400'} whitespace-pre-line`}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Card Stack - Fixed dimensions to match video width */}
          <div className="w-full md:w-[55%] h-[450px] relative flex justify-center md:justify-start">
            <div className="relative w-full h-full perspective">
              {/* Background cards - Adjusted dimensions */}
              <div className="absolute right-0 top-0 w-[80%] h-[85%] bg-[#2f2f2f] rounded-2xl shadow-lg transform translate-x-20 translate-y-20 scale-[0.97] transition-all duration-700"></div>
              <div className="absolute right-0 top-0 w-[80%] h-[85%] bg-[#3d3d3d] rounded-2xl shadow-lg transform translate-x-10 translate-y-10 scale-[0.985] transition-all duration-700"></div>
              
              {/* Main video card - Fixed dimensions */}
              <div className="absolute right-0 top-0 w-[80%] h-[85%] bg-[#4a4a4a] rounded-2xl shadow-xl z-10 overflow-hidden transition-all duration-500 transform-gpu hover:scale-[1.02]">
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                  loop
                >
                  <source src={features[activeFeature].videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay with feature name */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold">{features[activeFeature].title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <button
            className="px-8 py-3 rounded-full font-medium text-white"
            style={{ background: gradient }}
          >
            Join For Free
          </button>
        </div>
      </div>
    </div>
  );
}
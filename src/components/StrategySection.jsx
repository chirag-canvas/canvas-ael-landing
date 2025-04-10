import { useState, useRef, useEffect } from 'react';
import { useForm } from '../contexts/FormContext';

export default function StrategySection() {
  const [isAELPlus, setIsAELPlus] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);
  const { openForm } = useForm();
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)";

  const features = {
    ael: [
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: "Micro Unlocks",
        description: "Grow revenues with micropayments",
        video: "/Landing page/AEL Built for Strategy/Data Capture Points.mp4"
      },
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: "Smart Upselling",
        description: "Transform curiosity peaks to upsell opportunities",
        video: "/Landing page/AEL Built for Strategy/Engagement Signals.mp4"
      }
    ],
    aelPlus: [
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: "Trust-Based Insights",
        description: "Invite participation with forms, polls & codes",
        video: "/Landing page/AEL Built for Strategy/Revenue Amplifiers.mp4"
      },
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: "Engagement Intelligence",
        description: "Enhance retention with quizzes & feedback",
        video: "/Landing page/AEL Built for Strategy/AEL Suite.mp4"
      }
    ]
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [isAELPlus]);

  useEffect(() => {
    const currentFeatures = isAELPlus ? features.aelPlus : features.ael;
    if (videoRef.current && currentFeatures[activeIndex]) {
      videoRef.current.src = currentFeatures[activeIndex].video;
      videoRef.current.load();
      videoRef.current.play().catch(err => console.log('Video autoplay failed:', err));
    }
  }, [activeIndex, isAELPlus]);

  return (
    <div className="relative bg-black text-white min-h-screen px-4 py-12 overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 opacity-20" style={{ 
        background: 'radial-gradient(circle at 70% 30%, rgba(54, 134, 149, 0.3), transparent 60%), radial-gradient(circle at 30% 70%, rgba(110, 195, 119, 0.3), transparent 60%)'
      }}></div>

      {/* Center radial gradient */}
      <div className="absolute left-1/2 top-1/5 transform -translate-x-1/2 -translate-y-1/2 w-[80px] sm:w-[120px] md:w-[180px] lg:w-[250px] h-[100px] sm:h-[150px] md:h-[250px] lg:h-[350px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6cc2ff] via-[#37ffb6] to-transparent opacity-40 blur-[60px] sm:blur-[80px] md:blur-[120px] lg:blur-[150px]"></div>

      
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-clip-text text-transparent" style={{
            backgroundImage: gradient
          }}>
            Contextual Interactions to Drive Engagement & Grow Revenues
          </span>
        </h1>
        <p className="text-lg text-white mb-8">
          Enhance Retention & Monetize Attention with AEL & AEL+
        </p>

        <div className="flex items-center justify-center gap-3">
          <span className={`text-xl font-bold ${!isAELPlus ? 'text-white' : 'text-gray-400'}`}>AEL</span>
          <button 
            onClick={() => setIsAELPlus(!isAELPlus)}
            className="relative w-12 h-6 rounded-full bg-gray-700 transition-colors duration-200"
          >
            <div className={`absolute w-4 h-4 rounded-full bg-white top-1 transition-transform duration-200 ${
              isAELPlus ? 'translate-x-7' : 'translate-x-1'
            }`}></div>
          </button>
          <span className={`text-xl font-bold ${isAELPlus ? 'text-white' : 'text-gray-400'}`}>AEL+</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-1/2 space-y-8">
          {(isAELPlus ? features.aelPlus : features.ael).map((feature, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-4 cursor-pointer transition-all duration-300 hover:scale-105 ${activeIndex === index ? 'scale-105' : 'opacity-80'}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative">
                {activeIndex === index && (
                  <div className="absolute -left-3 top-0 w-1 h-16 bg-gradient-to-b from-[#F7901E] to-[#6EC377]"></div>
                )}
                <div className={`w-14 h-14 rounded-full border ${activeIndex === index ? 'border-white' : 'border-gray-600'} flex items-center justify-center bg-black/50`}>
                  <div className={`${activeIndex === index ? 'text-white' : 'text-gray-400'}`}>
                    {feature.icon}
                  </div>
                </div>
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${activeIndex === index ? 'text-white' : 'text-gray-300'}`}>
                  {feature.title}
                </h3>
                <p className={`text-base ${activeIndex === index ? 'text-gray-200' : 'text-gray-400'}`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 relative aspect-[4/3]">
          <div className="absolute inset-0">
            <div className="absolute right-0 top-0 w-[85%] h-[85%] bg-gray-800 rounded-lg transform translate-x-10 translate-y-10"></div>
            <div className="absolute right-0 top-0 w-[85%] h-[85%] bg-gray-700 rounded-lg transform translate-x-5 translate-y-5"></div>
            <div className="absolute right-0 top-0 w-[85%] h-[85%] bg-gray-600 rounded-lg overflow-hidden">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                playsInline
                muted
                loop
              >
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={openForm}
          className="px-6 py-2.5 rounded-full text-white text-md font-medium transition-transform hover:scale-105"
          style={{ background: gradient }}
        >
          Request Demo
        </button>
      </div>
    </div>
  );
}
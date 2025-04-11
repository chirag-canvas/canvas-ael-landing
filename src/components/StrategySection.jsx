import { useState, useRef, useEffect } from 'react';
import { useForm } from '../contexts/FormContext';
import { Link } from 'react-router-dom';

export default function StrategySection() {
  const [isAELPlus, setIsAELPlus] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);
  const { openForm } = useForm();
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)";

  const features = {
    aelPlus: [
      {
        icon: "/Landing page/Contextual interactions/Micro Unlocks.svg",
        title: "Micro Unlocks",
        description: "Grow revenues with micropayments",
        video: "/Landing page/Contextual interactions/Micro unlocks.mp4"
      },
      {
        icon: "/Landing page/Contextual interactions/Smart Upselling.svg",
        title: "Smart Upselling",
        description: "Transform curiosity peaks to upsell opportunities",
        video: "/Landing page/Contextual interactions/Smart upselling.mp4"
      }
    ],
    ael: [
      {
        icon: "/Landing page/Contextual interactions/Trust based insights.svg",
        title: "Trust-Based Insights",
        description: "Invite participation with forms, polls & codes",
        video: "/Landing page/Contextual interactions/Trust-Based Insights.mp4"
      },
      {
        icon: "/Landing page/Contextual interactions/Engagment intelligence.svg",
        title: "Engagement Intelligence",
        description: "Enhance retention with quizzes & feedback",
        video: "/Landing page/Contextual interactions/Engagement Intelligence.mp4"
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
    <div className="relative bg-black text-white px-4 pt-12 pb-10 overflow-hidden">
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
            className="relative w-12 h-6 rounded-full bg-gray-800 transition-all duration-300 overflow-hidden"
            style={{
              boxShadow: isAELPlus ? 
                '0 0 10px rgba(110, 195, 119, 0.5), 0 0 20px rgba(80, 143, 161, 0.3)' : 
                '0 0 10px rgba(247, 144, 30, 0.5), 0 0 20px rgba(235, 197, 84, 0.3)'
            }}
          >
            <div 
              className="absolute inset-0 opacity-50"
              style={{
                background: gradient,
                filter: 'blur(8px)'
              }}
            ></div>
            <div className={`absolute w-4 h-4 rounded-full bg-white top-1 transition-transform duration-300 z-10 ${
              isAELPlus ? 'translate-x-7' : 'translate-x-1'
            }`}
            style={{
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
            }}
            ></div>
          </button>
          <span className={`text-xl font-bold ${isAELPlus ? 'text-white' : 'text-gray-400'}`}>AEL+</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="w-full md:w-1/2 space-y-8 mt-10">
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
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className={`w-12 h-12 transition-all duration-300 ${activeIndex === index ? 'opacity-100 scale-110' : 'opacity-70 hover:opacity-100'}`}
                  style={{
                    filter: activeIndex === index ? 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' : 'none'
                  }}
                />
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

        <div className="w-full md:w-1/2 relative aspect-video">
          <div className="absolute inset-0">
            <div className="absolute right-0 top-0 w-[95%] h-[95%] bg-gray-800 rounded-lg transform translate-x-12 translate-y-12"></div>
            <div className="absolute right-0 top-0 w-[95%] h-[95%] bg-gray-700 rounded-lg transform translate-x-6 translate-y-6"></div>
            <div className="absolute right-0 top-0 w-[95%] h-[95%] bg-gray-600 rounded-lg overflow-hidden">
              <video 
                ref={videoRef}
                className="w-full h-full object-contain bg-black"
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

      <div className="flex justify-center mt-16">
        <Link
          to="/NAB"
          className="px-6 py-2.5 rounded-full text-white text-md font-medium transition-transform hover:scale-105 inline-block"
          style={{ background: gradient }}
        >
          Request Demo
        </Link>
      </div>
    </div>
  );
}
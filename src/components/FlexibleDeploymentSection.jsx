import { useState, useEffect } from 'react';

export default function FlexibleDeploymentSection() {
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)";
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Auto switch slides every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => prev === 0 ? 1 : 0);
    }, 7000);

    return () => clearInterval(interval);
  }, []);
  
  const firstSetFeatures = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.8 3.9L8.1 7.7C7.9 7.9 8 8.3 8.3 8.4L13.4 10.5C13.7 10.6 13.9 10.8 13.9 11V20.2C13.9 20.5 14.2 20.7 14.5 20.5L16.9 19.2C17 19.1 17.1 19 17.1 18.8V11.6C17.1 11.4 17 11.2 16.9 11.1L10.9 3.8C10.9 3.7 10.8 3.7 10.8 3.9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.3 8.5C3.9 10.7 2.4 14 2.4 17.5C2.4 18.7 2.6 19.9 2.9 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.6 11C19.8 13.1 21.2 16.1 21.2 19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "High Customization"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Data Security"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 12H15.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15.5V8.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Control"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Fast"
    }
  ];

  const secondSetFeatures = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Faster Setup"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Lower Cost"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Scalability"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 md:px-8 py-12 relative">
      {/* Background gradient effect */}
      <div className="w-[95%] lg:w-[98%] bg-gray-900/60 rounded-3xl p-6 md:p-10 backdrop-blur-sm border border-gray-800">
        <div className="absolute inset-0 opacity-20" style={{ 
          background: 'radial-gradient(circle at 70% 50%, rgba(54, 134, 149, 0.3), transparent 60%), radial-gradient(circle at 30% 50%, rgba(110, 195, 119, 0.3), transparent 60%)'
        }}></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 p-1" style={{ 
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Flexible Deployment For Every Need
            </h2>
          </div>

          <div className="relative min-h-[400px]">
            {/* First Set of Features */}
            <div className={`transition-opacity duration-500 ${activeSlide === 0 ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {firstSetFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="aspect-square rounded-3xl p-1 overflow-hidden"
                    style={{ 
                      background: gradient
                    }}
                  >
                    <div className="h-full w-full bg-black rounded-3xl flex flex-col items-center justify-center p-8">
                      <div className="mb-8">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Set of Features */}
            <div className={`transition-opacity duration-500 ${activeSlide === 1 ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {secondSetFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="aspect-square rounded-3xl p-1 overflow-hidden h-[250px] md:h-[300px]"
                    style={{ 
                      background: gradient
                    }}
                  >
                    <div className="h-full w-full bg-black rounded-3xl flex flex-col items-center justify-center p-8">
                      <div className="mb-8">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-10 space-x-2">
            {[0, 1].map((dot) => (
              <button
                key={dot}
                onClick={() => setActiveSlide(dot)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeSlide === dot ? 'bg-orange-500 ring-2 ring-orange-300' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
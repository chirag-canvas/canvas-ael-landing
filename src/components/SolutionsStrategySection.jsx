import { useState } from 'react';

export default function SolutionsStrategySection() {
  const [activeSection, setActiveSection] = useState(0);
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)";

  const sections = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Data Capture Points",
      features: [
        { title: "Forms", description: "Capture Audience Insights" },
        { title: "Promo Codes", description: "Showcase Teasers and Engage" },
        { title: "Polls", description: "Anchor Audience Interests" }
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Engagement Signals",
      features: [
        { title: "Icons", description: "Analyze Audience Interactions" },
        { title: "Feedbacks", description: "Decode Customer Preferences" },
        { title: "Quizes", description: "Anchor Audience Interests" }
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Revenue Amplifiers",
      features: [
        { title: "Payments", description: "Tease & Monetize" },
        { title: "Donations", description: "Monetize & Spread Smiles" },
        { title: "Ad Free Access", description: "Improved CPMs" }
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "AEL Suite",
      features: [
        { title: "AEL Suite", description: "Multiple Engagements, Endless Possibilities" }
      ]
    }
  ];

  return (
    <div className="relative bg-black text-white min-h-screen px-4 py-12 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          <span className="bg-clip-text text-transparent" style={{
            backgroundImage: gradient
          }}>
            Boost Engagement. Reduce CAC. Fuel Growth.
          </span>
        </h1>
        <p className="text-xl text-white">First-Party Data & Monetization at Scale</p>
      </div>

      {/* Navigation Icons */}
      <div className="flex justify-center gap-16 mb-16">
        {sections.map((section, index) => (
          <div 
            key={index}
            className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
              activeSection === index ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'
            }`}
            onClick={() => setActiveSection(index)}
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
              activeSection === index ? 'bg-black border-2 border-white' : 'bg-black/50'
            }`}>
              {section.icon}
            </div>
            <p className="text-sm text-center">{section.title}</p>
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex justify-between items-start max-w-6xl mx-auto">
        {/* Left side - Features */}
        <div className="w-1/2 space-y-8">
          {sections[activeSection].features.map((feature, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="w-full sm:w-[80%] md:w-[55%] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] relative flex justify-center md:justify-start order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative w-full h-full perspective">
              {/* Background cards - Responsive dimensions */}
              <div className="absolute right-0 top-0 w-[80%] h-[85%] bg-[#2f2f2f] rounded-xl sm:rounded-2xl shadow-lg transform translate-x-12 sm:translate-x-16 md:translate-x-20 translate-y-12 sm:translate-y-16 md:translate-y-20 scale-[0.97] transition-all duration-700"></div>
              <div className="absolute right-0 top-0 w-[80%] h-[85%] bg-[#3d3d3d] rounded-xl sm:rounded-2xl shadow-lg transform translate-x-6 sm:translate-x-8 md:translate-x-10 translate-y-6 sm:translate-y-8 md:translate-y-10 scale-[0.985] transition-all duration-700"></div>
              
              {/* Main video card */}
              <div className="absolute right-0 top-0 w-[80%] h-[85%] bg-[#4a4a4a] rounded-xl sm:rounded-2xl shadow-xl z-10 overflow-hidden transition-all duration-500 transform-gpu hover:scale-[1.02]">
                {/* <video 
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                  loop
                >
                  <source src={features[activeFeature].videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
                
                {/* Overlay with feature name */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 sm:p-3 md:p-4">
                  {/* <h3 className="text-sm sm:text-base md:text-xl font-bold">{features[activeFeature].title}</h3> */}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
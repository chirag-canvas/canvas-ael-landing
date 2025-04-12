import { useState } from 'react';

export default function SolutionsStrategySection() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const gradient =
    'linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)';

  const sections = [
    {
      icon: 'Landing page/boost/Trust based insights.svg',
      title: 'Trust Based Insights',
      features: [
        {
          title: 'Forms',
          description: 'Capture Audience Insights',
          video: 'Landing page/boost/Form.mp4',
        },
        {
          title: 'Promo Codes',
          description: 'Showcase Teasers and Engage',
          video: 'Landing page/boost/Promocode.mp4',
        },
        {
          title: 'Polls',
          description: 'Anchor Audience Interests',
          video: 'Landing page/boost/Poll.mp4',
        },
      ],
    },
    {
      icon: 'Landing page/boost/Engagment intelligence.svg',
      title: 'Engagement Signals',
      features: [
        {
          title: 'Icons',
          description: 'Analyze Audience Interactions',
          video: 'Landing page/boost/Icon.mp4',
        },
        {
          title: 'Feedbacks',
          description: 'Decode Customer Preferences',
          video: 'Landing page/boost/Feedback.mp4',
        },
        {
          title: 'Quizes',
          description: 'Anchor Audience Interests',
          video: 'Landing page/boost/Quiz.mp4',
        },
      ],
    },
  ];

  const activeSectionData = sections[activeSection];
  const activeFeature = activeSectionData.features[activeFeatureIndex];

  return (
    <div className="relative bg-black text-white min-h-screen px-4 py-12 overflow-hidden">
      {/* === Gradient + Blur Background Effects === */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-[#6cc2ff] opacity-40 blur-[150px]"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#37ffb6] opacity-40 blur-[150px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute inset-0 border-[50px] border-black opacity-20 blur-[80px]"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16 z-10 relative">
        <h1 className="text-4xl font-bold mb-4">
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: gradient }}
          >
            Boost Engagement. Reduce CAC. Fuel Growth.
          </span>
        </h1>
        <p className="text-[1.8rem] font-bold text-white">Contextual First-Party Data & Monetization at Scale</p>
      </div>

      {/* Navigation Icons */}
      <div className="flex justify-center gap-16 mb-16 z-10 relative">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
              activeSection === index ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'
            }`}
            onClick={() => {
              setActiveSection(index);
              setActiveFeatureIndex(0);
            }}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 bg-black border-2 border-white p-1`}
              style={{ backgroundImage: gradient }}
            >
              <img
                src={section.icon}
                alt={section.title}
                className="w-full h-full rounded-full object-contain bg-black p-1"
              />
            </div>
            <p className="text-sm text-center">{section.title}</p>
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto gap-8 z-10 relative">
        {/* Left side - Features List */}
        <div className="w-full md:w-1/2 space-y-6">
          {activeSectionData.features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveFeatureIndex(index)}
              className={`cursor-pointer p-4 rounded-md transition-all duration-300 relative group hover:bg-white/5`}
            >
              {activeFeatureIndex === index && (
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded bg-gradient-to-b from-yellow-400 via-green-400 to-blue-500"
                ></div>
              )}
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Right side - Video Card */}
        <div className="w-full sm:w-[80%] md:w-[55%] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] relative flex justify-center md:justify-start order-1 md:order-2 mb-8 md:mb-0">
          <div className="relative w-full h-full perspective">
            {/* Background cards */}
            <div className="absolute right-0 top-0 w-[90%] h-[75%] bg-[#2f2f2f] rounded-xl sm:rounded-2xl shadow-lg transform translate-x-12 sm:translate-x-16 md:translate-x-20 translate-y-12 sm:translate-y-16 md:translate-y-20 scale-[0.97] transition-all duration-700"></div>
            <div className="absolute right-0 top-0 w-[90%] h-[75%] bg-[#3d3d3d] rounded-xl sm:rounded-2xl shadow-lg transform translate-x-6 sm:translate-x-8 md:translate-x-10 translate-y-6 sm:translate-y-8 md:translate-y-10 scale-[0.985] transition-all duration-700"></div>

            {/* Main video card */}
            <div className="absolute right-0 top-0 w-[95%] h-[75%] bg-[#4a4a4a] rounded-xl sm:rounded-2xl shadow-xl z-10 overflow-hidden transition-all duration-500 transform-gpu hover:scale-[1.02]">
              <video
                key={activeFeature.video} // Ensures video reloads on change
                className="w-full h-full object-cover"
                src={activeFeature.video}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-lg sm:text-xl font-bold">{activeFeature.title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

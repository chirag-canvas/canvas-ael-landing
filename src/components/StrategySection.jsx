export default function StrategySection() {
  const gradient = "linear-gradient(120deg, rgb(247, 144, 30) 10%, rgb(235, 197, 84) 24%, rgb(110, 195, 119) 37%, rgb(80, 159, 161) 55.94%, rgb(54, 134, 149) 70.62%, rgb(49, 52, 142) 100%)";

  return (
    <div className="relative bg-black text-white px-4 md:px-8 py-20 overflow-hidden">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 flex justify-center items-start z-0">
        <div className="w-[400px] h-[200px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6cc2ff] via-[#37ffb6] to-transparent opacity-60 blur-[150px]"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AEL Built for Strategy & Scale
          </h1>
          <p className="text-xl text-gray-200">
            Turn Passive Viewers to Actionable Data
          </p>
        </div>

        {/* Content Container - Bringing points and cards closer */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-8">
          {/* Features */}
          <div className="w-full md:w-[45%] space-y-8">
            {[
              {
                title: "Data Activation Points",
                desc: "(Forms, Polls, Promo Code)",
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
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-5">
                {idx === 0 ? (
                  <div className="relative">
                    <div
                      className="w-1 h-20 absolute -left-3 top-0"
                      style={{ background: gradient }}
                    ></div>
                    <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center bg-black">
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {feature.icon}
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center bg-black">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold mb-1">{feature.title}</h3>
                  <p className="text-gray-400 whitespace-pre-line">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Card Stack - Adjusted size and position */}
          {/* Card Stack */}
          <div className="w-full md:w-[50%] h-[400px] relative flex justify-center md:justify-start">
            <div className="relative w-[90%] md:w-[85%] h-full">
              <div className="absolute right-20 bottom-25 w-[62%] h-[85%] bg-[#2f2f2f] rounded-2xl shadow-lg transform translate-x-20 translate-y-20 scale-[0.97]"></div>
              <div className="absolute right-20 bottom-25 w-[62%] h-[85%] bg-[#3d3d3d] rounded-2xl shadow-lg transform translate-x-10 translate-y-10 scale-[0.985]"></div>
              <div className="absolute right-20 bottom-25 w-[62%] h-[85%] bg-[#4a4a4a] rounded-2xl shadow-xl z-10"></div>
            </div>
          </div>
        </div>

        {/* CTA - Positioned higher */}
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

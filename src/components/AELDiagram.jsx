import { useState, useEffect } from 'react';

export default function AELDiagram() {
  const [windowWidth, setWindowWidth] = useState(800);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const isMobile = windowWidth < 768;
  const baseSize = isMobile ? 300 : 400;
  
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center">
        <span className="bg-clip-text text-transparent" style={{
          backgroundImage: "linear-gradient(120deg, rgb(247,144,30) 10%, rgb(235,197,84) 24%, rgb(110,195,119) 37%, rgb(80,159,161) 55.94%, rgb(54,134,149) 70.62%, rgb(49,52,142) 100%)"
        }}>
          AEL : A Modular System for First-Party Data & Monetization
        </span>
      </h1>
      
      <h2 className="text-xl md:text-3xl mb-12 text-center text-white">Better Workflow, Better Results</h2>

      <svg className="w-full h-full" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="circleGradient" gradientTransform="rotate(120)">
            <stop offset="10%" stopColor="rgb(247, 144, 30)" />
            <stop offset="24%" stopColor="rgb(235, 197, 84)" />
            <stop offset="37%" stopColor="rgb(110, 195, 119)" />
            <stop offset="55.94%" stopColor="rgb(80, 159, 161)" />
            <stop offset="70.62%" stopColor="rgb(54, 134, 149)" />
            <stop offset="100%" stopColor="rgb(49, 52, 142)" />
          </linearGradient>
        </defs>

        {/* Main circle */}
        <g transform="translate(200, 200)">
          <circle
            r="120"
            fill="none"
            stroke="url(#circleGradient)"
            strokeWidth="2"
          />
        </g>

        {/* Center Text */}
        <g transform="translate(200, 200)">
          <text 
            textAnchor="middle" 
            dominantBaseline="middle"
            className="text-4xl font-bold"
          >
            <tspan x="0" y="0">
              <tspan fill="rgb(247, 144, 30)">Canvas </tspan>
              <tspan fill="rgb(80, 159, 161)">AEL</tspan>
            </tspan>
          </text>
        </g>
      </svg>
    </div>
  );
}
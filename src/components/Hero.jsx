import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0f172a] font-sans flex items-center justify-center">
      <style>{`
        .text-stroke {
          -webkit-text-stroke: 1px white;
          color: transparent;
        }
        
        /* Mobile ke liye stroke thora patla */
        @media (max-width: 768px) {
          .text-stroke {
            -webkit-text-stroke: 0.5px white;
          }
        }

        .animate-wave-fill {
          animation: waveAnimate 4s ease-in-out infinite;
        }

        @keyframes waveAnimate {
          0%, 100% {
            clip-path: polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
          }
          50% {
            clip-path: polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
          }
        }
      `}</style>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/60"></div>
      </div>
      <div className="relative z-10 w-full px-4 md:px-12 flex flex-col justify-center h-full">
        <div className="flex items-center gap-3 mb-2 md:mb-6 animate-fadeIn">
          <span className="w-8 md:w-12 h-[2px] bg-orange-500"></span>
          <span className="text-gray-300 font-bold uppercase tracking-widest text-[10px] md:text-sm">
            Professional Construction Services
          </span>
        </div>
        <div className="relative w-full max-w-[1400px]">
          <h1 className="absolute -top-6 md:-top-16 left-0 text-[13vw] md:text-[150px] font-black leading-none text-[#7c2d12] opacity-50 select-none z-0 tracking-tighter w-full">
            ADVANCED
          </h1>
          <div className="relative z-10 mt-6 md:mt-10 ml-2 md:ml-20">
            <div className="relative inline-block">
              <h1 className="text-stroke text-[11vw] md:text-[120px] font-black leading-none absolute top-0 left-0 z-20 pointer-events-none">
                CONSTRUCTION
              </h1>
              <h1 className="text-[#ff5f13] text-[11vw] md:text-[120px] font-black leading-none relative z-10 animate-wave-fill">
                CONSTRUCTION
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-24 ml-2 md:ml-20 max-w-2xl">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="w-6 h-[2px] bg-orange-500"></span>
            <span className="text-white font-bold uppercase text-xs tracking-widest">Our Services</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 md:py-4 px-8 md:px-10 uppercase text-sm tracking-wider transition-all shadow-lg shadow-orange-500/20">
              Contact Now
            </button>
            <button className="border border-gray-500 hover:border-white text-gray-300 hover:text-white font-bold py-3 md:py-4 px-8 md:px-10 uppercase text-sm tracking-wider transition-all">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
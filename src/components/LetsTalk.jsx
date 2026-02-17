import React, { useEffect, useRef, useState } from "react";

const LetsTalk = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const stats = [
    { number: "34", label: "MACHINERY", sub: "Tools" },
    { number: "76", label: "MACHINERY", sub: "Tools" },
    { number: "08", label: "MACHINERY", sub: "Tools" },
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative pt-24 pb-0 bg-[#001d3d] overflow-hidden transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
    >
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      ></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center mb-20 px-6">
        <h2
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[12vw] md:text-[140px] font-black uppercase tracking-wide w-full select-none opacity-10 whitespace-nowrap pointer-events-none"
          style={{
            WebkitTextStroke: "2px white",
            color: "transparent"
          }}
        >
          Let's Chat
        </h2>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 relative z-10">
          Let's Talk With Us
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto font-medium relative z-10">
          Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.
        </p>
        <button className="relative z-10 bg-white text-[#001d3d] hover:bg-[#ff5f13] hover:text-white font-bold py-4 px-10 uppercase text-sm tracking-[0.15em] transition-all duration-300 shadow-xl rounded-sm">
          Contact Us
        </button>
      </div>
      <div className="w-full bg-[#ff5f13] relative z-20">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)",
            backgroundSize: "8px 8px"
          }}
        ></div>
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-orange-600/30">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <span className="text-white text-xs md:text-sm uppercase tracking-widest font-medium mb-1 opacity-90">
                  {item.label}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-white text-5xl md:text-6xl font-black">
                    {item.number}
                  </span>
                  <span className="text-white text-2xl md:text-3xl font-medium">
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
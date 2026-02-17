import React, { useEffect, useRef, useState } from "react";
import AboutImage from "../assets/safe_in.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-6 md:px-12 bg-white overflow-hidden transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
        }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <h2 className="absolute -top-10 left-0 text-6xl md:text-8xl font-black text-gray-100 uppercase tracking-tighter -z-10 select-none">
            About Us
          </h2>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a242f] uppercase tracking-tight mb-8">
            Who We Are
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
            Mollit anim laborum duis au dolor in voluptate velit ess cillum dolore eu lore dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.
          </p>
          <p className="text-gray-500 leading-relaxed mb-10 text-sm md:text-base">
            Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.
          </p>
          <button className="bg-[#ff5f13] hover:bg-orange-600 text-white font-bold py-4 px-10 uppercase text-sm tracking-widest transition-all shadow-lg">
            Read More
          </button>
        </div>
        <div className="relative w-full h-[500px] md:h-[600px]">
          <img
            src={AboutImage}
            alt="Construction Worker"
            className="w-full h-full object-cover shadow-xl"
          />
          <div className="absolute bottom-0 left-0 bg-[#1e2a38] p-8 md:p-10 flex flex-col items-center justify-center text-white shadow-2xl">
            <span className="text-4xl md:text-5xl font-black block leading-none">1994</span>
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] mt-2 text-gray-400">Since</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
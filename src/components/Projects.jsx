import React, { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import Pro1 from "../assets/projects_1.png";
import Pro2 from "../assets/projects_2.png";
import Pro3 from "../assets/projects_3.png";
import Pro4 from "../assets/projects_4.png";
import Pro5 from "../assets/projects_5.png";
import Pro6 from "../assets/projects_6.png";

const servicesData = [
  {
    id: 1,
    title: "Floride Chemicals",
    category: "Factory",
    image: Pro1,
  },
  {
    id: 2,
    title: "Industrial Complex",
    category: "Construction",
    image: Pro2,
  },
  {
    id: 3,
    title: "Power Plant",
    category: "Engineering",
    image: Pro3,
  },
  {
    id: 4,
    title: "Residential Complex",
    category: "Construction",
    image: Pro4,
  },
  {
    id: 5,
    title: "Commercial Complex",
    category: "Construction",
    image: Pro5,
  },
  {
    id: 6,
    title: "Infrastructure Project",
    category: "Engineering",
    image: Pro6,
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-6 md:px-12 bg-white transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
        <div>
          <h2 className="absolute -top-8 left-0 text-6xl md:text-8xl font-black text-gray-100 uppercase tracking-tighter -z-10 select-none">
            Projects
          </h2>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a242f] uppercase tracking-tight">
            Our Recent Projects
          </h2>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 uppercase text-sm tracking-wider rounded-sm transition-all shadow-md">
          View All Projects
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div key={service.id} className="group relative shadow-xl bg-white overflow-hidden">
            <div className="h-[300px] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative bg-[#1e2a38] p-8 flex flex-col justify-center min-h-[180px]">
              <h3 className="text-white text-2xl font-bold mb-2 uppercase leading-tight">
                {service.title}
              </h3>
              <span className="text-blue-300 text-sm uppercase tracking-widest font-semibold">
                {service.category}
              </span>
              <div className="absolute bottom-0 right-0 w-14 h-14 bg-orange-500 flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                <Plus className="text-white" size={28} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
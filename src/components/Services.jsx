import React from "react";
import { Plus } from "lucide-react";
import ServiceImg1 from "../assets/services_1.png";
import ServiceImg2 from "../assets/services_2.png";
import ServiceImg3 from "../assets/services_3.png";

const servicesData = [
  {
    id: 1,
    title: "Engineering techniques & implementation",
    image: ServiceImg1,
    description: "Engineering techniques & implementation"
  },
  {
    id: 2,
    title: "Engineering techniques & implementation",
    image: ServiceImg2,
    description: "Engineering techniques & implementation"
  },
  {
    id: 3,
    title: "Engineering techniques & implementation",
    image: ServiceImg3,
    description: "Engineering techniques & implementation"
  }
];

const Services = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white font-sans relative overflow-hidden">
      <div className="mb-16 relative z-10">
        <h2 className="absolute -top-6 left-0 text-6xl md:text-8xl font-black text-gray-100 uppercase tracking-tighter -z-10 select-none opacity-50">
          Services
        </h2>
        <h2 className="text-4xl md:text-5xl font-black text-[#1a242f] uppercase tracking-tight">
          Our Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div key={service.id} className="group cursor-pointer bg-white transition-all duration-300">
            <div className="overflow-hidden w-full h-64 relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="pt-8 pb-4 relative">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a242f] mb-6 group-hover:text-orange-500 transition-colors duration-300 pr-4 leading-tight">
                {service.title}
              </h3>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-gray-800 uppercase group-hover:text-orange-500 transition-colors">
                  Read More
                </span>
                <div className="w-10 h-10 flex items-center justify-center bg-transparent group-hover:bg-orange-500 transition-all duration-300">
                  <Plus size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-100 mt-6">
                <div className="w-0 h-full bg-orange-500 group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
import React, { useEffect, useRef, useState } from "react";
import Member1 from "../assets/team_1.png";
import Member2 from "../assets/team_2.png";
import Member3 from "../assets/team_3.png";

const teamData = [
  {
    id: 1,
    name: "Ethan Welch",
    role: "UX Designer",
    image: Member1,
  },
  {
    id: 2,
    name: "Ethan Welch",
    role: "Civil Engineer",
    image: Member2,
  },
  {
    id: 3,
    name: "Ethan Welch",
    role: "Architect",
    image: Member3,
  },
];

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      <div className="mb-16 relative">
        <h2 className="absolute -top-6 left-0 text-6xl md:text-8xl font-black text-gray-100 uppercase tracking-tighter -z-10 select-none">
          Experts
        </h2>
        <h2 className="text-4xl md:text-5xl font-black text-[#1a242f] uppercase tracking-tight">
          Our Team
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamData.map((member) => (
          <div key={member.id} className="group cursor-pointer">
            <div className="overflow-hidden h-[400px] w-full mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[3px] bg-[#ff5f13]"></span>
                <span className="text-[#ff5f13] font-bold uppercase text-xs tracking-widest">
                  {member.role}
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#1a242f] uppercase tracking-tight group-hover:text-[#ff5f13] transition-colors">
                {member.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
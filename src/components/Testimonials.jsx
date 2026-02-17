import React, { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const Testimonial = () => {
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

    return (
        <section
            ref={sectionRef}
            className={`relative py-24 bg-[#001d3d] overflow-hidden transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
        >
            <h2
                className="absolute top-20 left-1/2 transform -translate-x-1/2 text-[15vw] md:text-[180px] font-black uppercase tracking-wide w-full text-center select-none opacity-10 pointer-events-none"
                style={{
                    WebkitTextStroke: "2px white",
                    color: "transparent",
                    zIndex: 0
                }}
            >
                FEEDBACK
            </h2>
            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-12">
                    Testimonial
                </h2>
                <div className="max-w-3xl">
                    <div className="mb-8">
                        <Quote size={80} strokeWidth={1} className="text-[#ff5f13]" fill="none" />
                    </div>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium mb-10">
                        Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr.
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-[3px] h-12 bg-[#ff5f13]"></div>
                        <div className="flex flex-col">
                            <span className="text-white text-lg font-bold tracking-wide">
                                Jessya Inn
                            </span>
                            <span className="text-gray-500 text-sm font-medium">
                                Co Founder
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-8 bg-[#001833]">
                <div
                    className="w-full h-full opacity-20"
                    style={{
                        backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 10px)"
                    }}
                ></div>
            </div>
        </section>
    );
};

export default Testimonial;
import React, { useEffect, useRef, useState } from "react";
import BannerImg from "../assets/about.webp";
import MainProjectImg from "../assets/services_1.png";

const ServicesDetail = () => {
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
        <div className="w-full bg-white font-sans">
            <div
                className="relative w-full h-[50vh] md:h-[450px] flex items-center bg-cover bg-center"
                style={{
                    backgroundImage: `url(${BannerImg})`
                }}
            >
                <div className="absolute inset-0 bg-[#001d3d]/85 mix-blend-multiply"></div>
                <div className="relative z-10 container mx-auto px-6 md:px-12 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-300 uppercase tracking-tight mb-4 leading-tight">
                        Engineering Techniques & Implementation
                    </h1>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <span className="w-10 h-[3px] bg-[#ff5f13]"></span>
                        <p className="text-[#ff5f13] font-bold uppercase text-sm tracking-widest">
                            Home / <span className="text-white">Services Details</span>
                        </p>
                    </div>
                </div>
            </div>
            <div
                ref={sectionRef}
                className={`max-w-5xl mx-auto px-6 md:px-12 py-20 transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                    }`}
            >
                <div className="w-full h-[300px] md:h-[500px] mb-12 overflow-hidden shadow-sm">
                    <img
                        src={MainProjectImg}
                        alt="Engineering Planning"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="space-y-8 text-gray-500 leading-relaxed font-sans text-[15px] md:text-base">
                    <p>
                        Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.
                    </p>
                    <p>
                        Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr.
                    </p>
                    <h3 className="text-3xl font-bold text-[#1a242f] pt-4">How can we help?</h3>
                    <p>
                        Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr.
                    </p>
                    <p>
                        Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetail;
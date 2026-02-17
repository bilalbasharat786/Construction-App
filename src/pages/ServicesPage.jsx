import React from "react";
import AboutBanner from "../assets/about.webp";
import Services from "../components/Services";

const ServicesPage = () => {
    return (
        <div className="w-full">
            <div
                className="relative w-full h-[60vh] md:h-[500px] flex items-center bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: `url(${AboutBanner})`
                }}
            >
                <div className="absolute inset-0 bg-[#001d3d]/80 mix-blend-multiply"></div>
                <div className="relative z-10 container mx-auto px-6 md:px-12">
                    <h1 className="text-5xl md:text-7xl font-black text-gray-300 uppercase tracking-tight mb-4">
                        Services
                    </h1>
                    <div className="flex items-center gap-4">
                        <span className="w-10 h-[3px] bg-[#ff5f13]"></span>
                        <p className="text-[#ff5f13] font-bold uppercase text-sm tracking-widest">
                            Home / <span className="text-white">Services</span>
                        </p>
                    </div>
                </div>
            </div>
            <Services />
        </div>
    );
};

export default ServicesPage;
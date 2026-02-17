import React, { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";
import Logo from "../assets/logo.png";
import MapImage from "../assets/map_footer.png";

const Footer = () => {
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
        <footer ref={sectionRef} className="relative bg-[#05090e] text-gray-400 font-sans">
            <div className="w-full h-12 bg-[#0b111a] overflow-hidden relative border-b border-gray-800/30">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 5px)"
                    }}
                ></div>
            </div>
            <div
                className={`max-w-7xl mx-auto px-6 md:px-12 py-16 transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                    }`}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="flex flex-col items-start">
                        <div className="mb-6 flex items-center gap-2">
                            <img src={Logo} alt="Logo" className="h-10" />
                        </div>
                        <p className="text-sm leading-relaxed text-gray-500 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-bold uppercase mb-6 tracking-tight">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-[#ff5f13] transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-[#ff5f13] transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-[#ff5f13] transition-colors">Projects</a></li>
                            <li><a href="#" className="hover:text-[#ff5f13] transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-bold uppercase mb-6 tracking-tight">Contact</h3>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li>
                                198 West 21th Street, Suite 721 New York, NY 10010
                            </li>
                            <li>
                                Phone: <span className="text-gray-400">+95 (0) 123 456 789</span>
                            </li>
                            <li>
                                Cell: <span className="text-gray-400">+95 (0) 123 456 789</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="flex mb-8">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-[#111822] text-white px-4 py-3 w-full text-sm focus:outline-none focus:ring-1 focus:ring-[#ff5f13] placeholder-gray-600 border border-gray-800"
                            />
                            <button className="bg-[#111822] text-white border-l border-gray-700 px-4 py-3 text-xs font-bold uppercase hover:text-[#ff5f13] transition-colors whitespace-nowrap">
                                Sign Up
                            </button>
                        </div>
                        <div className="mt-4 opacity-30 hover:opacity-50 transition-opacity">
                            <img
                                src={MapImage}
                                alt="World Map"
                                className="w-full h-auto filter invert brightness-50"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800/50 py-8 text-center">
                <p className="text-sm text-gray-500">
                    Copyright ©2026 All rights reserved | This template is made with
                    <Heart size={16} className="inline mx-1 text-[#ff5f13] fill-[#ff5f13]" />
                    by <span className="text-[#ff5f13] cursor-pointer">Colorlib</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
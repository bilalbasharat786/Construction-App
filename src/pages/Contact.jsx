import React, { useEffect, useRef, useState } from "react";
import { Home, Phone, Mail } from "lucide-react";
import AboutImg from "../assets/about.webp";
const Contact = () => {
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
                    backgroundImage: `url(${AboutImg})`
                }}
            >
                <div className="absolute inset-0 bg-[#001d3d]/85 mix-blend-multiply"></div>
                <div className="relative z-10 container mx-auto px-6 md:px-12">
                    <h1 className="text-5xl md:text-7xl font-black text-gray-300 uppercase tracking-tight mb-4">
                        Contact
                    </h1>
                    <div className="flex items-center gap-4">
                        <span className="w-10 h-[3px] bg-[#ff5f13]"></span>
                        <p className="text-[#ff5f13] font-bold uppercase text-sm tracking-widest">
                            Home / <span className="text-white">Contact</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[400px] md:h-[500px] bg-gray-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510562772583"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0, filter: "grayscale(100%)" }}
                    allowFullScreen
                    title="Google Map"
                ></iframe>
            </div>
            <div
                ref={sectionRef}
                className={`max-w-7xl mx-auto px-6 md:px-12 py-24 transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                    }`}
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-[#1a242f] mb-8">Get in Touch</h3>
                        <form className="space-y-6">
                            <textarea
                                rows="6"
                                placeholder="Enter Message"
                                className="w-full border border-gray-300 p-4 text-sm focus:outline-none focus:border-[#ff5f13] focus:ring-1 focus:ring-[#ff5f13] transition-all"
                            ></textarea>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-300 p-4 text-sm focus:outline-none focus:border-[#ff5f13] focus:ring-1 focus:ring-[#ff5f13] transition-all"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full border border-gray-300 p-4 text-sm focus:outline-none focus:border-[#ff5f13] focus:ring-1 focus:ring-[#ff5f13] transition-all"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Enter Subject"
                                className="w-full border border-gray-300 p-4 text-sm focus:outline-none focus:border-[#ff5f13] focus:ring-1 focus:ring-[#ff5f13] transition-all"
                            />
                            <button className="border border-[#ff5f13] text-[#ff5f13] hover:bg-[#ff5f13] hover:text-white font-bold py-4 px-10 text-sm uppercase tracking-widest transition-all mt-4">
                                Send
                            </button>
                        </form>
                    </div>
                    <div className="lg:col-span-1 space-y-8 pl-0 lg:pl-8">
                        <div className="flex gap-4">
                            <Home className="text-gray-400 mt-1" size={24} />
                            <div>
                                <h4 className="text-lg font-bold text-[#1a242f] mb-1">Buttonwood, California.</h4>
                                <p className="text-gray-500 text-sm">Rosemead, CA 91770</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Phone className="text-gray-400 mt-1" size={24} />
                            <div>
                                <h4 className="text-lg font-bold text-[#1a242f] mb-1">+1 253 565 2365</h4>
                                <p className="text-gray-500 text-sm">Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Mail className="text-gray-400 mt-1" size={24} />
                            <div>
                                <h4 className="text-lg font-bold text-[#1a242f] mb-1">support@colorlib.com</h4>
                                <p className="text-gray-500 text-sm">Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
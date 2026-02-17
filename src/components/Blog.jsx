import React, { useEffect, useRef, useState } from "react";
import Blog1 from "../assets/person_1.png";
import Blog2 from "../assets/person_2.png";

const blogData = [
    {
        id: 1,
        date: "24",
        month: "Nov",
        category: "Properties",
        title: "Footprints in Time is perfect House in Kurashiki",
        image: Blog1,
    },
    {
        id: 2,
        date: "24",
        month: "Nov",
        category: "Properties",
        title: "Footprints in Time is perfect House in Kurashiki",
        image: Blog2,
    },
];

const Blog = () => {
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
            <div className="mb-16 relative z-10">
                <h2 className="absolute -top-6 left-0 text-6xl md:text-8xl font-black text-gray-100 uppercase tracking-tighter -z-10 select-none">
                    Blog
                </h2>
                <h2 className="text-4xl md:text-5xl font-black text-[#1a242f] uppercase tracking-tight">
                    Latest News
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {blogData.map((blog) => (
                    <div key={blog.id} className="group cursor-pointer shadow-lg overflow-hidden">
                        <div className="relative h-[300px] overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-0 left-0 bg-[#ff5f13] text-white p-3 md:p-4 text-center min-w-[70px]">
                                <span className="block text-2xl md:text-3xl font-bold leading-none">{blog.date}</span>
                                <span className="block text-sm uppercase font-medium">{blog.month}</span>
                            </div>
                        </div>
                        <div className="bg-[#001d3d] p-8 md:p-10 text-white relative">
                            <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                                <span className="text-[#ff5f13] font-bold">|</span>
                                <span>{blog.category}</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold leading-tight mb-6 hover:text-[#ff5f13] transition-colors">
                                {blog.title}
                            </h3>
                            <button className="text-[#ff5f13] font-bold text-sm uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1">
                                Read More »
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
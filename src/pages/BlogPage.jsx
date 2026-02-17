import React from "react";
import { User, MessageCircle, Search, ChevronRight } from "lucide-react";
import AboutBanner from "../assets/about.webp";
import BlogBanner1 from "../assets/single_blog_1.png";
import BlogBanner2 from "../assets/single_blog_2.png";
import BlogBanner3 from "../assets/single_blog_3.png";
import BlogBanner4 from "../assets/single_blog_4.png";
import BlogBanner5 from "../assets/single_blog_5.png";
import Post1 from "../assets/post_1.png";
import Post2 from "../assets/post_2.png";
import Post3 from "../assets/post_3.png";
import Post4 from "../assets/post_4.png";
import instagramFeed1 from "../assets/post_5.png";
import instagramFeed2 from "../assets/post_6.png";
import instagramFeed3 from "../assets/post_7.png";
import instagramFeed4 from "../assets/post_8.png";
import instagramFeed5 from "../assets/post_9.png";
import instagramFeed6 from "../assets/post_10.png";

const blogPosts = [
    {
        id: 1,
        image: BlogBanner1,
        date: "15",
        month: "Jan",
        title: "Google inks pact for new 35-storey office",
        desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        category: "Travel, Lifestyle",
        comments: "03 Comments",
    },
    {
        id: 2,
        image: BlogBanner2,
        date: "15",
        month: "Jan",
        title: "Google inks pact for new 35-storey office",
        desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        category: "Travel, Lifestyle",
        comments: "03 Comments",
    },
    {
        id: 3,
        image: BlogBanner3,
        date: "15",
        month: "Jan",
        title: "Google inks pact for new 35-storey office",
        desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        category: "Travel, Lifestyle",
        comments: "03 Comments",
    },
    {
        id: 4,
        image: BlogBanner4,
        date: "15",
        month: "Jan",
        title: "Google inks pact for new 35-storey office",
        desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        category: "Travel, Lifestyle",
        comments: "03 Comments",
    },
    {
        id: 5,
        image: BlogBanner5,
        date: "15",
        month: "Jan",
        title: "Google inks pact for new 35-storey office",
        desc: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        category: "Travel, Lifestyle",
        comments: "03 Comments",
    },
];

const categories = [
    { name: "Restaurant food", count: 37 },
    { name: "Travel news", count: 10 },
    { name: "Modern technology", count: 3 },
    { name: "Product", count: 11 },
    { name: "Inspiration", count: 21 },
    { name: "Health Care", count: 21 },
];

const recentPosts = [
    { title: "From life was you fish...", date: "January 12, 2019", img: Post1 },
    { title: "The Amazing Hubble", date: "02 Hours ago", img: Post2 },
    { title: "Astronomy Or Astrology", date: "03 Hours ago", img: Post3 },
    { title: "Asteroids telescope", date: "01 Hours ago", img: Post4 },
];

const tags = ["project", "love", "technology", "travel", "restaurant", "life style", "design", "illustration"];

const instagramFeeds = [
    instagramFeed1,
    instagramFeed2,
    instagramFeed3,
    instagramFeed4,
    instagramFeed5,
    instagramFeed6,
];

const BlogPage = () => {
    return (
        <div className="w-full bg-[#fbf9ff]">
            <div
                className="relative w-full h-[50vh] md:h-[400px] flex items-center bg-cover bg-center"
                style={{
                    backgroundImage: `url('${AboutBanner}')`
                }}
            >
                <div className="absolute inset-0 bg-[#001d3d]/80 mix-blend-multiply"></div>
                <div className="relative z-10 container mx-auto px-6 md:px-12">
                    <h1 className="text-5xl md:text-7xl font-black text-gray-300 uppercase tracking-tight mb-4">
                        Blog
                    </h1>
                    <div className="flex items-center gap-4">
                        <span className="w-10 h-[3px] bg-[#ff5f13]"></span>
                        <p className="text-[#ff5f13] font-bold uppercase text-sm tracking-widest">
                            Home / <span className="text-white">Blog</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-sm overflow-hidden">
                                <div className="relative h-[300px] md:h-[400px]">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                    <div className="absolute bottom-[-20px] left-8 bg-[#ff5f13] text-white py-3 px-6 text-center rounded-sm">
                                        <span className="block text-3xl font-bold leading-none">{post.date}</span>
                                        <span className="block text-sm font-medium">{post.month}</span>
                                    </div>
                                </div>
                                <div className="pt-12 pb-8 px-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a242f] mb-4 hover:text-[#ff5f13] cursor-pointer transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-500 mb-6 leading-relaxed">
                                        {post.desc}
                                    </p>
                                    <div className="flex items-center gap-6 text-sm text-gray-400">
                                        <div className="flex items-center gap-2 hover:text-[#ff5f13] cursor-pointer transition-colors">
                                            <User size={16} />
                                            <span>{post.category}</span>
                                        </div>
                                        <div className="flex items-center gap-2 hover:text-[#ff5f13] cursor-pointer transition-colors">
                                            <MessageCircle size={16} />
                                            <span>{post.comments}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-center gap-2 pt-8">
                            <button className="w-10 h-10 flex items-center justify-center border hover:bg-[#ff5f13] hover:text-white transition-colors text-gray-500">
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-1 space-y-10">
                        <div className="bg-[#fbf9ff] p-2">
                            <div className="flex bg-white border border-gray-200">
                                <input
                                    type="text"
                                    placeholder="Search Keyword"
                                    className="w-full px-4 py-3 text-sm focus:outline-none text-gray-600"
                                />
                                <button className="bg-[#ff5f13] text-white px-5 hover:bg-orange-600 transition-colors">
                                    <Search size={20} />
                                </button>
                            </div>
                            <button className="w-full mt-4 border border-[#ff5f13] text-[#ff5f13] py-3 text-sm tracking-widest uppercase hover:bg-[#ff5f13] hover:text-white transition-colors">
                                Search
                            </button>
                        </div>
                        <div className="bg-[#fbf9ff] pt-2">
                            <h3 className="text-xl font-bold text-[#1a242f] mb-6 border-b pb-2">Category</h3>
                            <ul className="space-y-0">
                                {categories.map((cat, i) => (
                                    <li key={i} className="border-b border-gray-200 last:border-0">
                                        <a href="#" className="flex justify-between py-4 text-gray-500 hover:text-[#ff5f13] transition-colors">
                                            <p>{cat.name}</p>
                                            <p>({cat.count})</p>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-[#fbf9ff] pt-2">
                            <h3 className="text-xl font-bold text-[#1a242f] mb-6 border-b pb-2">Recent Post</h3>
                            <div className="space-y-6">
                                {recentPosts.map((post, i) => (
                                    <div key={i} className="flex gap-4">
                                        <img src={post.img} alt="thumb" className="w-16 h-16 object-cover rounded-sm" />
                                        <div>
                                            <h4 className="font-bold text-[#1a242f] leading-tight hover:text-[#ff5f13] cursor-pointer text-sm mb-1">
                                                {post.title}
                                            </h4>
                                            <span className="text-xs text-gray-500">{post.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#fbf9ff] pt-2">
                            <h3 className="text-xl font-bold text-[#1a242f] mb-6 border-b pb-2">Tag Clouds</h3>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag, i) => (
                                    <a key={i} href="#" className="border border-gray-200 bg-white text-gray-500 px-3 py-1 text-xs uppercase hover:bg-[#ff5f13] hover:text-white transition-colors">
                                        {tag}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#fbf9ff] pt-2">
                            <h3 className="text-xl font-bold text-[#1a242f] mb-6 border-b pb-2">Instagram Feeds</h3>
                            <div className="grid grid-cols-3 gap-2">
                                {instagramFeeds.map((img, i) => (
                                    <img key={i} src={img} alt="insta" className="w-full h-20 object-cover cursor-pointer hover:opacity-80" />
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#fbf9ff] pt-2">
                            <h3 className="text-xl font-bold text-[#1a242f] mb-6 border-b pb-2">Newsletter</h3>
                            <div className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#ff5f13]"
                                />
                                <button className="w-full border border-[#ff5f13] text-[#ff5f13] py-3 text-sm tracking-widest uppercase hover:bg-[#ff5f13] hover:text-white transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
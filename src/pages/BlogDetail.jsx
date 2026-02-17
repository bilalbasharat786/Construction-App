import React from "react";
import { User, MessageCircle, Heart, Facebook, Twitter, Instagram, Globe, Search, ArrowLeft, ArrowRight } from "lucide-react";
import BannerImg from "../assets/about.webp";
import MainBlogImg from "../assets/single_blog_1.png";
import Preview from "../assets/preview.png";
import Next from "../assets/single_blog_4.png";
import Author from "../assets/author.png";
import Comment1 from "../assets/comment_1.png";
import Comment2 from "../assets/comment_2.png";
import Comment3 from "../assets/comment_3.png";
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
const BlogDetail = () => {
    return (
        <div className="w-full bg-[#fbf9ff]">
            <div
                className="relative w-full h-[50vh] md:h-[450px] flex items-center bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: `url('${BannerImg}')`
                }}
            >
                <div className="absolute inset-0 bg-[#001d3d]/80 mix-blend-multiply"></div>
                <div className="relative z-10 container mx-auto px-6 md:px-12">
                    <h1 className="text-5xl md:text-7xl font-black text-gray-300 uppercase tracking-tight mb-4">
                        Single Blog
                    </h1>
                    <div className="flex items-center gap-4">
                        <span className="w-10 h-[3px] bg-[#ff5f13]"></span>
                        <p className="text-[#ff5f13] font-bold uppercase text-sm tracking-widest">
                            Home / <span className="text-white">Single Blog</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="bg-white shadow-sm p-0 md:p-6 mb-10">
                            <div className="w-full h-[400px] md:h-[500px] mb-8 overflow-hidden">
                                <img
                                    src={MainBlogImg}
                                    alt="Blog Main"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1a242f] mb-4">
                                Second divided from form fish beast made every of seas all gathered us saying he our
                            </h2>
                            <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                                <div className="flex items-center gap-2">
                                    <User size={16} /> <span>Travel, Lifestyle</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MessageCircle size={16} /> <span>03 Comments</span>
                                </div>
                            </div>
                            <p className="text-gray-500 leading-relaxed mb-6">
                                MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                            </p>
                            <div className="bg-[#f2f3f4] p-8 border-l-4 border-[#ff5f13] mb-8">
                                <p className="text-gray-500 italic font-medium leading-relaxed">
                                    “MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.”
                                </p>
                            </div>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.
                            </p>
                        </div>
                        <div className="border-t border-b border-gray-200 py-6 mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <Heart size={16} className="text-[#ff5f13] fill-[#ff5f13]" />
                                <span>Lily and 4 people like this</span>
                            </div>
                            <div className="flex gap-4 text-gray-400">
                                <Facebook size={18} className="hover:text-[#ff5f13] cursor-pointer" />
                                <Twitter size={18} className="hover:text-[#ff5f13] cursor-pointer" />
                                <Globe size={18} className="hover:text-[#ff5f13] cursor-pointer" />
                                <Instagram size={18} className="hover:text-[#ff5f13] cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-16 h-16 overflow-hidden">
                                    <img src={Preview} alt="Prev" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase">Prev Post</p>
                                    <h4 className="font-bold text-[#1a242f] group-hover:text-[#ff5f13] transition-colors">Space The Final Frontier</h4>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer text-right flex-row-reverse md:flex-row">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase">Next Post</p>
                                    <h4 className="font-bold text-[#1a242f] group-hover:text-[#ff5f13] transition-colors">Telescopes 101</h4>
                                </div>
                                <div className="w-16 h-16 overflow-hidden">
                                    <img src={Next} alt="Next" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#fbf9ff] border-t border-b border-gray-200 py-10 px-4 mb-12 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                            <img src={Author} alt="Author" className="w-24 h-24 rounded-full object-cover" />
                            <div>
                                <h4 className="text-lg font-bold text-[#1a242f] mb-2">Harvard milan</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from.
                                </p>
                            </div>
                        </div>
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-[#1a242f] mb-8 border-b pb-4">05 Comments</h3>
                            <div className="flex gap-4 mb-8">
                                <img src={Comment1} alt="User" className="w-12 h-12 rounded-full" />
                                <div>
                                    <p className="text-gray-500 text-sm mb-2">
                                        Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <h5 className="font-bold text-[#1a242f] text-sm">Emilly Blunt</h5>
                                        <p className="text-xs text-gray-400">December 4, 2017 at 3:12 pm</p>
                                        <span className="text-[#ff5f13] text-xs font-bold uppercase cursor-pointer hover:text-[#1a242f]">Reply</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-8">
                                <img src={Comment2} alt="User" className="w-12 h-12 rounded-full" />
                                <div>
                                    <p className="text-gray-500 text-sm mb-2">
                                        Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <h5 className="font-bold text-[#1a242f] text-sm">Emilly Blunt</h5>
                                        <p className="text-xs text-gray-400">December 4, 2017 at 3:12 pm</p>
                                        <span className="text-[#ff5f13] text-xs font-bold uppercase cursor-pointer hover:text-[#1a242f]">Reply</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-8">
                                <img src={Comment3} alt="User" className="w-12 h-12 rounded-full" />
                                <div>
                                    <p className="text-gray-500 text-sm mb-2">
                                        Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <h5 className="font-bold text-[#1a242f] text-sm">Emilly Blunt</h5>
                                        <p className="text-xs text-gray-400">December 4, 2017 at 3:12 pm</p>
                                        <span className="text-[#ff5f13] text-xs font-bold uppercase cursor-pointer hover:text-[#1a242f]">Reply</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-0 md:p-2">
                            <h3 className="text-xl font-bold text-[#1a242f] mb-8">Leave a Reply</h3>
                            <form className="space-y-4">
                                <div className="w-full">
                                    <textarea
                                        rows="6"
                                        placeholder="Write Comment"
                                        className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#ff5f13]"
                                    ></textarea>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Name" className="border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#ff5f13]" />
                                    <input type="email" placeholder="Email" className="border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#ff5f13]" />
                                </div>
                                <input type="text" placeholder="Website" className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#ff5f13]" />
                                <button className="border border-[#ff5f13] text-[#ff5f13] hover:bg-[#ff5f13] hover:text-white font-bold py-3 px-8 text-sm uppercase tracking-widest transition-all mt-4">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="lg:col-span-1 space-y-10">
                        <div className="bg-[#fbf9ff] p-2">
                            <div className="flex bg-white border border-gray-200">
                                <input type="text" placeholder="Search Keyword" className="w-full px-4 py-3 text-sm focus:outline-none text-gray-600" />
                                <button className="bg-[#ff5f13] text-white px-5 hover:bg-orange-600 transition-colors"><Search size={20} /></button>
                            </div>
                            <button className="w-full mt-4 border border-[#ff5f13] text-[#ff5f13] py-3 text-sm tracking-widest uppercase hover:bg-[#ff5f13] hover:text-white transition-colors">Search</button>
                        </div>
                        <div className="bg-[#fbf9ff] pt-2">
                            <h3 className="text-xl font-bold text-[#1a242f] mb-6 border-b pb-2">Category</h3>
                            <ul className="space-y-0 text-gray-500 text-sm">
                                <li className="border-b py-3 flex justify-between hover:text-[#ff5f13]"><span>Restaurant food</span><span>(37)</span></li>
                                <li className="border-b py-3 flex justify-between hover:text-[#ff5f13]"><span>Travel news</span><span>(10)</span></li>
                                <li className="border-b py-3 flex justify-between hover:text-[#ff5f13]"><span>Modern technology</span><span>(03)</span></li>
                                <li className="border-b py-3 flex justify-between hover:text-[#ff5f13]"><span>Product</span><span>(11)</span></li>
                                <li className="border-b py-3 flex justify-between hover:text-[#ff5f13]"><span>Inspiration</span><span>(21)</span></li>
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
                                {["project", "love", "technology", "travel", "restaurant", "life style", "design", "illustration"].map((tag, i) => (
                                    <span key={i} className="border border-gray-200 bg-white text-gray-500 px-3 py-1 text-xs uppercase hover:bg-[#ff5f13] hover:text-white transition-colors cursor-pointer">{tag}</span>
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
                                <input type="email" placeholder="Enter email" className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#ff5f13]" />
                                <button className="w-full border border-[#ff5f13] text-[#ff5f13] py-3 text-sm tracking-widest uppercase hover:bg-[#ff5f13] hover:text-white transition-colors">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
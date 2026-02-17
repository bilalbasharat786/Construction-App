import React from "react";
import { Globe, ChevronDown } from "lucide-react";
import BannerImg from "../assets/about.webp";
import ImageLeft from "../assets/d.jpg";
import ImageRight from "../assets/d.jpg";
import Gallery1 from "../assets/g1.jpg";
import Gallery2 from "../assets/g2.jpg";
import Gallery3 from "../assets/g3.jpg";
import Gallery4 from "../assets/g4.jpg";
import Gallery5 from "../assets/g5.jpg";
import Gallery6 from "../assets/g6.jpg";
import Flag1 from "../assets/f1.jpg";
import Flag2 from "../assets/f2.jpg";
import Flag3 from "../assets/f3.jpg";
import Flag4 from "../assets/f4.jpg";
import Flag5 from "../assets/f5.jpg";
import Flag6 from "../assets/f6.jpg";
import Flag7 from "../assets/f7.jpg";
import Flag8 from "../assets/f8.jpg";

const Page = () => {
    return (
        <div className="w-full bg-white font-sans text-gray-600">
            <div
                className="relative w-full h-[50vh] md:h-[450px] flex items-center bg-cover bg-center"
                style={{
                    backgroundImage: `url('${BannerImg}')`
                }}
            >
                <div className="absolute inset-0 bg-[#001d3d]/80 mix-blend-multiply"></div>
                <div className="relative z-10 container mx-auto px-6 md:px-12">
                    <h1 className="text-5xl md:text-7xl font-black text-gray-300 uppercase tracking-tight mb-4">
                        Our Element
                    </h1>
                    <div className="flex items-center gap-4">
                        <span className="w-10 h-[3px] bg-[#ff5f13]"></span>
                        <p className="text-[#ff5f13] font-bold uppercase text-sm tracking-widest">
                            Home / <span className="text-white">Element</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-24">
                <section>
                    <h3 className="text-2xl font-bold text-[#1a242f] mb-6">Text Sample</h3>
                    <p className="leading-loose text-gray-500">
                        Every avid independent filmmaker has <span className="font-bold text-[#1a242f]">Bold</span> about making that <span className="italic text-[#1a242f]">Italic</span> interest documentary, or short film to show off their creative prowess. Many have great ideas and want to "wow" the <sup className="text-[#1a242f]">Superscript</sup> scene, or video renters with their big project. But once you have the <sub className="text-[#1a242f]">Subscript</sub> "in the can" (no easy feat), how do you move from a <span className="line-through text-[#1a242f]">Strike</span> through of master DVDs with the <span className="underline text-[#1a242f]">"Underline"</span> marked hand-written title inside a secondhand CD case, to a pile of cardboard boxes full of shiny new, retail-ready DVDs, with UPC barcodes and polywrap sitting on your doorstep? You need to create eye-popping artwork and have your project replicated. Using a reputable full service DVD Replication company like PacificDisc, Inc. to partner with is certainly a helpful option to ensure a professional end result, but to help with your DVD replication project, here are 4 easy steps to follow for good DVD replication results:
                    </p>
                </section>
                <section>
                    <h3 className="text-2xl font-bold text-[#1a242f] mb-8">Sample Buttons</h3>
                    <div className="space-y-6">
                        <div className="flex flex-wrap gap-4 border-b border-gray-100 pb-8">
                            <button className="bg-gray-100 text-gray-600 px-8 py-3 text-sm font-medium hover:bg-gray-200 transition">Default</button>
                            <button className="bg-[#1a242f] text-white px-8 py-3 text-sm font-medium hover:bg-opacity-90 transition">Primary</button>
                            <button className="bg-[#4cd3e3] text-white px-8 py-3 text-sm font-medium hover:bg-opacity-90 transition">Success</button>
                            <button className="bg-[#38a4ff] text-white px-8 py-3 text-sm font-medium hover:bg-opacity-90 transition">Info</button>
                            <button className="bg-[#f4e700] text-white px-8 py-3 text-sm font-medium hover:bg-opacity-90 transition">Warning</button>
                            <button className="bg-[#f44a40] text-white px-8 py-3 text-sm font-medium hover:bg-opacity-90 transition">Danger</button>
                            <button className="text-[#1a242f] underline px-8 py-3 text-sm font-medium hover:text-[#ff5f13] transition">Link</button>
                            <button className="bg-white border border-gray-200 text-gray-400 px-8 py-3 text-sm font-medium cursor-not-allowed">Disable</button>
                        </div>
                        <div className="flex flex-wrap gap-4 border-b border-gray-100 pb-8">
                            <button className="border border-gray-200 text-gray-600 px-8 py-3 text-sm font-medium hover:bg-gray-100 transition">Default</button>
                            <button className="border border-[#1a242f] text-[#1a242f] px-8 py-3 text-sm font-medium hover:bg-[#1a242f] hover:text-white transition">Primary</button>
                            <button className="border border-[#4cd3e3] text-[#4cd3e3] px-8 py-3 text-sm font-medium hover:bg-[#4cd3e3] hover:text-white transition">Success</button>
                            <button className="border border-[#38a4ff] text-[#38a4ff] px-8 py-3 text-sm font-medium hover:bg-[#38a4ff] hover:text-white transition">Info</button>
                            <button className="border border-[#f4e700] text-[#f4e700] px-8 py-3 text-sm font-medium hover:bg-[#f4e700] hover:text-white transition">Warning</button>
                            <button className="border border-[#f44a40] text-[#f44a40] px-8 py-3 text-sm font-medium hover:bg-[#f44a40] hover:text-white transition">Danger</button>
                            <button className="text-[#1a242f] underline px-8 py-3 text-sm font-medium hover:text-[#ff5f13] transition">Link</button>
                            <button className="border border-gray-200 text-gray-300 px-8 py-3 text-sm font-medium cursor-not-allowed">Disable</button>
                        </div>
                        <div className="flex flex-wrap gap-4 border-b border-gray-100 pb-8">
                            <button className="bg-[#1a242f] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition">Primary</button>
                            <button className="bg-[#4cd3e3] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition">Success</button>
                            <button className="bg-[#38a4ff] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition">Info</button>
                            <button className="bg-[#f4e700] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition">Warning</button>
                            <button className="bg-[#f44a40] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition">Danger</button>
                            <button className="text-[#1a242f] underline px-8 py-3 text-sm font-medium hover:text-[#ff5f13] transition">Link</button>
                            <button className="bg-white border border-gray-200 rounded-full text-gray-400 px-8 py-3 text-sm font-medium cursor-not-allowed">Disable</button>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <button className="bg-[#1a242f] text-white px-10 py-5 text-lg font-bold hover:bg-opacity-90 transition">Extra Large</button>
                            <button className="bg-[#4cd3e3] text-white px-8 py-4 text-base font-bold hover:bg-opacity-90 transition">Large</button>
                            <button className="bg-[#38a4ff] text-white px-6 py-3 text-sm font-bold hover:bg-opacity-90 transition">Default</button>
                            <button className="bg-[#f4e700] text-white px-5 py-2 text-xs font-bold hover:bg-opacity-90 transition">Medium</button>
                            <button className="bg-[#f44a40] text-white px-4 py-1 text-[10px] font-bold hover:bg-opacity-90 transition">Small</button>
                        </div>
                    </div>
                </section>
                <section className="space-y-12">
                    <h3 className="text-2xl font-bold text-[#1a242f]">Left Aligned</h3>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <img src={ImageLeft} alt="Left" className="w-full md:w-64 h-auto object-cover" />
                        <p className="text-gray-500 leading-loose">
                            Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government.
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-[#1a242f] text-right">Right Aligned</h3>
                    <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
                        <img src={ImageRight} alt="Right" className="w-full md:w-64 h-auto object-cover" />
                        <p className="text-gray-500 leading-loose text-right">
                            Over time, even the most sophisticated, memory packed computer can begin to run slow if we don't do something to prevent it. The reason why has less to do with how computers are made and how they age and more to do with the way we use them. You see, all of the daily tasks that we do on our PC from running programs to downloading and deleting software.
                        </p>
                    </div>
                </section>
                <section>
                    <h3 className="text-2xl font-bold text-[#1a242f] mb-8">Definition</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((num) => (
                            <div key={num}>
                                <h4 className="text-lg font-bold text-[#1a242f] mb-4">Definition 0{num}</h4>
                                <p className="text-gray-500 leading-loose">
                                    Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system.
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h3 className="text-2xl font-bold text-[#1a242f] mb-8">Block Quotes</h3>
                    <blockquote className="border-l-4 border-[#1a242f] pl-6 py-2 bg-[#f9f9ff]">
                        <p className="text-gray-500 italic leading-loose">
                            "Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States."
                        </p>
                    </blockquote>
                </section>
                <section>
                    <h3 className="text-2xl font-bold text-[#1a242f] mb-8">Table</h3>
                    <div className="bg-[#f9f9ff] p-8 md:p-12">
                        <div className="grid grid-cols-12 text-[#1a242f] font-bold uppercase text-sm mb-8 border-b border-gray-200 pb-4">
                            <div className="col-span-1">#</div>
                            <div className="col-span-4">Countries</div>
                            <div className="col-span-3">Visits</div>
                            <div className="col-span-4">Percentages</div>
                        </div>
                        {[
                            { id: "01", country: "Canada", flag: { src: Flag1, alt: "Canada Flag" }, visit: "645032", per: "60%", color: "bg-blue-500" },
                            { id: "02", country: "USA", flag: { src: Flag2, alt: "USA Flag" }, visit: "645032", per: "30%", color: "bg-red-400" },
                            { id: "03", country: "UK", flag: { src: Flag3, alt: "UK Flag" }, visit: "645032", per: "55%", color: "bg-orange-400" },
                            { id: "04", country: "Germany", flag: { src: Flag4, alt: "Germany Flag" }, visit: "645032", per: "65%", color: "bg-green-400" },
                            { id: "05", country: "Australia", flag: { src: Flag5, alt: "Australia Flag" }, visit: "645032", per: "40%", color: "bg-teal-400" },
                            { id: "06", country: "China", flag: { src: Flag6, alt: "China Flag" }, visit: "645032", per: "75%", color: "bg-indigo-500" },
                            { id: "07", country: "Bangladesh", flag: { src: Flag7, alt: "Bangladesh Flag" }, visit: "645032", per: "35%", color: "bg-purple-500" },
                            { id: "08", country: "Belgium", flag: { src: Flag8, alt: "Belgium Flag" }, visit: "645032", per: "60%", color: "bg-pink-400" },
                        ].map((row, index) => (
                            <div key={index} className="grid grid-cols-12 items-center text-gray-500 py-4 border-b border-gray-100 last:border-0">
                                <div className="col-span-1 text-[#1a242f]">{row.id}</div>
                                <div className="col-span-4 flex items-center gap-3">
                                    <img src={row.flag.src} alt={row.flag.alt} className="w-6 h-6" /> {row.country}
                                </div>
                                <div className="col-span-3">{row.visit}</div>
                                <div className="col-span-4">
                                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                                        <div className={`h-full ${row.color}`} style={{ width: row.per }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h3 className="text-2xl font-bold text-[#1a242f] mb-8">Image Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="h-48 md:h-64 overflow-hidden"><img src={Gallery1} alt="G1" className="w-full h-full object-cover hover:scale-110 transition duration-500" /></div>
                        <div className="h-48 md:h-64 overflow-hidden"><img src={Gallery2} alt="G2" className="w-full h-full object-cover hover:scale-110 transition duration-500" /></div>
                        <div className="h-48 md:h-64 overflow-hidden"><img src={Gallery3} alt="G3" className="w-full h-full object-cover hover:scale-110 transition duration-500" /></div>
                        <div className="h-48 md:h-64 overflow-hidden"><img src={Gallery4} alt="G4" className="w-full h-full object-cover hover:scale-110 transition duration-500" /></div>
                        <div className="h-48 md:h-64 overflow-hidden"><img src={Gallery5} alt="G5" className="w-full h-full object-cover hover:scale-110 transition duration-500" /></div>
                        <div className="h-48 md:h-64 overflow-hidden"><img src={Gallery6} alt="G6" className="w-full h-full object-cover hover:scale-110 transition duration-500" /></div>
                    </div>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-[#1a242f] mb-8">Image Gallery</h3>
                        <div className="space-y-4 text-gray-500">
                            <h1 className="text-4xl text-gray-400 bg-[#f9f9ff] py-4 px-6 block">This is header 01</h1>
                            <h2 className="text-3xl text-gray-400 bg-[#f9f9ff] py-4 px-6 block">This is header 02</h2>
                            <h3 className="text-2xl text-gray-400 bg-[#f9f9ff] py-4 px-6 block">This is header 03</h3>
                            <h4 className="text-xl text-gray-400 bg-[#f9f9ff] py-4 px-6 block">This is header 04</h4>
                            <h5 className="text-lg text-gray-400 bg-[#f9f9ff] py-4 px-6 block">This is header 01</h5>
                            <h6 className="text-base text-gray-400 bg-[#f9f9ff] py-4 px-6 block">This is header 01</h6>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-[#1a242f] mb-8">Unordered List</h3>
                        <ul className="space-y-4 text-gray-500 leading-relaxed list-none">
                            <li>Fta Keys</li>
                            <li>For Women Only Your Computer Usage</li>
                            <li>Facts Why Inkjet Printing Is Very Appealing
                                <ul className="pl-6 mt-2 space-y-2">
                                    <li>Addiction When Gambling Becomes
                                        <ul className="pl-6 mt-2">
                                            <li>Protective Preventative Maintenance</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>Dealing With Technical Support 10 Useful Tips</li>
                            <li>Make Myspace Your Best Designed Space</li>
                            <li>Cleaning And Organizing Your Computer</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-[#1a242f] mb-8">Ordered List</h3>
                        <ol className="space-y-4 text-gray-500 leading-relaxed list-decimal pl-4">
                            <li>Fta Keys</li>
                            <li>For Women Only Your Computer Usage</li>
                            <li>Facts Why Inkjet Printing Is Very Appealing
                                <ol className="pl-6 mt-2 space-y-2 list-lower-alpha">
                                    <li>Addiction When Gambling Becomes
                                        <ol className="pl-6 mt-2 list-lower-roman">
                                            <li>Protective Preventative Maintenance</li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li>Dealing With Technical Support 10 Useful Tips</li>
                            <li>Make Myspace Your Best Designed Space</li>
                            <li>Cleaning And Organizing Your Computer</li>
                        </ol>
                    </div>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-[#1a242f] mb-8">Form Element</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="First Name" className="w-full bg-[#f9f9ff] border-none px-4 py-3 focus:ring-1 focus:ring-[#ff5f13] text-gray-500" />
                            <input type="text" placeholder="Last Name" className="w-full bg-[#f9f9ff] border-none px-4 py-3 focus:ring-1 focus:ring-[#ff5f13] text-gray-500" />
                            <input type="text" placeholder="Last Name" className="w-full bg-[#f9f9ff] border-none px-4 py-3 focus:ring-1 focus:ring-[#ff5f13] text-gray-500" />
                            <input type="email" placeholder="Email address" className="w-full bg-[#f9f9ff] border-none px-4 py-3 focus:ring-1 focus:ring-[#ff5f13] text-gray-500" />
                            <div className="relative">
                                <input type="text" placeholder="Address" className="w-full bg-[#f9f9ff] border-none px-4 py-3 pl-10 focus:ring-1 focus:ring-[#ff5f13] text-gray-500" />
                                <span className="absolute left-4 top-3.5 text-gray-400">📍</span>
                            </div>
                            <div className="relative">
                                <select className="w-full bg-[#f9f9ff] border-none px-4 py-3 appearance-none text-gray-500 focus:ring-1 focus:ring-[#ff5f13]">
                                    <option>City</option>
                                    <option>Dhaka</option>
                                    <option>Dilli</option>
                                    <option>New York</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-3.5 text-gray-400" size={16} />
                            </div>
                            <div className="relative">
                                <select className="w-full bg-[#f9f9ff] border-none px-4 py-3 appearance-none text-gray-500 focus:ring-1 focus:ring-[#ff5f13]">
                                    <option>Country</option>
                                    <option>Bangladesh</option>
                                    <option>India</option>
                                    <option>USA</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-3.5 text-gray-400" size={16} />
                            </div>
                        </form>
                    </div>
                    <div className="md:col-span-1 space-y-12">
                        {/* Switches */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#1a242f] mb-8">Switches</h3>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500">01. Sample Switch</span>
                                    <div className="w-10 h-5 bg-[#4cd3e3] rounded-full relative cursor-pointer">
                                        <div className="w-5 h-5 bg-white rounded-full absolute right-0 shadow-md"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500">02. Primary Color Switch</span>
                                    <div className="w-10 h-5 bg-[#1a242f] rounded-full relative cursor-pointer">
                                        <div className="w-5 h-5 bg-white rounded-full absolute right-0 shadow-md"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500">03. Confirm Color Switch</span>
                                    <div className="w-10 h-5 bg-[#38a4ff] rounded-full relative cursor-pointer">
                                        <div className="w-5 h-5 bg-white rounded-full absolute right-0 shadow-md"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#1a242f] mb-8">Selectboxes</h3>
                            <div className="relative w-full">
                                <select className="w-full bg-[#f9f9ff] border-none px-4 py-3 appearance-none text-gray-500 focus:ring-1 focus:ring-[#ff5f13]">
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>Arabic</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-3.5 text-gray-400" size={16} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#1a242f] mb-8">Checkboxes</h3>
                            <div className="space-y-4">
                                <label className="flex items-center gap-3 text-gray-500 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 text-[#ff5f13] border-gray-300 rounded focus:ring-[#ff5f13]" defaultChecked />
                                    01. Sample Checkbox
                                </label>
                                <label className="flex items-center gap-3 text-gray-500 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 text-[#1a242f] border-gray-300 rounded focus:ring-[#1a242f]" defaultChecked />
                                    02. Primary Color Checkbox
                                </label>
                                <label className="flex items-center gap-3 text-gray-500 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 text-[#4cd3e3] border-gray-300 rounded focus:ring-[#4cd3e3]" defaultChecked />
                                    03. Confirm Color Checkbox
                                </label>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Page;
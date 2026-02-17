import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleMouseEnter = (name) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    {
      name: "Blog",
      path: "/blog",
      dropdown: [
        { name: "Blog", path: "/blog" },
        { name: "Blog Details", path: "/blog-details" }
      ]
    },
    {
      name: "Pages",
      path: "/pages",
      dropdown: [
        { name: "Element", path: "/pages" },
        { name: "Projects Details", path: "/project-details" },
        { name: "Services Details", path: "/services-details" }
      ]
    },
    { name: "Contact", path: "/contact" },
  ];
  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full font-sans">
      <div className="bg-[#1a242f] text-gray-300 py-2 px-6 md:px-12 flex justify-between items-center text-xs border-b border-gray-700">
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center gap-2"><Phone size={14} className="text-orange-500" /> +(123) 1234-567-8901</div>
          <div className="flex items-center gap-2"><Mail size={14} className="text-orange-500" /> info@domain.com</div>
          <div className="flex items-center gap-2"><Clock size={14} className="text-orange-500" /> Mon - Sat 8:00 - 17:30, Sunday - CLOSED</div>
        </div>
        <div className="flex items-center space-x-4 ml-auto md:ml-0">
          <Twitter size={14} className="hover:text-white cursor-pointer" />
          <Facebook size={14} className="hover:text-white cursor-pointer" />
          <Linkedin size={14} className="hover:text-white cursor-pointer" />
          <Instagram size={14} className="hover:text-white cursor-pointer" />
        </div>
      </div>
      <nav className={`w-full transition-all duration-300 z-50 ${isSticky ? "fixed top-0 left-0 bg-[#1a242f] shadow-xl py-3" : "absolute bg-transparent py-6"
        } px-6 md:px-12 flex justify-between items-center text-white`}>
        <div className="flex items-center cursor-pointer" onClick={() => handleNavigation("/")}>
          <img
            src={Logo}
            alt="Construction Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>
        <ul className="hidden lg:flex items-center space-x-7 text-[15px] font-semibold uppercase tracking-wider">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative group cursor-pointer h-full py-2"
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`hover:text-orange-500 transition-colors flex items-center gap-1 ${(link.name === "Blog" || link.name === "Pages" || link.name === "Home") ? "text-orange-500" : ""
                  }`}
                onClick={() => !link.dropdown && handleNavigation(link.path)}
              >
                {link.name}
              </div>
              {link.dropdown && activeDropdown === link.name && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white text-gray-800 shadow-2xl border-t-4 border-orange-500 animate-fadeIn z-50">
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block px-5 py-3 hover:bg-gray-100 hover:text-orange-500 text-sm border-b border-gray-100 last:border-none font-medium capitalize"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-sm uppercase text-sm transition-all"
            onClick={() => handleNavigation("/contact")}
          >
            Contact Now
          </button>

          <div className="lg:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/95 z-[60] flex flex-col p-10 space-y-6 lg:hidden overflow-y-auto">
            <div className="flex justify-end">
              <X size={35} className="text-white" onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            {navLinks.map((link) => (
              <div key={link.name}>
                <div
                  className="text-white text-2xl font-bold uppercase flex justify-between items-center"
                  onClick={() => link.dropdown ? setActiveDropdown(activeDropdown === link.name ? null : link.name) : handleNavigation(link.path)}
                >
                  {link.name}
                </div>
                {link.dropdown && activeDropdown === link.name && (
                  <div className="ml-4 mt-2 flex flex-col space-y-3 border-l-2 border-orange-500 pl-4">
                    {link.dropdown.map(sub => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="text-orange-400 text-lg hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import LetsTalk from "./components/LetsTalk";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
import Page from "./pages/Page";
import ProjectDetail from "./pages/ProjectDetail";
import ServicesDetail from "./pages/ServicesDetail";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";


const Home = () => (
  <div>
    <Hero />
    <Services />
    <About />
    <Projects />
    <LetsTalk />
    <Team />
    <Testimonials />
    <Blog />
  </div>
);
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f172a]"> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-details" element={<BlogDetail />} />
          <Route path="/pages" element={<Page />} />
          <Route path="/project-details" element={<ProjectDetail />} />
          <Route path="/services-details" element={<ServicesDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       <ScrollToTop />
       <Footer />
       
      </div>
    </Router>
  );
}

export default App;

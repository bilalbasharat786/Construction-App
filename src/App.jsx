import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Ensure path sahi ho
import Hero from "./components/Hero"; // Ensure path sahi ho

const Home = () => (
  <div>
    <Hero />
  </div>
);
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f172a]"> {/* Background color for visibility */}
        
        {/* Navbar component yahan show hoga */}
        <Navbar />

        {/* Routes setup (Future pages ke liye) */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        {/* Scroll check karne ke liye extra space */}
        <div style={{ height: "200vh" }}></div> 
      </div>
    </Router>
  );
}

export default App;

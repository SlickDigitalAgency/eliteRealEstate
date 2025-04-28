import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/global/navbar/Navbar";
import Home from "@/pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar transparent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<div className="pt-20">Properties Page (Coming Soon)</div>} />
        <Route path="/about" element={<div className="pt-20">About Page (Coming Soon)</div>} />
        <Route path="/services" element={<div className="pt-20">Services Page (Coming Soon)</div>} />
        <Route path="/testimonials" element={<div className="pt-20">Testimonials Page (Coming Soon)</div>} />
        <Route path="/contact" element={<div className="pt-20">Contact Page (Coming Soon)</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
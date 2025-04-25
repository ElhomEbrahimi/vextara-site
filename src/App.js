import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import ResidentialPestControl from "./ResidentialPestControl";
import CommercialPestControl from "./CommercialPestControl";
import PestLibrary from "./PestLibrary";
import CockroachPage from "./CockroachPage";
import RodentPage from "./RodentPage";
import AntPage from "./AntPage";
import SpiderPage from "./SpiderPage";
import TermitePage from "./TermitePage";
import WhyChooseUs from "./WhyChooseUs";
import FAQs from "./FAQs";
import Contact from "./Contact";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="font-sans min-h-screen bg-gray-50">
        <nav className="bg-white shadow p-4 md:flex md:items-center md:justify-between flex-wrap">
          {/* Logo + Toggle Button */}
          <div className="flex justify-between items-center w-full md:w-auto">
            <span className="text-xl font-bold text-gray-800">Vextara</span>
            <button
              className="text-gray-800 text-2xl md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Navigation Links */}
          <div className={\`w-full \${menuOpen ? "block" : "hidden"} md:flex md:items-center md:justify-between\`}> 
            <div className="flex flex-wrap justify-between w-full text-center md:text-left text-sm md:text-base">
              <Link to="/" className="py-2 px-6 text-gray-800 font-semibold hover:text-green-600" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/residential" className="py-2 px-6 text-gray-800 font-semibold hover:text-green-600" onClick={() => setMenuOpen(false)}>Residential</Link>
              <Link to="/commercial" className="py-2 px-6 text-gray-800 font-semibold hover:text-green-600" onClick={() => setMenuOpen(false)}>Commercial</Link>
              <Link to="/pest-library" className="py-2 px-6 text-gray-800 font-semibold hover:text-green-600" onClick={() => setMenuOpen(false)}>Pest Library</Link>
              <Link to="/why-vextara" className="py-2 px-6 text-gray-800 font-semibold hover:text-green-600" onClick={() => setMenuOpen(false)}>Why Choose Us</Link>
              <Link to="/faqs" className="py-2 px-6 text-gray-800 font-semibold hover:text-green-600" onClick={() => setMenuOpen(false)}>FAQs</Link>
              <Link to="/contact" className="py-2 px-6 text-gray-800 font-semibold hover:text-green-600" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/residential" element={<ResidentialPestControl />} />
          <Route path="/commercial" element={<CommercialPestControl />} />
          <Route path="/pest-library" element={<PestLibrary />} />
          <Route path="/why-vextara" element={<WhyChooseUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pest-library/cockroaches" element={<CockroachPage />} />
          <Route path="/pest-library/rodents" element={<RodentPage />} />
          <Route path="/pest-library/ants" element={<AntPage />} />
          <Route path="/pest-library/spiders" element={<SpiderPage />} />
          <Route path="/pest-library/termites" element={<TermitePage />} />
        </Routes>
      </div>
    </Router>
  );
}

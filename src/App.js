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

  const navItems = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Residential", path: "/residential", icon: "🛏️" },
    { name: "Commercial", path: "/commercial", icon: "🏢" },
    { name: "Pest Library", path: "/pest-library", icon: "🐜" },
    { name: "Why Choose Us", path: "/why-vextara", icon: "💡" },
    { name: "FAQs", path: "/faqs", icon: "❓" },
    { name: "Contact", path: "/contact", icon: "📞" },
  ];

  return (
    <Router>
      <div className="font-sans min-h-screen bg-gray-50">
        <nav className="bg-green-700 shadow p-4 relative">
          {/* Hamburger icon */}
          <button
            className="absolute right-4 top-5 transform md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Logo Centered */}
          <div className="flex justify-center">
            <Link to="/">
              <img
                src="https://dummyimage.com/150x40/ffffff/2e7d32&text=Vextara"
                alt="Vextara Logo"
                className="h-12"
              />
            </Link>
          </div>

          {/* Nav Links */}
          <div className={`mt-4 md:flex md:justify-center ${menuOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-2 text-white hover:text-green-300 text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
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

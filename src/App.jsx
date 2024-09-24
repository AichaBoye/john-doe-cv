import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import LegalMentions from './pages/LegalMentions';
import Blog from './pages/Blog';
import Realisations from './pages/Realisations';
import Services from './pages/Services';
import Footer from './Footer';
import Profile from './pages/Profile';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="back">
          <p><Link to="/" className="john">JOHN DOE</Link></p>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/">Accueil</Link>
            <Link to="/services">Services</Link>
            <Link to="/realisations">Realisations</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Me contacter</Link>
            <Link to="/profile">Profil</Link>

          </nav>
          <button className="burger" onClick={toggleMenu}>
            {isMenuOpen ? '✖' : '☰'}
          </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legalMentions" element={<LegalMentions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;


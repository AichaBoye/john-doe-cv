import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import LegalMentions from './pages/LegalMentions';
import Blog from './pages/Blog';
import Realisations from './pages/Realisations';
import Services from './pages/Services';
import Footer from './Footer';
import Header from './Header';
import Profile from './pages/Profile';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legalMentions" element={<LegalMentions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;


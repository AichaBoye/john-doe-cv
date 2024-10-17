import { Route, Routes, Link } from "react-router-dom";
import { useState } from 'react';
import './Header.css'


function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
    return (

        // <header className="App-header">
        <header className="">
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-light">JOHN DOE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to="/services"  className="nav-link text-primary" aria-current="page">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/realisations"  className="nav-link text-primary" aria-current="page">Réalisations</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog"  className="nav-link text-primary" aria-current="page">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact"  className="nav-link text-primary" aria-current="page">Me contacter</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile"  className="nav-link text-primary" aria-current="page">Profil</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
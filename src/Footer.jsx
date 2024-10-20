import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
<>
      <footer className="container-fluid ">
        <div className=" bg-secondary-subtle row" >
          <div className="col-3">
          <h4>John Doe</h4>
          <p>40 Rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>Télèphone : 06 20 30 40 50</p>
          <div className="réseaux">
          <a href="https://github.com/AichaBoye/Marie.html" target="_blank" rel="nofollow noreferrer" className="github"><img className="réseaux" src="./github.svg" alt=""/></a>
          <a href="https://www.facebook.com/" className="linkedin" target="_blank" rel="nofollow noreferrer"><img className="réseaux" src="./linkedin.svg" alt=""/></a>
          <a href="https://www.instagram.com/aichaeboye/" className="twitter" target="_blank" rel="nofollow noreferrer"><img className="réseaux" src="./twitter.svg" alt=""/></a>
          
        </div>
          </div>
          <div className="col-3">
          <ul className="liens">
          <h4 className="titre">Liens utiles</h4>
          <ul className="li">
         <li> <a href="/">Accueil</a></li>
         <li><a href="/services">Services</a></li>
         <li><a href="/realisations">Realisations</a></li>
         <li><a href="/blog">Blog</a></li>
         <li><a href="/contact">Me contacter</a></li>
         <li><a href="/legalMentions">Mentions Légales</a></li>
         </ul>
        </ul>
          </div>
          <div className="col-3">
          <ul className="réaliser">
          <h4 className="titre">Mes dernieres réalisations</h4>
          <li><a href="/Fresh food">Fresh food</a></li>
          <li>Restaurant Akira</li>
          <li>Espace bien-etre</li>
        </ul>
          </div>
          <div className="col-3">
          <ul className="article">
          <h4 className="titre">Mes derniers articles</h4>
          <li>Coder son site en HTML/CSS</li>
          <li>Vendre ses produits sur le web</li>
          <li>Se positionner sur Google</li>
          
        </ul>
          </div>
        </div>
        <div className=" navbar navbar-expand-lg bg-dark top-100">
        <strong className=" col-12 col-md-6-col-sm-6"><p className=" text-center text-light p-0 ">@ Designe by John Doe</p></strong>
        
        </div>
      </footer>

        
</>
    )
}

export default Footer;


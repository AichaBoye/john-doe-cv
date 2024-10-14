import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <footer>
        <div className="footer">
        <div className="doe">
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
        <ul className="réaliser">
          <h4 className="titre">Mes dernieres réalisations</h4>
          <li><a href="/Fresh food">Fresh food</a></li>
          <li>Restaurant Akira</li>
          <li>Espace bien-etre</li>
        </ul>

        <ul className="article">
          <h4 className="titre">Mes derniers articles</h4>
          <li>Coder son site en HTML/CSS</li>
          <li>Vendre ses produits sur le web</li>
          <li>Se positionner sur Google</li>
          
        </ul>
        </div>

        <div>
        <strong className="copyright">@ Designe by John Doe</strong>
        
        </div>
</footer>
    )
}

export default Footer;


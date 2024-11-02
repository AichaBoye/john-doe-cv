import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
<>
      <footer className="container  p-0 ">
        <div className="row mx-4 py-4" >
          {/* grands écrans: col-lg-3, tablettes: col-md-6, smartphones: col-12 */}
          <div className="col-lg-3 col-md-6 col-12"> 
            <h4 className="text-start fs-5 fw-semibold">John Doe</h4>
            <p className="py-0 my-0">40 Rue Laure Diebold</p>
            <p className="py-0 my-0">69009 Lyon, France</p>
            <p className="py-0 my-0">Télèphone : 06 20 30 40 50</p>
            <div className="my-3 d-flex justify-content-start reseaux">
              <a href="https://github.com/AichaBoye/Marie.html" target="_blank" rel="nofollow noreferrer" className="github"><img className="icone" src="./github.svg" alt=""/></a>
              <a href="https://www.facebook.com/" className="linkedin" target="_blank" rel="nofollow noreferrer"><img className="icone" src="./linkedin.svg" alt=""/></a>
              <a href="https://www.instagram.com/aichaeboye/" className="twitter" target="_blank" rel="nofollow noreferrer"><img className="icone" src="./twitter.svg" alt=""/></a>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6 col-12">
              <h4 className="text-start fs-5 fw-semibold">Liens utiles</h4>
              <ul className="li text-start">
                <li> <a href="/">Accueil</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/realisations">Realisations</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Me contacter</a></li>
                <li><a href="/legalMentions">Mentions Légales</a></li>
              </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <h4 className="text-start fs-5 fw-semibold">Mes dernieres réalisations</h4>
            <ul className="text-start">
              <li><a href="/Fresh food">Fresh food</a></li>
              <li>Restaurant Akira</li>
              <li>Espace bien-etre</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <ul className="text-start">
              <h4 className="text-start fs-5 fw-semibold">Mes derniers articles</h4>
              <li>Coder son site en HTML/CSS</li>
              <li>Vendre ses produits sur le web</li>
              <li>Se positionner sur Google</li>
            </ul>
          </div>
        </div>
        <div className=" navbar navbar-expand-lg bg-dark top-100">
          <div className="container text-center col-lg-3 col-md-6 col-12">
          <strong><p className="text-light">@ Designe by John Doe</p></strong>
          </div>
        </div>
      </footer>

        
</>
    )
}

export default Footer;


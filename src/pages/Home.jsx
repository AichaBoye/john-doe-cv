import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const competences = [
  { nom: "HTML5 90%",  color: "#b50d1a" },
  { nom: "CSS3 80%",  color: "#0ac4cd" },
  { nom: "JAVASCRIPT 70%",  color: "#d9d900" },
  { nom: "PHP 60%",  color: "#005e00" },
  { nom: "REACT 50%",  color: "#0d6efd" },
];

const Doe = () => {
  return (
    <div className="profil-container row">
      {/* <div className="a-propos col-6"> */}
      <div className="col-12 col-md-6">
        <h2 className="titre">À propos</h2>
        <p className="tire"></p>
        <p>
        Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit. 
        Integer mattis ante id velit posuere tristique sit amet congue ipsum. 
        Etiam odio quam, scelerisque non tempor id,<strong> varius at turpis.</strong> </p>
        <p> Integer cursus odio quis ante faucibus, quis semper justo accumsan. 
        Aenean ac augue maximus, <strong>placerat neque at, blandit diam</strong>. </p>
        <p>Maecenas fringilla nibh arcu, at vestibulum enim consequat eget.
        </p>
      </div>
      {/* <div className="competences col-6"> */}
      <div className="col-12 col-md-6">
        <img src="imagedeveloppeur.jpeg" alt="description" />
        <h2 className="titre">Mes compétences</h2>
        {competences.map((competence, index) => (
          <div key={index} className="competence">
            <span>{competence.nom}</span>
            <div className="bar-container">
              <div
                className="progress-bar"
                style={{
                  width: `${competence.pourcentage}%`,
                  backgroundColor: competence.color,
                }}
              ></div>
            </div>
            <span>{competence.pourcentage}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      <div className="background-image">
        <div className="overlay">
          <h1 className="titre">Bonjour, je suis John Doe</h1>
          <h2 className="titre">Développeur Web Full Stack</h2>
          <a href="#about" className="button">En savoir plus</a>
        </div>
      </div>

      {/* Section À propos */}
      <section id="about" className="about-section">
        <Doe />
      </section>
    </div>
  );
};

export default Home;

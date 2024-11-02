import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const competences = [
  { nom: "HTML5 90%", pourcentage:90, color: "#b50d1a" },
  { nom: "CSS3 80%", pourcentage:80, color: "#0ac4cd" },
  { nom: "JAVASCRIPT 70%", pourcentage:70, color: "#d9d900" },
  { nom: "PHP 60%", pourcentage:60, color: "#005e00" },
  { nom: "REACT 50%", pourcentage:50, color: "#0d6efd" },
];

const DoeBis = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12 mb-4">
          <h2 className=" text-start mt-3">À propos</h2>
          <hr className="border border-primary border-1 opacity-100"/>
          <p className="p1">Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit. Integer mattis ante id velit posuere tristique sit amet congue ipsum.   Etiam odio quam, scelerisque non tempor id,<strong> varius at turpis.</strong></p>
          <p className="p1">Integer cursus odio quis ante faucibus, quis semper justo accumsan. Aenean ac augue maximus, <strong>placerat neque at, blandit diam</strong>.</p>
          <p className="p1">Maecenas fringilla nibh arcu, at vestibulum enim consequat eget.</p>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <img src="imagedeveloppeur.jpeg" alt="description" className="img-fluid mb-4 mt-3" style={{ width: '100%', height: 'auto' }}/>
          <h2 className="text-start ">Mes compétences</h2>
          {competences.map((competence, index) => (
            <div key={index} className="competence text-start">
              <span>{competence.nom}</span>
              <div className="bar-container">
                <div
                  className="progress-bar "
                  style={{
                    width: `${competence.pourcentage}%`,
                    backgroundColor: competence.color,
                  }}
                ></div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      <div className="background-image w-100">
        <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="titre display-8">Bonjour, je suis John Doe</h1>
          <h2 className="titre display-9">Développeur Web Full Stack</h2>
          <a href="#about" className="btn btn-primary ">En savoir plus</a>
        </div>
      </div>

      {/* Section À propos */}
      <DoeBis />
    </div>
  );
};

export default Home;

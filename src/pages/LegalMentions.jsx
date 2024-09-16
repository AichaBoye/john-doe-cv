import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './LegalMentions.css'

const MentionsLegales = () => {
  return (
    <>
      <div className="legal">
        <h1>Mentions Légales</h1>
        <p className="ligne"></p>
        <Accordion className="accordion">
          <Accordion.Item eventKey="loy">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body className="edit">
              <p className="grand-texte">John Doe</p>
          <p> <img className="coordo" src="./location.svg" alt=""/>40 Rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p className="cord"> <img className="coordo" src="./mobile.svg" alt=""/>06 20 30 40 50</p>
          <p className="cord"> <img className="coordo" src="./envelope.svg" alt=""/>johndoe@gmail.com</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body className="edit">
              <p className="grand-texte">Always Data</p>
              <p> 91 rue Adresse de l'hébergeur</p>
              <p>75003 Paris</p>
              <p className="cord"><img className="coordo" src="./globe.svg" alt=""/> <a href="https://www.alwaysdata.com/fr/" target="_blank" rel="noopener noreferrer"></a>www.alwaysdata.com</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body className="edit">
            <p className="grand-texte">Crédits</p>
            <p>Site developper par John Doe, étudiant du CEF.</p>
              <p>Les images libres de droit sont issues du site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>.</p>
              
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default MentionsLegales;
 
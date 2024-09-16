// src/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérification des champs sont remplis
    if (Object.values(formData).some((x) => x === "")) {
      alert("Tous les champs sont obligatoires !");
      return;
    }
    // Envoyer le formulaire
    console.log(formData);
    alert("Formulaire soumis !");
  };

  return (
    <div className="contact-container">
       
      <div className="form-section">

        <h2 className="egal">Formulaire de contact</h2>
        <p className="tire"></p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Votre adresse email"
            required
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Votre numéro de téléphone"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            required
            onChange={handleChange}
          />
          <textarea className="message"
            name="message"
            placeholder="Votre message"
            required
            onChange={handleChange}
          />
          <button type="submit">Envoyer</button>
        </form>

        <div className="contact-info">
          <div className='cont'>
          <h2 className="egal">Mes coordonnées</h2>
          <p className="tire"></p>
          <p className="egal">
          40 Rue Laure Diebold, 69009 Lyon, France
          </p>
          <p className="egal">
          06 20 30 40 50
          </p>
          </div>
          <div> 
          <a href="#" target="_blank" rel="noreferrer" className="telephone"><img className="coordonees" src="./mobile.svg" alt=""/></a>
          <a href="https://www.facebook.com/" location="fa fa-linkedin"><img className="coordonees" src="./location.svg" alt=""/></a>
          </div>
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092905!2d144.95373631531646!3d-37.81720997975119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11c4a5%3A0x5045675218cee3e7!2s123%20Rue%20Exemple%2C%20Melbourne%20VIC%2C%20Australie!5e0!3m2!1sfr!2sfr!4v1605692378520!5m2!1sfr!2sfr"
              width="400"
              height="300"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

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
    if (Object.values(formData).some((x) => x === "")) {
      alert("Tous les champs sont obligatoires !");
      return;
    }
    console.log(formData);
    alert("Formulaire soumis !");
  };

  return (
    <div className="imagge container-fluid py-5">
      <div className="container bg-white">
        <h2 className="text-center mb-4">ME CONTACTER</h2>
        <p className="text-center mb-4">
          Pour me contacter au vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
        </p>
        <hr className="mx-auto border-primary border-3 opacity-100 mb-4" style={{ maxWidth: "350px" }} />

        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <h3>Formulaire de contact</h3>
            <hr className="border-primary border-2 opacity-100 mb-3" style={{ maxWidth: "350px" }} />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                required
                onChange={handleChange}
                className="form-control mb-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre adresse email"
                required
                onChange={handleChange}
                className="form-control mb-2"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Votre numéro de téléphone"
                required
                onChange={handleChange}
                className="form-control mb-2"
              />
              <input
                type="text"
                name="subject"
                placeholder="Sujet"
                required
                onChange={handleChange}
                className="form-control mb-2"
              />
              <textarea
                className="form-control mb-2"
                name="message"
                placeholder="Votre message"
                required
                onChange={handleChange}
                rows={4}
              />
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <h3>Mes coordonnées</h3>
            <hr className="border-primary border-2 opacity-100 mb-3" style={{ maxWidth: "350px" }} />
            <p>
              <a href="Téléphone" target="_blank" rel="noreferrer" className="text-decoration-none">
                <img className="coordonees" src="./mobile.svg" alt="Téléphone" />
              </a> 
              40 Rue Laure Diebold, 69009 Lyon, France
            </p>
            <p>
              <a href="https://www.facebook.com/" className="text-decoration-none">
                <img className="coordonees" src="./location.svg" alt="Localisation" />
              </a> 
              06 20 30 40 50
            </p>
            <div className="map-container mt-4">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092905!2d144.95373631531646!3d-37.81720997975119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11c4a5%3A0x5045675218cee3e7!2s123%20Rue%20Exemple%2C%20Melbourne%20VIC%2C%20Australie!5e0!3m2!1sfr!2sfr!4v1605692378520!5m2!1sfr!2sfr"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import "./Services.css";

const services = [
  {
    title: "UX/Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis ante id velit.",
    imgSrc: "https://tse1.mm.bing.net/th?id=OIP.55PpWLFQb2d-DFIpvwTFtgHaHa&pid=Api&P=0&h=180",
  },
  {
    title: "Développement Web",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis ante id velit.",
    imgSrc: "https://tse2.mm.bing.net/th?id=OIP.aOCp40r7ChHeBTfG2czrzgHaHa&pid=Api&P=0&h=180",
  },
  {
    title: "Référencement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis ante id velit.",
    imgSrc: "https://tse2.mm.bing.net/th?id=OIP.Z1sew0JI0xHDEOjj3D3qpAAAAA&pid=Api&P=0&h=180",
  },
];

const Services = () => {
  return (
    
    <div style={{ padding: "100px" }} className="serv">
      <div > 
    <img src="https://tse1.mm.bing.net/th?id=OIP.d6HYWAOutXm3os4WIlGXGAHaFS&pid=Api&P=0&h=180" className="bac" alt="description" />
    </div>
      <h1>Nos Services</h1>
      <p>Découvrez nos différentes offres de service adaptées à vos besoins.</p>
      <p className="ligne"></p>
      <div className="card-container">
        {services.map((service, index) => (
          <div key={index} style={{ margin: "20px 0" }} className="card2">
            <img src={service.imgSrc} className="glass" alt={service.title} style={{ width: "50px", height: "50px",}} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

import React from "react";


const services = [
  {
    title: "UX/Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis ante id velit. Lorem ipsum dolor sit amet, consectetur .",
    imgSrc: "https://tse1.mm.bing.net/th?id=OIP.55PpWLFQb2d-DFIpvwTFtgHaHa&pid=Api&P=0&h=180",
  },
  {
    title: "Développement Web",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis ante id velit. Lorem ipsum dolor sit amet, consectetur .",
    imgSrc: "https://tse2.mm.bing.net/th?id=OIP.aOCp40r7ChHeBTfG2czrzgHaHa&pid=Api&P=0&h=180",
  },
  {
    title: "Référencement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis ante id velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "https://tse2.mm.bing.net/th?id=OIP.Z1sew0JI0xHDEOjj3D3qpAAAAA&pid=Api&P=0&h=180",
  },
];

const Services = () => {
  return (
    
    <div className="container bg-light col-12">
    <h1 className="text-center">MON OFFRE DE SERVICES</h1>
    <p className="text-center">Découvrez nos différentes offres de service adaptées.</p>
    <hr className="lign mx-auto border-primary border-3 opacity-100" style={{ maxWidth: "350px", width: "100%" }} />
  
    <div className="row">
      {services.map((service, index) => (
        <div className="col-12 col-md-4" key={index} style={{ margin: "20px 0" }}>
          <div className="card" style={{ height: "20rem" }}>
            <img src={service.imgSrc} className="card-img-top mx-auto d-block" alt={service.title} style={{ width: "50px", height: "50px" }} />
            <div className="card-body">
              <h2 className="card-title">{service.title}</h2>
              <p className="card-text">{service.description}</p>
            </div>
          </div>
        </div>

        ))}
      </div>
    </div>
  );
};

export default Services;

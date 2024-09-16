// src/components/ArticleCard.js
import React from "react";

const ArticleCard = ({ title, content, image }) => {
  return (
    <div className="card mb-4">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a href="#" className="btn-primary">
          Lire plus
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
// src/components/Blog.js
import React from "react";
import ArticleCard from "./ArticleCard";


const articles = [
  {
    title: "Coder son site en HTML/CSS",
    content: "Ceci est un résumé de l'article.",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.RK9qF8fKSyyndksfZiYNpwHaFF&pid=Api&P=0&h=180",
  },
  {
    title: "Vendre ses produits sur le web",
    content: "Ceci est un résumé de l'article.",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.LULAQbhx2mm5rNabIBQC9AHaEq&pid=Api&P=0&h=180",
  },
  {
    title: "Se positionner sur google",
    content: "Ceci est un résumé de l'article.",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.saPBtlCAh-4pHu4-2HwrFQHaFI&pid=Api&P=0&h=180",
  },
  {
    title: "Coder en responsive design",
    content: "Ceci est un résumé de l'article.",
    image: "https://tse1.mm.bing.net/th?id=OIP.GeJlvHJwuKNWYmhf13ImagHaEd&pid=Api&P=0&h=180",
  },
  {
    title: "Technique de réfèrencement",
    content: "Ceci est un résumé de l'article.",
    image:
      "https://tse2.mm.bing.net/th?id=OIP._061lI4sVv83J2XVB6PyTgHaEj&pid=Api&P=0&h=180",
      description:"coucou comment çava",
  },
  {
    title: "Apprendre à coder",
    content: "Ceci est un résumé de l'article.",
    tools: 'Site réalisée avec PHP et MySQL',
    image:
      "https://tse2.mm.bing.net/th?id=OIP.mruNWgYPRRfB6tO3tUmbAwHaE8&pid=Api&P=0&h=180",
  },
];

const Blog = () => {
  return (
    <div className="container bg-white">
      <div > 
    <img src="https://tse1.mm.bing.net/th?id=OIP.d6HYWAOutXm3os4WIlGXGAHaFS&pid=Api&P=0&h=180" className="ba" alt="description" />
    </div>
      <h1 className="text-center">Mon Blog</h1>
      <h6 className="text-center">Retrouvez ici quelques articles sur le développement web.</h6>
      <hr className="lign mx-auto border-primary border-3 opacity-100" style={{ maxWidth: "350px", width: "100%" }} />
      <div className="row m-5">
        {articles.map((article, index) => (
          <div className=" col-lg-4 col-md-6 col-12 mb-4" key={index}>
            <ArticleCard className="col-lg-4 col-md-6 col-12 mb-4"
              title={article.title}
              content={article.content}
              image={article.image}
              description={article.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
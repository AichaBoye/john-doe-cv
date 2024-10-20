import React, { useState } from "react";
import Gob from './Gob';

const RealisationPage = () => {
    const projects = [
        {
            title: 'Fresh food',
            description: 'Réalisation site avec commande en ligne.',
            tools: 'Site réalisée avec PHP et MySQL',
            imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.QAR3riyO-7-iL1cSsng6fgHaE7&pid=Api&P=0&h=180'
        },
        {
            title: 'Restaurant Akira',
            description: "Réalisation d'un site vitrine",
            tools: 'Site réalisée avec WordPress',
            imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.4FRo9YqIqJJuaVCucx25CAHaE7&pid=Api&P=0&h=180'
        },
        {
            title: 'Espace bien-etre',
            description: "Réalisation d'un site vitrine pour un patricien de bien-etre.",
            tools: 'Site réalisée en HTML/CSS',
            imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.Jat0siJOruWzxHVBrJ4-uwAAAA&pid=Api&P=0&h=180'
        }
    ];

    return (
        <div className="port">
            <div > 
    <img src="https://tse1.mm.bing.net/th?id=OIP.d6HYWAOutXm3os4WIlGXGAHaFS&pid=Api&P=0&h=180" className="ba2" alt="description" />
    </div>
            <h1 className="card-title text-center">Portfolio</h1>
            <p className="text-center">Voici quelques-unes de mes réalisations.</p>
            <p className="ligne text-center" style={{width: "120rem",}}></p>
            <div className="m5">
                {projects.map((project, index) => (
                    <div className="col-md-4" key={index}>
                        <Gob 
                            title={project.title}
                            description={project.description}
                            tools={project.tools}
                            imgSrc={project.imgSrc}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RealisationPage;

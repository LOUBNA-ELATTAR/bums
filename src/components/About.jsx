import React from "react";

const About = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="w-11/12 md:w-4/5 lg:w-3/5 m-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 p-5 space-y-5">
          <h1 className="text-5xl font-bold">Actualités</h1>
          <p className="text-xs md:text-sm text-gray-400">
          La Bibliothèque Universitaire Mohamed Sekkat est un véritable trésor de connaissances et d'opportunités 
          pour les étudiants, les chercheurs et les passionnés de tous les domaines. En tant que cœur intellectuel de 
          l'université, cette bibliothèque offre un vaste éventail de ressources et de services pour soutenir 
          l'apprentissage, la recherche et l'épanouissement académique. 
          </p>
          <button className="px-5 py-2 rounded-md bg-orange-500 text-white">Voir toutes les Actualités</button>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3">
            <img src="./image6.jpg" alt="" className="w-full"/>
        </div>
      </div>
    </div>
  );
};

export default About;

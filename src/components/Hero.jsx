import React from "react";

const Hero = () => {
  return (
    <div className="py-10">
      <div className="w-full h-[500px] rounded-md bg-[url('./lib.jpg')] bg-cover">
        <div className="w-full md:w-4/5 lg:w-1/2 2xl:w-1/3 bg-gradient-to-r from-gray-600 h-full flex flex-col justify-center space-y-5 p-5 text-white rounded-md">
          <h1 className="text-3xl md:text-5xl font-bold">BUMS</h1>
          <p className="text-sm md:text-base">
          La Bibliothèque Universitaire Mohamed Sekkat est un véritable trésor de connaissances et d'opportunités 
          pour les étudiants, les chercheurs et les passionnés de tous les domaines. En tant que cœur intellectuel de 
          l'université, cette bibliothèque offre un vaste éventail de ressources et de services pour soutenir 
          l'apprentissage, la recherche et l'épanouissement académique. 
          </p>
          <div className="flex items-center">
            <input 
            type="text" 
            placeholder="Rechercher un livre"
            className="px-5 py-2 bg-white rounded-l-md text-gray-500 outline-0" />
            <button className="px-5 py-2 bg-orange-500 font-bold rounded-r-md">Rechercher</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React, { useState } from 'react';

function Navbar() {
  const [showLiensUtilesDropdown, setShowLiensUtilesDropdown] = useState(false);
  const [showGuidesDropdown, setShowGuidesDropdown] = useState(false);

  const toggleLiensUtilesDropdown = () => {
    setShowLiensUtilesDropdown(!showLiensUtilesDropdown);
  };

  const toggleGuidesDropdown = () => {
    setShowGuidesDropdown(!showGuidesDropdown);
  };

  return (
    <div className="p-5 flex justify-between items-center">
      <h1 className="font-adora text-5xl font-semibold">BUMS</h1>
      <ul className="hidden md:flex space-x-8">
        <li className="hover:border-b border-orange-500">Accueil</li>
        <li className="hover:border-b border-orange-500">Livres</li>
        <li className="hover:border-b border-orange-500">Nouveautés</li>
        <li className="hover:border-b border-orange-500">Actualités</li>
        <li
          className={`hover:border-b border-orange-500 relative ${
            showLiensUtilesDropdown ? 'text-black-500' : ''
          }`}
          onMouseEnter={toggleLiensUtilesDropdown}
          onMouseLeave={toggleLiensUtilesDropdown}
        >
          Liens utiles
          {showLiensUtilesDropdown && (
            <ul className="absolute left-0 mt-1 py-2 bg-white border border-gray-200 rounded-md shadow-lg">
              <li>
                <a href="http://bums.univh2c.ma/" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                  Site Web de la BUMS
                </a>
              </li>
              <li>
                <a href="https://www.univh2c.ma/" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                  Site Web de l'UH2C
                </a>
              </li>
              <li>
                <a href="http://muc.deepwebaccess.com/mucsearch-fr/desktop/fr/search.html" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                  Catalogue du Maroc
                </a>
              </li>
              <li>
                <a href="http://opac.bnrm.ma:8000/cgi-bin/gw_2011_1_2/chameleon/" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                  Catalogue BNRM
                </a>
              </li>
              <li>
                <a href="https://opac.imist.ma/" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                  Catalogue IMIST
                </a>
              </li>
              <li>
                <a href="http://www.fondation.org.ma/web/accueil" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                  Catalogue Al Saoud
                </a>
              </li>
            </ul>
          )}
        </li>
        <li
          className={`hover:border-b border-orange-500 relative ${
            showGuidesDropdown ? 'text-black-500' : ''
          }`}
          onMouseEnter={toggleGuidesDropdown}
          onMouseLeave={toggleGuidesDropdown}
        >
          Guides et Règlements
          {showGuidesDropdown && (
            <ul className="absolute left-0 mt-1 py-2 bg-white border border-gray-200 rounded-md shadow-lg">
              <li>
                <a href="http://bums.univh2c.ma/" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                  Guide du lecteur
                </a>
              </li>
              <li>
                <a href="https://www.univh2c.ma/" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                  Guide d'utilisation du catalogue
                </a>
              </li>
              <li>
                <a href="http://muc.deepwebaccess.com/mucsearch-fr/desktop/fr/search.html" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                  Règlement de prêt
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div className="flex items-center space-x-5">
        <button className="px-5 py-2 rounded bg-orange-500 text-white font-bold">
          Connexion
        </button>
      </div>
    </div>
  );
}

export default Navbar;

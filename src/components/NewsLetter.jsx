import React from "react";

const NewsLetter = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="py-10 w-11/12 md:w-4/5 xl:w-1/3 mx-auto flex flex-col items-center text-center space-y-5 ">
        <h1 className="text-3xl font-bold">Connectez-vous</h1>
        <p className="text-sm">
          Qui peut se connecter à son compte lecteur ? 
          Dès votre inscription à la bibliothèque, votre compte lecteur est activé. <br />
          Comment connaître mon identifiant et mon mot de passe ?
          Votre identifiant et votre mot de passe correspondent initialement à votre numéro CIN.<br />
          Dès votre première connexion, vous pouvez changer votre mot de passe.<br />
          Pas de carte de la bibliothèque ?
          Si vous n'avez pas de carte d'usager, passez à la bibliothèque pour vous inscrire.
        </p>
        <form  className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Identifiant"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
          <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded-md">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;

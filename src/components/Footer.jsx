import React from 'react'
const Footer = () => {
  return (
    <div className='w-full py-10 bg-gray-950 text-gray-200'>
        <div className='w-1/2 m-auto flex flex-col justify-center items-center space-y-10'>
            <h1 className='text-5xl font-adora'>BUMS</h1>
            <div>
                <ul className='flex space-x-5'>
                    <li>Home</li>
                    <li>Livres</li>
                    <li>Nouveautés</li>
                    <li>Actualités</li>
                </ul>
            </div>
            <div className="flex items-center space-x-10">
          <p className="text-sm text-center">
            © Tous droits réservés 2023 | Bibliothèque Universitaire Mohamed Sekkat
            <br />
            Site web <a href="http://bums.univh2c.ma/" className="text-gray-200 underline">http://bums.univh2c.ma/</a>
            <br />
            E-mail : bumsunivcasa@gmail.com
            <br />
            Tél : +212 666 036 169 / 666 035 560
          </p>
        </div>
        </div>
    </div>
  )
}

export default Footer
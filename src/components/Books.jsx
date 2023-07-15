import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {IoLocationOutline} from 'react-icons/io5'
const Books = () => {
  return (
    <div className='py-10'>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Les livres les plus populaires</h1>
        </div>
        
        <div className="places py-10 grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 justify-items-center">
            <div className="place w-[280px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
                <div className='w-full h-[150px] md:h-[230px]'>
                    <img src="./livre.jpeg" alt="" className='w-full h-full object-cover rounded-lg'/>
                </div>
                <div className='p-2 space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h1>Comptabilité Analytique D'exploitation</h1>
                        <p className='flex items-center space-x-2'>
                            <span>678prêts</span>
                        </p>
                    </div>
                    <p className='flex items-center space-x-2 text-gray-400'> <span>Brahim AAOUID - Editions Maghrébines 2014 - 1 volume de 245 pages : 24 cm.</span></p>
                </div>
            </div>
            <div className="place w-[280px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
                <div className='w-full h-[150px] md:h-[230px]'>
                    <img src="./livre.jpeg" alt="" className='w-full h-full object-cover rounded-lg'/>
                </div>
                <div className='p-2 space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h1>Comptabilité Analytique D'exploitation</h1>
                        <p className='flex items-center space-x-2'>
                            <span>678prêts</span>
                        </p>
                    </div>
                    <p className='flex items-center space-x-2 text-gray-400'> <span>Brahim AAOUID - Editions Maghrébines 2014 - 1 volume de 245 pages : 24 cm.</span></p>
                </div>
            </div>   
            <div className="place w-[280px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
                <div className='w-full h-[150px] md:h-[230px]'>
                    <img src="./livre.jpeg" alt="" className='w-full h-full object-cover rounded-lg'/>
                </div>
                <div className='p-2 space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h1>Comptabilité Analytique D'exploitation</h1>
                        <p className='flex items-center space-x-2'>
                            <span>678prêts</span>
                        </p>
                    </div>
                    <p className='flex items-center space-x-2 text-gray-400'> <span>Brahim AAOUID - Editions Maghrébines 2014 - 1 volume de 245 pages : 24 cm.</span></p>
                </div>
            </div>   
            <div className="place w-[280px] md:w-[330px] h-auto bg-white border rounded-lg p-4">
                <div className='w-full h-[150px] md:h-[230px]'>
                    <img src="./livre.jpeg" alt="" className='w-full h-full object-cover rounded-lg'/>
                </div>
                <div className='p-2 space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h1>Comptabilité Analytique D'exploitation</h1>
                        <p className='flex items-center space-x-2'>
                            <span>678prêts</span>
                        </p>
                    </div>
                    <p className='flex items-center space-x-2 text-gray-400'> <span>Brahim AAOUID - Editions Maghrébines 2014 - 1 volume de 245 pages : 24 cm.</span></p>
                </div>
            </div>             
        </div>
        
    </div>
  )
}

export default Books
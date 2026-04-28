import React from 'react'
import { hostcitiesvenues } from '../assets/assets'

const HostCityVenues = () => {
  return (
    <div className='container mx-auto p-4'>
      <div>
        <p className='tracking-[3px] font-medium'>STADIUMS</p>
        <p className='text-2xl md:text-4xl font-mono font-bold'>Host Cities & Venues</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 mt-5 '>
              {
        hostcitiesvenues.map((item,index)=>(
            <div key={index} className='flex flex-1 sm:flex-2 md:flex-3 lg:flex-4 gap-5 items-center  p-5 border rounded-xl hover:bg-amber-100 cursor-pointer'>
                <div>
                    <p className='rounded-full p-6 bg-gray-100'>{item.stadium_code}</p>
                </div>
                <div>
                    <p>{item.venue}</p>
                    <p>Capa - {item.capacity}</p>
                </div>
                <div>
                    <p>{item.city}</p>
                    <p>{item.country}</p>
                </div>

            </div>
        ))
      }
      </div>
      
    </div>
  )
}

export default HostCityVenues

import React from 'react'

const SelectSeat = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-mono font-bold'>Choose seat category</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-5 items-center p-4'>
            <div className='bg-green-100 p-4 rounded-2xl hover:cursor-pointer hover:bg-green-200'>
              <p className='text-md sm:text-lg md:text-2xl font-sans font-medium mb-2'>VIP Box</p>
              <p className='text-sm font-light text-black mb-2'>$150</p>
              <p className='text-sm text-red-400 font-medium'>45 seats left</p>
              <button className='px-4 py-2 bg-amber-400 mt-2 rounded-lg'>Gold</button>
            </div>

            <div className='bg-amber-100 p-4 rounded-2xl hover:cursor-pointer hover:bg-amber-200'>
              <p className='text-md sm:text-lg md:text-2xl font-sans font-medium mb-2'>Premium</p>
               <p className='text-sm font-light text-black mb-2'>$100</p>
              <p className='text-sm text-red-900 font-medium'>60 seats left</p>
              <button className='px-4 py-2 bg-blue-200 mt-2 rounded-lg text-black '>Blue Tier</button>
            </div>
            <div className='bg-gray-100 p-4 rounded-2xl hover:cursor-pointer hover:bg-gray-200'>
              <p className='text-md sm:text-lg md:text-2xl font-sans font-medium mb-2'>General</p>
              <p className='text-sm font-light text-black mb-2'>$50</p>
              <p className='text-sm text-emerald-400 font-medium'>150 seats left</p>
              <button className='px-4 py-2 rounded-lg bg-black text-white mt-2'>Open</button>
            </div>
      </div>
    </div>
  )
}

export default SelectSeat

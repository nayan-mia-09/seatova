import React from 'react'

const KeyFacts = () => {
  return (
    <div className='container mx-auto p-4'>
        <div className='mt-5 mb-2'>
            <p className='font-mono tracking-[3px]'>TOURNAMENT AT A GLANCE</p>
            <p className='text-2xl md:text-4xl font-semibold'>Key Facts</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-center text-center mt-5'>
            <div className='border rounded-xl shadow-sm hover:shadow-md  overflow-hidden text-center p-4 hover:bg-gray-100 hover:border-none cursor-pointer transition-all duration-300'>
                <p className='text-3xl md:text-5xl font-mono font-bold'>48</p>
                <p>Teams</p>
            </div>
            <div className='border rounded-xl shadow-sm hover:shadow-md  overflow-hidden text-center p-4 hover:bg-gray-100 hover:border-none cursor-pointer transition-all duration-300'>
                <p className='text-3xl md:text-5xl font-mono font-bold'>104</p>
                <p>Matches</p>
            </div>
            <div className='border rounded-xl shadow-sm hover:shadow-md  overflow-hidden text-center p-4 hover:bg-gray-100 hover:border-none cursor-pointer transition-all duration-300'>
                <p className='text-3xl md:text-5xl font-mono font-bold'>16</p>
                <p>Host cites</p>
            </div>
            <div className='border rounded-xl shadow-sm hover:shadow-md  overflow-hidden text-center p-4 hover:bg-gray-100 hover:border-none cursor-pointer transition-all duration-300'>
                <p className='text-3xl md:text-5xl font-mono font-bold'>39</p>
                <p>Days</p>
            </div>
        </div>
    </div>
  )
}

export default KeyFacts

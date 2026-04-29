import React from 'react'

const TopPlayers = () => {
  return (
    <div className='container mx-auto p-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5'>

            <div className='text-center  rounded-lg p-6 bg-blue-200'>
                <span className='text-3xl p-2 rounded-full border mt-5 bg-green-100'>EH</span>
                <p className='mt-3 font-bold'>E. Haaland</p>
                <p className='text-sm'>Man City</p>
                <p className='text-3xl font-mono font-bold'>2</p>
                <p className='text-sm'>Goals</p>
            </div>
            <div className='text-center  rounded-lg p-6 bg-blue-200'>
                <span className='text-3xl p-2 rounded-full border mt-5 bg-green-100'>MS</span>
                <p className='mt-3 font-bold'>M. Salah</p>
                <p className='text-sm'>Liverpool</p>
                <p className='text-3xl font-mono font-bold'>1+2</p>
                <p className='text-sm'>Goal+Assits</p>
            </div>
            <div className='text-center rounded-lg p-6 bg-blue-200'>
                <span className='text-3xl p-2 rounded-full border mt-5 bg-green-100'>BS</span>
                <p className='mt-3 font-bold'>B. Saka</p>
                <p className='text-sm'>Arsenal</p>
                <p className='text-3xl font-mono font-bold'>1</p>
                <p className='text-sm'>Goal 8.0 rating</p>
            </div>
            <div className='text-center  rounded-lg p-6 bg-blue-200'>
                <span className='text-3xl p-2 rounded-full border mt-5 bg-green-100'>KM</span>
                <p className='mt-3 font-bold'>K. Mbappe</p>
                <p className='text-sm'>Real Madrid</p>
                <p className='text-3xl font-mono font-bold'>3</p>
                <p className='text-sm'>Assits</p>
            </div>

        </div>
    </div>
  )
}

export default TopPlayers

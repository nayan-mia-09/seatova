import React from 'react'

const UpcomingFixture = () => {
  return (
    <div className='container mx-auto p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5'>
        {/* Card 1 */}
           <div className='flex justify-between p-4 border border-gray-300  rounded-2xl hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer'>
            <div className='flex gap-5 items-center'>
              <p className='text-sm'>Tue 30 Apr</p>
              <div>
                <p className='text-md font-bold'>Real Madrid vs Atletico</p>
                <p className='text-md  font-mono'>La Liga . Matchday 34</p>
              </div>
            </div>
            <div className='flex items-center font-mono'>
             <p>19:00</p>
            </div>
           </div>
           {/* Card 2 */}
             <div className='flex justify-between p-4 border border-gray-300  rounded-2xl hover:bg-gray-500 hover:text-white transition-all duration-300'>
            <div className='flex gap-5 items-center cursor-pointer'>
              <p className='text-sm'>Sat 3 May</p>
              <div>
                <p className='text-md font-bold'>Liverpool vs Spurs</p>
                <p className='text-md font-mono'>Premier League · GW 35</p>
              </div>
            </div>
            <div className='flex items-center font-mono'>
             <p>17:30</p>
            </div>
           </div>
           {/* Card 3 */}
             <div className='flex justify-between p-4 border border-gray-300  rounded-2xl hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer'>
            <div className='flex gap-5 items-center'>
              <p className='text-sm'>Sun 4 May</p>
              <div>
                <p className='text-md font-bold'>Bayern vs Leipzig</p>
                <p className='text-md font-mono'>Bundesliga · Matchday 33</p>
              </div>
            </div>
            <div className='flex items-center font-mono'>
             <p>15:30</p>
            </div>
           </div>
           {/* Card 4 */}
             <div className='flex justify-between p-4 border border-gray-300  rounded-2xl hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer'>
            <div className='flex gap-5 items-center'>
              <p className='text-sm'>Wed 1 May</p>
              <div>
                <p className='text-md font-bold'>PSG vs Lyon</p>
                <p className='text-md  font-mono'>Ligue 1 · Matchday 32</p>
              </div>
            </div>
            <div className='flex items-center font-mono'>
             <p>20:45</p>
            </div>
           </div>
      </div>
    </div>
  )
}

export default UpcomingFixture


import React from 'react'

const LiveScore = () => {
  return (
    <div className='container mx-auto p-4'>
      <p className='text-2xl sm:text-3xl md:text-4xl mt-5 mb-3'>
        Live Now
      </p>

      <div className='flex sm:flex-1 md:flex-2 gap-6 justify-between bg-gray-300 items-center rounded-2xl'>

        {/* Left Section */}
        <div>
          <span className='px-4 py-2 bg-blue-300 rounded-2xl '>
            🔴 Live 67'
          </span>

          <div className='p-4 flex justify-between items-center mt-5 gap-5'>
            <div className='text-start'>
              <p className='text-4xl'>🟣</p>
              <p className='text-lg font-medium'>Arsenal</p>
              <p className='text-gray-700'>Saka 23', Havertz 51'</p>
            </div>

            <div className='text-3xl font-bold'>
              <p>2 - 1</p>
            </div>

            <div className='text-end'>
              <p className='text-4xl'>🔵</p>
              <p className='text-lg font-medium'>M-City</p>
              <p className='text-gray-700'>Haaland 38'</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='text-end mr-5'>
          <p className='text-md text-gray-600'>Premier League · GW 34</p>
          <p className='text-lg font-bold'>Emirates Stadium, London</p>
          <p className='text-sm text-gray-600'>67 min played</p>
        </div>

      </div>
    </div>
  )
}

export default LiveScore
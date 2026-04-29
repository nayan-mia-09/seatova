import React from 'react'

const ScoreCard = () => {
  return (
    <div className='container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {/* Table 1 */}
        <div className='border'>
            <div className='flex justify-between  items-center'>
                <p className='text-lg font-bold p-4'>Today's score</p>
                <p className='text-sm text-gray-700 p-4'>see all</p>
            </div>
            <div className='flex justify-between items-center border-t hover:bg-pink-200 cursor-pointer'>
                <div className='p-4'>
                    <p>🔴 Liverpool</p>
                    <p>🔵 Chelsea</p>
                </div>
                <div className='flex items-center gap-5 p-4'>
                    <div>
                        <p>3</p>
                        <p>1</p>
                    </div>
                    <div className='px-4 bg-gray-100'>
                        <p>FT</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center border-t hover:bg-pink-200 cursor-pointer'>
                <div className='p-4'>
                    <p>🟡 Dortmund</p>
                    <p>🔴 Bayern</p>
                </div>
                <div className='flex items-center gap-5 p-4'>
                    <div>
                        <p>0</p>
                        <p>2</p>
                    </div>
                    <div className='px-4 bg-gray-100'>
                        <p>FT</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center border-t hover:bg-pink-200 cursor-pointer'>
                <div className='p-4'>
                    <p>⚪ Real Madrid</p>
                    <p>🔵 Atletico</p>
                </div>
                <div className='flex items-center gap-5 p-4'>
                    <div>
                        <p>-</p>
                        <p>-</p>
                    </div>
                    <div className='px-4 bg-green-200'>
                        <p>19:00</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center border-t hover:bg-pink-200 cursor-pointer'>
                <div className='p-4'>
                    <p>🔵 PSG</p>
                    <p>🔴 Monaco</p>
                </div>
                <div className='flex items-center gap-5 p-4'>
                    <div>
                        <p>2</p>
                        <p>0</p>
                    </div>
                    <div className='px-4 bg-red-400 text-white'>
                        <p>Live</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center border-t hover:bg-pink-200 cursor-pointer'>
                <div className='p-4'>
                    <p>🔵 PSG</p>
                    <p>🔴 Monaco</p>
                </div>
                <div className='flex items-center gap-5 p-4'>
                    <div>
                        <p>2</p>
                        <p>0</p>
                    </div>
                    <div className='px-4 bg-red-400 text-white'>
                        <p>Live</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center border-t hover:bg-pink-200 cursor-pointer'>
                <div className='p-4'>
                    <p>🔵 PSG</p>
                    <p>🔴 Monaco</p>
                </div>
                <div className='flex items-center gap-5 p-4'>
                    <div>
                        <p>2</p>
                        <p>0</p>
                    </div>
                    <div className='px-4 bg-red-400 text-white'>
                        <p>Live</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center border-t hover:bg-pink-200 cursor-pointer'>
                <div className='p-4'>
                    <p>🔵 PSG</p>
                    <p>🔴 Monaco</p>
                </div>
                <div className='flex items-center gap-5 p-4'>
                    <div>
                        <p>2</p>
                        <p>0</p>
                    </div>
                    <div className='px-4 bg-red-400 text-white'>
                        <p>Live</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Table 2 */}
      <div className='border'>
            <div className='flex justify-between  items-center border-b'>
                <p className='text-lg font-bold p-4'>Latest news</p>
                <p className='text-sm text-gray-700 p-4'>see all</p>
            </div>
            <div className='flex justify-between items-center border-b hover:bg-pink-200 cursor-pointer'>
                <div className='p-4 items-center'>
                    <p className='text-4xl text-blue-500 p-4 rounded-2xl bg-gray-300'>⚽︎</p>
                </div>
                <div className='flex items-center gap-5 p-4'>
                    <div>
                        <p className='text-2xl font-bold'>Haaland returns to training ahead of derby clash</p>
                        <p className='text-sm text-gray-600'>Premier League · 14 min ago</p>
                    </div>
                    
                </div>
            </div>
            <div className='flex justify-between items-center border-b hover:bg-pink-200 cursor-pointer'>
                <div className='p-4 items-center'>
                    <p className='text-4xl text-blue-500 p-4 rounded-2xl bg-gray-300'>🏆</p>
                </div>
                <div className='flex items-center gap-5 p-4'>
                    <div>
                        <p className='text-2xl font-bold'>Champions League semi-final draw confirmed</p>
                        <p className='text-sm text-gray-600'>UEFA · 1 hr ago</p>
                    </div>
                    
                </div>
            </div>
            <div className='flex justify-between items-center border-b hover:bg-pink-200 cursor-pointer'>
                <div className='p-4 items-center'>
                    <p className='text-4xl text-blue-500 p-4 rounded-2xl bg-gray-300'>🗒️</p>
                </div>
                <div className='flex items-center gap-5 p-4'>
                    <div>
                        <p className='text-2xl font-bold'>Mbappé set for Real Madrid debut next season</p>
                        <p className='text-sm text-gray-600'>La Liga · 3 hrs ago</p>
                    </div>
                    
                </div>
            </div>
            <div className='flex justify-between items-center border-b hover:bg-pink-200 cursor-pointer'>
                <div className='p-4 items-center'>
                    <p className='text-4xl text-blue-500 p-4 rounded-2xl bg-gray-300'>⚽︎</p>
                </div>
                <div className='flex items-center gap-5 p-4'>
                    <div>
                        <p className='text-2xl font-bold'>Haaland returns to training ahead of derby clash</p>
                        <p className='text-sm text-gray-600'>Premier League · 14 min ago</p>
                    </div>
                    
                </div>
            </div>
            <div className='flex justify-between items-center border-b hover:bg-pink-200 cursor-pointer'>
                <div className='p-4 items-center'>
                    <p className='text-4xl text-blue-500 p-4 rounded-2xl bg-gray-300'>⚽︎</p>
                </div>
                <div className='flex items-center gap-5 p-4'>
                    <div>
                        <p className='text-2xl font-bold'>FWC 2026 group stage tickets sell out in hours</p>
                        <p className='text-sm text-gray-600'>FIFA · 5 hrs ago</p>
                    </div>
                    
                </div>
            </div>
        </div>
        {/* Table 3 */}
      <div className='border'>
            <div className='flex justify-between  items-center'>
                <p className='text-lg font-bold p-4'>WC 2026 Standings</p>
                <p className='text-sm text-gray-700 p-4'>see all</p>
            </div>
            <div className='flex justify-between items-center border-t'>
                <div className='flex gap-3'>
                    <p className='p-4'>#</p>
                    <p className='p-4'>Team</p>
                </div>
                <div className='flex gap-3'>
                    <p className='p-4'>W</p>
                    <p className='p-4'>D</p>
                    <p className='p-4'>Pts</p>
                </div>
            </div>
            <div className='flex justify-between items-center border-t hover:bg-blue-400 hover:text-white cursor-pointer'>
                <div className='flex gap-3'>
                    <p className='p-4'>1</p>
                    <p className='p-4'>🔵 Argentina</p>
                </div>
                <div className='flex gap-3'>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                </div>
            </div>
            <div className='flex justify-between items-center border-t hover:bg-amber-300 hover:text-gray-700 cursor-pointer'>
                <div className='flex gap-3'>
                    <p className='p-4'>2</p>
                    <p className='p-4'>🟡 Brazil</p>
                </div>
                <div className='flex gap-3'>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                </div>
            </div>
            <div className='flex justify-between items-center border-t hover:bg-blue-950 hover: hover:text-white cursor-pointer'>
                <div className='flex gap-3'>
                    <p className='p-4'>3</p>
                    <p className='p-4'>🔵 France</p>
                </div>
                <div className='flex gap-3'>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                </div>
            </div>
            <div className='flex justify-between items-center border-t hover:bg-red-400 hover:text-white cursor-pointer'>
                <div className='flex gap-3'>
                    <p className='p-4'>4</p>
                    <p className='p-4'>🔴 Portugal</p>
                </div>
                <div className='flex gap-3'>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                </div>
            </div>
            <div className='flex justify-between items-center border-t hover:bg-black hover:text-white cursor-pointer'>
                <div className='flex gap-3'>
                    <p className='p-4'>5</p>
                    <p className='p-4'>⚫ Germany</p>
                </div>
                <div className='flex gap-3'>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                </div>
            </div>
            <div className='flex justify-between items-center border-t hover:bg-yellow-200 cursor-pointer'>
                <div className='flex gap-3'>
                    <p className='p-4'>1</p>
                    <p className='p-4'>🟡 Espain</p>
                </div>
                <div className='flex gap-3'>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                </div>
            </div>
            <div className='flex justify-between items-center border-t hover:bg-red-300 hover:text-white cursor-pointer'>
                <div className='flex gap-3'>
                    <p className='p-4'>6</p>
                    <p className='p-4'>🔴 Morocco</p>
                </div>
                <div className='flex gap-3'>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                </div>
            </div>
            <div className='flex justify-between items-center border-t  hover:bg-amber-600 hover:text-white cursor-pointer'>
                <div className='flex gap-3'>
                    <p className='p-4'>7</p>
                    <p className='p-4'>🟠 Netherland</p>
                </div>
                <div className='flex gap-3'>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                </div>
            </div>
            <div className='flex justify-between items-center border-t  hover:bg-black hover:text-white cursor-pointer'>
                <div className='flex gap-3'>
                    <p className='p-4'>8</p>
                    <p className='p-4'>⚪ England</p>
                </div>
                <div className='flex gap-3'>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                    <p className='p-4'>0</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ScoreCard

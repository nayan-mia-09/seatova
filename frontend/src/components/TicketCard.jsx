import React from 'react'
import { matches } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const TicketCard = () => {
  const navigate = useNavigate(false)
  const topTeams = ["Argentina","Brazil","France","Germany"]
  const topMatches = topTeams.flatMap((team)=>
  matches.filter((match)=>match.home === team || match.away === team).slice(0,2))
  return (
    <div className='container mx-auto'>
          <div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-mono font-bold'>Top Matches</h1>
          </div>
      <div className="mt-5 space-y-5 cursor-pointer">
        {
         topMatches.map((match,index)=>(
            <div key={index} 
             onClick={()=>navigate(`/buy-tickets/${match.id}`)}
            className="border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

            {/* Left Side */}
            <div className="flex-1 min-w-[250px]">
              <p className="text-sm text-gray-500 font-mono mb-4">
                Group {match.group}
              </p>

              <div className="space-y-4">

                {/* Home Team */}
                <div className="flex items-center gap-3">
                  <img
                    src={match.homeFlag}
                    alt="Home Team Flag"
                    className="w-10 h-10 object-cover rounded-full"
                  />

                  <p className="text-lg sm:text-xl font-semibold">
                    {match.home}
                  </p>
                </div>

                {/* Away Team */}
                <div className="flex items-center gap-3">
                  <img
                    src={match.awayFlag}
                    alt="Away Team Flag"
                    className="w-10 h-10 object-cover rounded-full"
                  />

                  <p className="text-lg sm:text-xl font-semibold">
                    {match.away}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 flex-1">

              {/* Date */}
              <div className="bg-gray-50 rounded-xl p-4 text-center min-h-[100px] flex flex-col justify-center">
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-semibold mt-1">{match.date}</p>
                <p className="text-sm text-gray-600">{match.time}</p>
              </div>

              {/* Venue */}
              <div className="bg-gray-50 rounded-xl p-4 text-center min-h-[100px] flex flex-col justify-center">
                <p className="text-sm text-gray-500">Venue</p>
                <p className="font-semibold mt-1">{match.venue}</p>
                <p className="text-sm text-gray-600">{match.city}</p>
              </div>

              {/* Price */}
              <div className="bg-gray-50 rounded-xl p-4 text-center min-h-[100px] flex flex-col justify-center">
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-2xl font-bold text-green-600 mt-1">
                  ${match.price}
                </p>
              </div>

              {/* Button */}
              <div className="flex items-center justify-center min-h-[100px]">
                <button className="w-full py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition-all duration-300">
                  Buy Tickets
                </button>
              </div>

            </div>
          </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TicketCard

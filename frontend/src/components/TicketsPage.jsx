import React, { useContext, useState} from 'react'
import TicketCard from './TicketCard'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const TicketsPage = () => {
  const navigate = useNavigate(false)
  const {matches} = useContext(AppContext);
  const group = ["all", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]
   const [selectedGroup,setSelectedGroup] = useState('all');
   const [search,setSearch] = useState("")


  // filter Matches
// Filter Matches
const filteredMatches = matches.filter((match) => {
  
  // Group Filter
  const groupMatch =
    selectedGroup === "all" || match.group === selectedGroup;

  // Search ONLY by Team Name
  const searchMatch =
    match.home.toLowerCase().includes(search.toLowerCase()) ||
    match.away.toLowerCase().includes(search.toLowerCase());

  return groupMatch && searchMatch;
});
    

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-6' >

      {/* Top Info */}
      <div className='flex flex-wrap items-center gap-2 sm:gap-3 uppercase text-xs sm:text-sm text-gray-700 font-mono'>
        <p>Fifa World Cup 2026</p>
        <p>• USA</p>
        <p>• Canada</p>
        <p>• Mexico</p>
      </div>

      {/* Heading */}
      <div className='mt-5'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold font-mono leading-tight'>
          World Cup <span className='text-pink-500'>Tickets</span>
        </h1>

        <p className='text-gray-500 mt-3 text-sm sm:text-base max-w-2xl'>
          Browse official FIFA World Cup 2026 tickets, explore group stage matches,
          knockout rounds, venues, and secure your seats for the biggest football event.
        </p>
      </div>

      {/* Stats */}
      <div className='flex flex-wrap gap-3 mt-6'>
        <p className='px-4 py-2 rounded-full bg-gray-200 text-black hover:bg-black hover:text-white transition-all duration-300 text-sm'>
          72 Matches Shown
        </p>

        <p className='px-4 py-2 rounded-full bg-gray-200 text-black hover:bg-black hover:text-white transition-all duration-300 text-sm'>
          60 Available
        </p>

        <p className='px-4 py-2 rounded-full bg-gray-200 text-black hover:bg-black hover:text-white transition-all duration-300 text-sm'>
          48 Nations
        </p>

        <p className='px-4 py-2 rounded-full bg-gray-200 text-black hover:bg-black hover:text-white transition-all duration-300 text-sm'>
          16 Venues
        </p>
      </div>

      {/* Filter + Search */}
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mt-10'>

        {/* Group Buttons */}
        <div className='flex flex-wrap gap-2 justify-center lg:justify-start'>
          {group.map((group, index) => (
            <button
              key={index}
              onClick={()=>setSelectedGroup(group)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm sm:text-base uppercase ${selectedGroup === group ? "bg-black text-white" : "bg-green-200 hover:bg-black hover:text-white"}`}
            >
              {group}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className='w-full lg:w-auto'>
          <input
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
            type='text'

            placeholder='🔍 Search your tickets...'
            className='w-full lg:w-96 h-11 border border-gray-300 rounded-full px-5 text-sm sm:text-base outline-none focus:ring-2 focus:ring-green-300'
          />
        </div>
      </div>

      <div className="mt-5 space-y-5">
      {filteredMatches.map((match, i) => (
        <div
        onClick={()=>navigate(`/buy-tickets/${match.id}`)}
          key={i}
          className="border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
        >
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
      ))}
    </div>

    </div>
  )
}

export default TicketsPage
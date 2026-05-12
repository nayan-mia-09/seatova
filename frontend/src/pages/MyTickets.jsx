import React, { useContext } from 'react'
import assets from '../assets/assets'
import { CalendarDays, Clock3, MapPin, Ticket } from 'lucide-react'
import { AppContext } from '../context/AppContext'

const MyTickets = () => {
  const {matches} = useContext(AppContext)

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            My Tickets
          </h1>
          <p className="text-gray-500 mt-2">
            View all your booked football match tickets
          </p>
        </div>

        {/* Ticket Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {matches.slice(0,3).map((match,index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              {/* Match Image */}
              <div className="relative">
                <img
                  src={match.awayFlag}
                  alt=""
                  className="w-fit h-56 object-cover"
                />

                <div className="absolute top-4 right-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${
                      match.status === 'Confirmed'
                        ? 'bg-green-500'
                        : 'bg-yellow-500'
                    }`}
                  >
                    {match.id}
                  </span>
                </div>
              </div>

              {/* Ticket Content */}
              <div className="p-6">

                {/* Teams */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center flex-1">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {match.home}
                    </h2>
                  </div>

                  <div className="px-4">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      VS
                    </span>
                  </div>

                  <div className="text-center flex-1">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {match.away}
                    </h2>
                  </div>
                </div>

                {/* Ticket Info */}
                <div className="space-y-4">

                  {/* Date */}
                  <div className="flex items-center gap-3 text-gray-700">
                    <CalendarDays className="text-blue-600" size={20} />
                    <p>{match.date}</p>
                  </div>

                  {/* Time */}
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock3 className="text-blue-600" size={20} />
                    <p>{match.time}</p>
                  </div>

                  {/* Stadium */}
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="text-blue-600" size={20} />
                    <p>{match.venue}</p>
                  </div>

                  {/* Seat */}
                  <div className="flex items-center gap-3 text-gray-700">
                    <Ticket className="text-blue-600" size={20} />
                    <p>{match.city}</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">

                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition">
                    View Ticket
                  </button>

                  <button className="flex-1 border border-gray-300 hover:bg-gray-100 py-3 rounded-2xl font-semibold transition">
                    Download PDF
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Example */}
        {/* 
        <div className="bg-white rounded-3xl p-10 text-center shadow-lg">
          <img
            src={assets.empty_ticket}
            alt=""
            className="w-40 mx-auto mb-5"
          />

          <h2 className="text-2xl font-bold text-gray-800">
            No Tickets Found
          </h2>

          <p className="text-gray-500 mt-2">
            You haven't booked any tickets yet.
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-semibold">
            Browse Matches
          </button>
        </div>
        */}
      </div>
    </div>
  )
}

export default MyTickets
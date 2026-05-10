import { useNavigate, useParams } from "react-router-dom";
import { allTeamsData, matches } from "../assets/assets";

const TeamDetails = () => {
  const navigate = useNavigate(false)
  const { code } = useParams();

  const selectedTeam = allTeamsData.find(
    (team) => team.code === code
  );

  const sameGroupTeams = allTeamsData.filter(
    (team) =>
      team.group === selectedTeam.group &&
      team.code !== selectedTeam.code
  );

  const sameGroupTickets = matches.filter((team)=>
  team.group === selectedTeam.group )

  return (
    <div className="container mx-auto mt-10">

      {/* Team Main Info */}
      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <img
            src={selectedTeam.photo}
            alt={selectedTeam.name}
            className="rounded-xl"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            {selectedTeam.name}
          </h1>

          <p className="mt-3">
            Group: {selectedTeam.group}
          </p>

          <p>
            FIFA Rank: {selectedTeam.world_rank}
          </p>

          <p>
            Confederation: {selectedTeam.confederation}
          </p>

          <p className="mt-5 text-gray-600">
            {selectedTeam.description}
          </p>
        </div>
      </div>

      {/* Same Group Teams */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold">
          Other Teams in Group {selectedTeam.group}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8 mb-5" >
          {sameGroupTeams.map((team) => (
            <div
             onClick={() => navigate(`/team-details/${team.code}`)}
              key={team.code}  
              className="rounded-xl p-4 shadow-sm hover:shadow-md flex sm:flex-row md:flex-col gap-5 transition text-center items-center justify-between cursor-pointer"
            >
              <img src={team.flag} alt="" className="w-20 sm:w-30 md:w-40 object-contain"/>
              <div className="flex flex-col gap-3 items-center">
                  <p className="text-xl sm:text-md font-semibold mb-2">
               Rank - {team.world_rank}
              </p>
              <p className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-pink-200 transition mb-2">
               Federa - {team.confederation}
              </p>
              <p className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-pink-200 transition">
                {team.name}
              </p>
              </div>
              
            </div>
          ))}
        </div>

        {/* Same Group Tickets */}
          <div className="mt-5 space-y-5 cursor-pointer">
        {
         sameGroupTickets.map((match,index)=>(
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
      
      
    </div>
  );
};

export default TeamDetails;
import { useNavigate } from "react-router-dom"
import { allTeamsData } from "../assets/assets"
import TeamPageHero from "./TeamPageHero"


const TeamPage = () => {
  const navigate = useNavigate(false)
  return (
    <div className="container mx-auto">
      <TeamPageHero/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 bg-gray-50 shadow rounded-xl p-5">
              
              {allTeamsData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => navigate(`/team-details/${item.code}`)}
                  className="cursor-pointer bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
                >
                  
                  {/* Rank */}
                  <span className="px-4 py-2 rounded-full bg-blue-50 font-mono font-medium mb-4">
                    {item.group}
                  </span>
      
                  {/* Team Flag */}
                  <img
                    src={item.flag}
                    alt={item.name}
                    className="w-20 sm:w-30 md:w-40 object-contain mb-4"
                  />
      
                  {/* Team Info */}
                  <div className="flex flex-col sm:flex-row gap-3 items-center">
                    <p className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-pink-200 transition">
                      {item.name}
                    </p>
      
                    <p className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-pink-300 transition">
                      {item.confederation}
                    </p>
                  </div>
      
                </div>
              ))}
      
            </div>
    </div>
  )
}

export default TeamPage

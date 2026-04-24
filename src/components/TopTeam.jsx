import { useNavigate } from "react-router-dom";
import { topTeamsData } from "../assets/assets";

const TopTeam = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-8 mb-8 px-4">
      
      <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-left mb-6">
        Top Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5 bg-gray-50 shadow rounded-xl p-5">
        
        {topTeamsData.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/top-team/${item.world_rank}`)}
            className="cursor-pointer bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
          >
            
            {/* Rank */}
            <span className="px-4 py-2 rounded-full bg-blue-50 font-mono font-medium mb-4">
              {item.world_rank}
            </span>

            {/* Team Flag */}
            <img
              src={item.flag_round}
              alt={item.short_name}
              className="w-20 sm:w-24 md:w-28 object-contain mb-4"
            />

            {/* Team Info */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <p className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-pink-200 transition">
                {item.short_name}
              </p>

              <p className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-pink-300 transition">
                {item.confederation}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default TopTeam;
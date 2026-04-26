import { useParams } from "react-router-dom";
import { topTeamsData } from "../assets/assets";

const TopTeamDetails = () => {
  const { world_rank } = useParams();

  const team = topTeamsData.find(
    (item) => item.world_rank === parseInt(world_rank)
  );

  if (!team) {
    return <p className="text-center mt-10">Team not found.</p>;
  }

  return (
    <div className="container mx-auto mt-5 px-4">

      {/* Top Banner */}
      <div className="flex flex-col md:flex-row mt-3 mb-5 bg-black px-5 md:px-10 py-5 items-center gap-5 rounded-xl">
        <img
          src={team.flag}
          alt={team.name}
          className="w-32 sm:w-40 md:w-52 object-contain"
        />

        <p className="text-white text-2xl sm:text-4xl md:text-5xl font-mono font-bold text-center md:text-left">
          {team.name}
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left Side */}
        <div className="mt-3">
          <img
            src={team.team_photo}
            alt={`${team.name} Football Team`}
            title={`${team.name} Football Team`}
            className="w-full rounded-xl shadow-sm"
          />

          <div className="mt-5">
            <span className="font-semibold text-lg">Play Style:</span>
            <span className="text-sm sm:text-base text-gray-500 ms-2">
              {team.play_style}
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">

            <div className="bg-blue-50 rounded-2xl p-4 text-center shadow-sm hover:shadow-md cursor-pointer transition">
              <p className="text-sm text-gray-500">Confederation</p>
              <p className="font-semibold">{team.confederation}</p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-4 text-center shadow-sm hover:shadow-md cursor-pointer transition">
              <p className="text-sm text-gray-500">World Rank</p>
              <p className="font-semibold">{team.world_rank}</p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-4 text-center shadow-sm hover:shadow-md cursor-pointer transition">
              <p className="text-sm text-gray-500">Founded</p>
              <p className="font-semibold">{team.founded}</p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-4 text-center shadow-sm hover:shadow-md cursor-pointer transition">
              <p className="text-sm text-gray-500">Coach</p>
              <p className="font-semibold">{team.coach}</p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-4 text-center shadow-sm hover:shadow-md cursor-pointer transition">
              <p className="text-sm text-gray-500">Captain</p>
              <p className="font-semibold">{team.captain}</p>
            </div>

          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg mt-6 tracking-wide text-gray-700 leading-relaxed">
            {team.description}
          </p>

        </div>
      </div>
    </div>
  );
};

export default TopTeamDetails;
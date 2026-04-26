import { useParams } from "react-router-dom";
import { topClubsData } from "../assets/assets";

const TopClubsDetails = () => {
  const { league_rank } = useParams();

  const club = topClubsData.find(
    (item) => item.league_rank === parseInt(league_rank)
  );

  if (!club) {
    return <p className="text-center mt-10 text-xl">Club Data not found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={club.logo}
            alt={club.name}
            className="w-full max-w-xs md:max-w-sm object-contain mb-4"
          />

          <p className="text-xl md:text-2xl font-bold mt-4">
            Name: {club.name}
          </p>
          <p className="text-lg md:text-xl font-semibold">
            Country: {club.country}
          </p>
          <p className="text-md font-medium">
            Founded: {club.founded}
          </p>
          <p className="text-sm">
            League: {club.league}
          </p>
          <p className="text-sm">
            League Rank: {club.league_rank}
          </p>
          <p className="text-sm">
            Coach: {club.coach}
          </p>
          <p className="text-sm">
            Captain: {club.captain}
          </p>
          <p className="text-md font-semibold">
            Squad Value: {club.squad_value}
          </p>
          <p className="text-md font-semibold">
            Stadium: {club.stadium}
          </p>
          <p className="text-base md:text-lg leading-relaxed font-medium">
            {club.description}
          </p>
        </div>

      </div>

    </div>
  );
};

export default TopClubsDetails;
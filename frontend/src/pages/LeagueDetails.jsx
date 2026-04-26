import { useParams } from "react-router-dom";
import { topLeaguesData } from "../assets/assets";

const LeagueDetails = () => {
  const { league_rank } = useParams();

  const league = topLeaguesData.find(
    (item) => item.league_rank === parseInt(league_rank)
  );

  if (!league) {
    return <p className="text-center mt-10 text-xl">League Data not found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={league.logo}
            alt={league.name}
            className="w-full max-w-xs md:max-w-sm object-contain mb-4"
          />

          <p className="text-xl md:text-2xl font-bold mt-4">
            Name: {league.name}
          </p>
          <p className="text-lg md:text-xl font-semibold">
            Country: {league.country}
          </p>
          <p className="text-md font-medium">
            Confederation: {league.confederation}
          </p>
          <p className="text-sm">
            League Rank: {league.league_rank}
          </p>
          <p className="text-sm">
            Total Teams: {league.total_teams}
          </p>
          <p className="text-sm">
            Season Start: {league.season_start}
          </p>
          <p className="text-sm">
            Season End: {league.season_end}
          </p>
          <p className="text-md font-semibold">
            Current Champion: {league.current_champion}
          </p>
          <p className="text-md font-semibold">
            Top Clubs: {league.top_clubs}
          </p>
          <p className="text-base md:text-lg leading-relaxed font-medium">
            {league.description}
          </p>
        </div>

      </div>

    </div>
  );
};

export default LeagueDetails;
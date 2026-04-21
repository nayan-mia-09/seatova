import { useParams } from "react-router-dom";
import { topLeaguesData } from "../assets/assets";


const LeagueDetails = () => {
    const {league_rank} = useParams();

  const league =topLeaguesData.find((item)=> item.league_rank === parseInt(league_rank));

  if(!league){
    return <p>League Data not found.</p>
  }
  return (
    <div className="container mx-auto mt-5 p-5">
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="">
         <img src={league.logo} alt="" className="w-100 mb-3"/>
         <p className="text-2xl font-mono font-bold mt-5 mask-linear-from-neutral-300">Name: {league.name}</p>
         <p className="text-2xl font-bold font-mono">Country: {league.country}</p>
            <p className="text-md font-semibold font-mono">Confedaration: {league.confederation}</p>
            <p className="text-sm font-mono font-medium">League Rank: {league.league_rank}</p>
            <p className="text-sm font-mono font-medium">Total Teams: {league.total_teams}</p>
            <p className="text-sm font-mono font-medium">Season Start: {league.season_start}</p>
            <p className="text-sm font-mono font-medium">Season End: {league.season_end}</p>
            <p className="text-md font-mono font-bold">Current Champion: {league.current_champion}</p>
            <p className="text-md font-mono font-bold">Top Clubs: {league.top_clubs}</p>
            <p className="mt-5 text-2xl font-mono font-extrabold">{league.description}</p>
        </div>
        </div>
        <div>
            
      </div>
    </div>
  )
}

export default LeagueDetails

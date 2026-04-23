import { useParams } from "react-router-dom";
import { topClubsData } from "../assets/assets";


const TopClubsDetails = () => {
   const {league_rank} = useParams();

  const club =topClubsData.find((item)=> item.league_rank === parseInt(league_rank));

  if(!club){
    return <p>Club Data not found.</p>
  }
  return (
    <div className="container mx-auto mt-5 p-5">
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="">
         <img src={club.logo} alt="" className="w-100 mb-3"/>
         <p className="text-2xl font-mono font-bold mt-5 mask-linear-from-neutral-300">Name: {club.name}</p>
         <p className="text-2xl font-bold font-mono">Country: {club.country}</p>
            <p className="text-md font-semibold font-mono">Founded: {club.founded}</p>
            <p className="text-sm font-mono font-medium">League : {club.league}</p>
            <p className="text-sm font-mono font-medium">League Rank: {club.league_rank}</p>
            <p className="text-sm font-mono font-medium">Coach: {club.coach}</p>
            <p className="text-sm font-mono font-medium">Captain: {club.captain}</p>
            <p className="text-md font-mono font-bold">Squad Value: {club.squad_value}</p>
            <p className="text-md font-mono font-bold">Stadium: {club.stadium}</p>
            <p className="mt-5 text-2xl font-mono font-extrabold">{club.description}</p>
        </div>
        </div>
        <div>
            
      </div>
    </div>
  )
}

export default TopClubsDetails

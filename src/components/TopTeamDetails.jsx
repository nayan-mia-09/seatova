import { useParams } from "react-router-dom"
import { topTeamsData } from "../assets/assets"


const TopTeamDetails = () => {
  const {world_rank} = useParams();

  const team =topTeamsData.find((item)=> item.world_rank === parseInt(world_rank));

  if(!team){
    return <p>Team not found.</p>
  }
  return (
    <div className="mt-5">
      <div className="flex mt-3 mb-3 bg-black px-10 py-5 items-center gap-5">
        <img src={team.flag} alt="" className="w-50"/>
        <p className="text-white text-5xl font-mono font-bold">{team.name}</p>
      </div>

      <div className="grid grid-cols-2">
        <div className="mt-5 mb-3">
       <img src={team.team_photo} alt="Argentina Football Team" title={`${team.name} Football Team`}/>

     <div className="mt-5">
        <span className=" font-semibold">Play Style</span>
       <span className="text-sm text-gray-500 ms-2">{team.play_style}</span>
     </div>
      

        </div>
        <div className="">
   <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
  
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
         
        <p className="text-lg mt-5 tracking-wider">{team.description}</p>
        </div>
      </div>
        
        
    </div>
  )
}

export default TopTeamDetails

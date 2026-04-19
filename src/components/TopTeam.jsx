import { useNavigate } from "react-router-dom"
import { topTeamsData } from "../assets/assets"


const TopTeam = () => {
    const navigate = useNavigate(false)
  return (
    <div className="mt-5 mb-3 ">
      <h1 className="text-3xl font-bold">Top Team</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5 mb-3 items-center text-center bg-gray-50 shadow cursor-pointer">
         {
            topTeamsData.map((item,index)=>(
                <div onClick={()=>navigate(`/top-team/${item.world_rank}`)} key={index} className="m-10">
                    <span className="px-4 py-2 rounded-full bg-blue-50 font-mono font-medium">{item.world_rank}</span>
                   <img src={item.flag_round} alt="" className="w-20"/>
                   <div className="flex gap-5 mt-5 mb-3">
                    <p className="px-4 py-2 rounded-lg hover:bg-pink-200">{item.short_name}</p>
                    <p className="px-4 py-2 rounded-lg hover:bg-pink-300">{item.confederation}</p>
                   </div>
                   
                </div>
            ))
         }
      </div>
    </div>
  )
}

export default TopTeam

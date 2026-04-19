import { useNavigate } from "react-router-dom"
import  { topSponsorData } from "../assets/assets"



const TopSponsors = () => {
  const navigate = useNavigate(false)
  return (
    <div className="mt-5 mb-5  items-center">
      <h1 className="text-3xl font-mono font-bold">Our Valued Partners</h1>

        <div  className="bg-gray-200 mt-5 pt-5 grid sm:grid-cols-2 md:grid-cols-6 items-center text-center gap-3">
          {
            topSponsorData.map((item,index)=>(
            <div key={index} onClick={()=>navigate(`/sponsors-details/${item.name}`)}>
                <img src={item.logo} alt="" className=" w-50 mb-5"/>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default TopSponsors

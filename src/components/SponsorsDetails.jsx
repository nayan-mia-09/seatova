import { useParams } from "react-router-dom";
import { topSponsorData } from "../assets/assets";


const SponsorsDetails = () => {
    const {name} = useParams();

  const sponsors = topSponsorData.find(
  (item) => item.name.toLowerCase() === name.toLowerCase()
);

  if(!sponsors){
    return <p>Sponsors not found.</p>
  }
  return (
    <div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="">
         <img src={sponsors.logo} alt="" className="w-100 mb-3"/>
         <p className="text-2xl font-mono font-bold mt-5 mask-linear-from-neutral-300">Name: {sponsors.name}</p>
         <p className="text-2xl font-bold font-mono">Country: {sponsors.country}</p>
            <p className="text-md font-semibold font-mono">Industry: {sponsors.industry}</p>
            <p className="text-sm font-mono font-medium">Sponsorship Type: {sponsors.sponsorship_type}</p>
            <p className="text-sm font-mono font-sm">Partnership Since: {sponsors.partnership_since}</p>
            <p className="mt-5 text-2xl font-mono font-extrabold">{sponsors.description}</p>
        </div>
        </div>
        <div>
            
      </div>

    </div>
  )
}

export default SponsorsDetails

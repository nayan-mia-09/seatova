import { useNavigate } from "react-router-dom";
import { topSponsorData } from "../assets/assets";

const TopSponsors = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-8 mb-8 px-4">
      
      <h1 className="text-2xl sm:text-3xl font-mono font-bold text-center mb-6">
        Our Valued Partners
      </h1>

      <div className="bg-gray-100 p-5 rounded-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 place-items-center">
        
        {topSponsorData.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/sponsors-details/${item.name}`)}
            className="cursor-pointer flex justify-center items-center"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain hover:scale-110 transition duration-300"
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default TopSponsors;
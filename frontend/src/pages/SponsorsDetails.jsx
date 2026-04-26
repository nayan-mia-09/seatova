import { useParams } from "react-router-dom";
import { topSponsorData } from "../assets/assets";

const SponsorsDetails = () => {
  const { name } = useParams();

  const sponsors = topSponsorData.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );

  if (!sponsors) {
    return <p className="text-center mt-10 text-xl">Sponsors not found.</p>;
  }

  return (
    <div className="px-4 py-6 max-w-6xl mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={sponsors.logo}
            alt={sponsors.name}
            className="w-full max-w-xs md:max-w-sm object-contain mb-4"
          />

          <p className="text-xl md:text-2xl font-bold mt-4">
            Name: {sponsors.name}
          </p>
          <p className="text-lg md:text-xl font-semibold">
            Country: {sponsors.country}
          </p>
          <p className="text-md font-medium">
            Industry: {sponsors.industry}
          </p>
          <p className="text-sm">
            Sponsorship Type: {sponsors.sponsorship_type}
          </p>
          <p className="text-sm">
            Partnership Since: {sponsors.partnership_since}
          </p>
          <p className="mt-4 md:mt-0 text-base md:text-lg font-medium leading-relaxed">
            {sponsors.description}
          </p>
        </div>
      </div>

    </div>
  );
};

export default SponsorsDetails;
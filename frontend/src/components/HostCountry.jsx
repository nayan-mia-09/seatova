import { hostCountry } from "../assets/assets";

const HostCountry = () => {
  return (
    <div className="mt-5 mb-5 container mx-auto px-4">
      <h1 className="text-2xl md:text-3xl font-mono font-bold mb-5">
        Host Country
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {hostCountry.map((item, index) => (
          <div
            className="border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
            key={index}
          >
            <div>
              {/* Top Section */}
              <div className="p-4 bg-gray-700">
                <img
                  src={item.country_flag}
                  alt={item.country_name}
                  className="w-14 mb-5"
                />

                <p className="text-sm font-serif text-white">
                  Host Country
                </p>

                <p className="text-2xl md:text-3xl font-sans mt-1 text-white">
                  {item.country_name}
                </p>
              </div>

              {/* Bottom Section */}
              <div className="flex justify-between p-4">
                <div className="text-sm text-gray-400 space-y-2">
                  <p>Stage</p>
                  <p>World Ranking</p>
                  <p>Participation</p>
                </div>

                <div className="text-sm text-end space-y-2 font-medium">
                  <p>{item.stage}</p>
                  <p>{item.world_rankings}</p>
                  <p>{item.participation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostCountry;
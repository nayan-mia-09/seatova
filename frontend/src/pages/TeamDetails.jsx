import { useNavigate, useParams } from "react-router-dom";
import { allTeamsData } from "../assets/assets";
import ShowTickets from "../components/ShowTickets.jsx";

const TeamDetails = () => {
  const navigate = useNavigate(false)
  const { code } = useParams();

  const selectedTeam = allTeamsData.find(
    (team) => team.code === code
  );

  const sameGroupTeams = allTeamsData.filter(
    (team) =>
      team.group === selectedTeam.group &&
      team.code !== selectedTeam.code
  );

  return (
    <div className="container mx-auto mt-10">

      {/* Team Main Info */}
      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <img
            src={selectedTeam.photo}
            alt={selectedTeam.name}
            className="rounded-xl"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            {selectedTeam.name}
          </h1>

          <p className="mt-3">
            Group: {selectedTeam.group}
          </p>

          <p>
            FIFA Rank: {selectedTeam.world_rank}
          </p>

          <p>
            Confederation: {selectedTeam.confederation}
          </p>

          <p className="mt-5 text-gray-600">
            {selectedTeam.description}
          </p>
        </div>
      </div>

      {/* Same Group Teams */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold">
          Other Teams in Group {selectedTeam.group}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8 mb-5" >
          {sameGroupTeams.map((team) => (
            <div
             onClick={() => navigate(`/team-details/${team.code}`)}
              key={team.code}  
              className="rounded-xl p-4 shadow-sm hover:shadow-md flex sm:flex-row md:flex-col gap-5 transition text-center items-center justify-between cursor-pointer"
            >
              <img src={team.flag} alt="" className="w-20 sm:w-30 md:w-40 object-contain"/>
              <div className="flex flex-col gap-3 items-center">
                  <p className="text-xl sm:text-md font-semibold mb-2">
               Rank - {team.world_rank}
              </p>
              <p className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-pink-200 transition mb-2">
               Federa - {team.confederation}
              </p>
              <p className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-pink-200 transition">
                {team.name}
              </p>
              </div>
              
            </div>
          ))}
        </div>
        <ShowTickets selectedTeam ={selectedTeam}/>
      </div>
      
      
    </div>
  );
};

export default TeamDetails;
import { matchTickets } from "../assets/assets";

const ShowTickets = ({ selectedTeam }) => {
  if (!selectedTeam) return <p>Loading...</p>;

  const teamCode = selectedTeam.code?.trim().toUpperCase();

  const teamMatches = matchTickets.filter(
    (match) => match.teamCode?.trim().toUpperCase() === teamCode
  );

  return (
    <div>
      {teamMatches.length === 0 ? (
        <p>No matches found</p>
      ) : (
        teamMatches.map((match) => (
          <div key={match.id}>
            <h3>{selectedTeam.name} vs {match.opponent}</h3>
            <p>{match.date}</p>
            <p>{match.stadium}</p>
            <p>{match.price}</p>
            <button>Buy Ticket</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ShowTickets;
import LiveScore from "../components/LiveScore"
import ScoreCard from "../components/ScoreCard"
import TopPlayers from "../components/TopPlayers"
import UpcomingFixture from "../components/UpcomingFixture"



const Football = () => {
  return (
    <div className="container mx-auto">
      <LiveScore/>
      <ScoreCard/>
      <TopPlayers/>
      <UpcomingFixture/>
    </div>
  )
}

export default Football

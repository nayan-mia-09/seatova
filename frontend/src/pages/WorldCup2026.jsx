import GroupStage from "../components/GroupStage"
import HostCityVenues from "../components/HostCityVenues"
import HostCountry from "../components/HostCountry"
import KeyFacts from "../components/KeyFacts"


const WorldCup2026 = () => {
  return (
    <div className="container mx-auto">
      <HostCountry/>
      <KeyFacts/>
      <HostCityVenues/>
      <GroupStage/>
    </div>
  )
}

export default WorldCup2026

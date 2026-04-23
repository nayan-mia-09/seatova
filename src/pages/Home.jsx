import Hero from "../components/Hero"
import TopSponsors from "../components/TopSponsors"
import TopTeam from "../components/TopTeam"
import TopClub from "./TopClub"
import TopLeague from "./TopLeague"



const Home = () => {
  return (
    <div className="container mx-auto">
      <Hero/>
      <TopTeam/>
      <TopSponsors/>
      <TopLeague/>
      <TopClub/>
      
      
    </div>
  )
}

export default Home

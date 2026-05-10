import Hero from "../components/Hero"
import NewsCard from "../components/NewsCard"
import ReviewPost from "../components/ReviewPost"
import TicketCard from "../components/TicketCard"
import TopSponsors from "../components/TopSponsors"
import TopTeam from "../components/TopTeam"
import TopClub from "./TopClub"
import TopLeague from "./TopLeague"



const Home = () => {
  return (
    <div className="container mx-auto">
      <Hero/>
      <TopTeam/>
      <TicketCard/>
      <TopSponsors/>
      <TopLeague/>
      <TopClub/>
      <NewsCard/>
      <ReviewPost/>
      
    </div>
  )
}

export default Home

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Cities from "./pages/Cities"
import Competetion from "./pages/Competetion"
import Football from "./pages/Football"
import WorldCup2026 from "./pages/WorldCup2026"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import TeamPage from "./pages/TeamPage"
import AllTicket from "./pages/AllTicket"
import AllFootballTeams from "./pages/AllFootballTeams"
import TopClub from "./pages/TopClub"
import TopHeader from "./components/TopHeader"
import Navbar from "./components/Navbar"
import TopTeamPage from "./pages/TopTeamPage"
import Sponsors from "./pages/Sponsors"
import LeagueDetails from "./components/LeagueDetails"
import TopClubsDetails from "./components/TopClubsDetails"


const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <TopHeader/>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cities" element ={<Cities/>}/>
      <Route path="/competetion" element ={<Competetion/>}/>
      <Route path="/football" element = {<Football/>}/>
      <Route path="/world-cup-2026" element = {<WorldCup2026/>}/>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/sign-up" element ={<SignUp/>}/>
      <Route path="/team-page" element={<TeamPage/>}/>
      <Route path="/all-tickets" element ={<AllTicket/>}/>
      <Route path="/all-football-teams" element ={<AllFootballTeams/>}/>
      <Route path="/top-club" element ={<TopClub/>}/>
      <Route path="/top-team/:world_rank" element ={<TopTeamPage/>}/>
      <Route path="/sponsors-details/:name" element = {<Sponsors/>}/>
      <Route path="/league-details/:league_rank" element={<LeagueDetails/>}/>
      <Route path="/club-details/:league_rank" element ={<TopClubsDetails/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cities from "./pages/Cities";
import Competetion from "./pages/Competetion";
import Football from "./pages/Football";
import WorldCup2026 from "./pages/WorldCup2026";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import TeamPage from "./pages/TeamPage";
import AllTicket from "./pages/AllTicket";
import AllFootballTeams from "./pages/AllFootballTeams";
import TopClub from "./pages/TopClub";
import TopTeamPage from "./pages/TopTeamPage";
import LeagueDetails from "./pages/LeagueDetails";
import TopClubsDetails from "./pages/TopClubsDetails";
import NewsCardDetails from "./pages/NewsCardDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SponsorsDetails from "./pages/SponsorsDetails";
import TopTeamDetails from "./pages/TopTeamDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/competetion" element={<Competetion />} />
            <Route path="/football" element={<Football />} />
            <Route path="/world-cup-2026" element={<WorldCup2026 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/team-page" element={<TeamPage />} />
            <Route path="/all-tickets" element={<AllTicket />} />
            <Route path="/all-football-teams" element={<AllFootballTeams />} />
            <Route path="/top-club" element={<TopClub />} />
            <Route path="/top-team/:world_rank" element={<TopTeamDetails />} />
            <Route path="/sponsors-details/:name" element={<SponsorsDetails />} />
            <Route path="/league-details/:league_rank" element={<LeagueDetails />} />
            <Route path="/club-details/:league_rank" element={<TopClubsDetails />} />
            <Route path="/news-details/:id" element={<NewsCardDetails />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;
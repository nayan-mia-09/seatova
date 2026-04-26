import Navbar from "./Navbar"
import TopHeader from "./TopHeader"


const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow">
      <TopHeader/>
      <Navbar/>
    </div>
  )
}

export default Header

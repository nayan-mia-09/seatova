import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import assets from "../assets/assets"


const Navbar = () => {
    const navigate = useNavigate()

    const [showMenu, setShowMenu] = useState(false)
  return (

    <div className="flex justify-between items-center container mx-auto mt-5">

  <div className="flex gap-5 items-center">
    <h1 onClick={()=>navigate('/')} className="text-3xl font-bold text-pink-500 cursor-pointer">🎟️SeatOva</h1>

    <ul className="hidden md:flex gap-3">
      {/* nav links */}
      <li>
    <NavLink to="/" end className={({ isActive }) =>
      `px-4 py-2 hover:bg-pink-200 hover:rounded-lg cursor-pointer block ${
        isActive ? "bg-pink-300 rounded-lg font-semibold" : ""
      }`
    }>
      Home
    </NavLink>
  </li>

  <li>
    <NavLink to="/football" className={({ isActive }) =>
      `px-4 py-2 hover:bg-pink-200 hover:rounded-lg cursor-pointer block ${
        isActive ? "bg-pink-300 rounded-lg font-semibold" : ""
      }`
    }>
      Football
    </NavLink>
  </li>

  <li>
    <NavLink to="/all-tickets" className={({ isActive }) =>
      `px-4 py-2 hover:bg-pink-200 hover:rounded-lg cursor-pointer block ${
        isActive ? "bg-pink-300 rounded-lg font-semibold" : ""
      }`
    }>
      Tickets
    </NavLink>
  </li>

  <li>
    <NavLink to="/all-football-teams" className={({ isActive }) =>
      `px-4 py-2 hover:bg-pink-200 hover:rounded-lg cursor-pointer block ${
        isActive ? "bg-pink-300 rounded-lg font-semibold" : ""
      }`
    }>
      Teams
    </NavLink>
  </li>

  <li>
    <NavLink to="/world-cup-2026" className={({ isActive }) =>
      `px-4 py-2 hover:bg-pink-200 hover:rounded-lg cursor-pointer block ${
        isActive ? "bg-pink-300 rounded-lg font-semibold" : ""
      }`
    }>
      FWC 2026
    </NavLink>
  </li>
    </ul>
  </div>

  {/* Right side */}
  <div className="flex items-center gap-4">
    
    {/* Sign in (desktop) */}
    <a onClick={(()=>navigate('/login'))} className="hidden md:block bg-gray-200 px-4 py-2 rounded-xl cursor-pointer">
      Sign in
    </a>

    {/* Mobile menu icon */}
    <img
      onClick={() => setShowMenu(true)}
      className="w-6 md:hidden cursor-pointer"
      src={assets.menu_icon}
      alt="menu"
    />
    {/* Mobile Menu */}
<div
  className={`fixed top-0 right-0 h-full w-64 bg-white z-20 transform transition-transform duration-300 md:hidden ${
    showMenu ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Top section */}
  <div className="flex items-center justify-between px-5 py-6">
    
    <img
      className="w-6 cursor-pointer"
      onClick={() => setShowMenu(false)}
      src={assets.cross_icon}
      alt="close"
    />
  </div>

  {/* Links */}
  <ul className="flex flex-col gap-3 p-5 text-lg font-medium">

    <li>
      <NavLink
        onClick={() => setShowMenu(false)}
        to="/"
        end
        className={({ isActive }) =>
          `block px-4 py-2 rounded-lg ${
            isActive ? "bg-pink-300 font-semibold" : "hover:bg-pink-200"
          }`
        }
      >
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        onClick={() => setShowMenu(false)}
        to="/football"
        className={({ isActive }) =>
          `block px-4 py-2 rounded-lg ${
            isActive ? "bg-pink-300 font-semibold" : "hover:bg-pink-200"
          }`
        }
      >
        Football
      </NavLink>
    </li>

    <li>
      <NavLink
        onClick={() => setShowMenu(false)}
        to="/all-tickets"
        className={({ isActive }) =>
          `block px-4 py-2 rounded-lg ${
            isActive ? "bg-pink-300 font-semibold" : "hover:bg-pink-200"
          }`
        }
      >
        Tickets
      </NavLink>
    </li>

    <li>
      <NavLink
        onClick={() => setShowMenu(false)}
        to="/all-football-teams"
        className={({ isActive }) =>
          `block px-4 py-2 rounded-lg ${
            isActive ? "bg-pink-300 font-semibold" : "hover:bg-pink-200"
          }`
        }
      >
        Teams
      </NavLink>
    </li>

    <li>
      <NavLink
        onClick={() => setShowMenu(false)}
        to="/world-cup-2026"
        className={({ isActive }) =>
          `block px-4 py-2 rounded-lg ${
            isActive ? "bg-pink-300 font-semibold" : "hover:bg-pink-200"
          }`
        }
      >
        FWC 2026
      </NavLink>
    </li>

    {/* Sign in */}
    <li>
      <NavLink
        to="/login"
        onClick={() => setShowMenu(false)}
        className="block mt-4 bg-gray-200 px-4 py-2 rounded-lg text-center hover:bg-gray-300"
      >
        Sign in
      </NavLink>
    </li>

  </ul>
</div>
  </div>

</div>
    
  )
}

export default Navbar

import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import assets from "../assets/assets"


const Navbar = () => {
    const navigate = useNavigate()
    const [token,setToken] = useState(true)
    const [showMenu, setShowMenu] = useState(false)
  return (

    <div className="flex justify-between items-center container mx-auto mt-5 mb-5">

  <div className="flex gap-5 items-center">
    <h1 onClick={()=>navigate('/')} className="text-3xl font-bold text-pink-500 cursor-pointer">🎟️SeatOva</h1>

    <ul className="hidden md:flex gap-3">
      {/* nav links */}
      <li>
    <NavLink to="/" end className={({ isActive }) =>
      `px-4 py-2 cursor-pointer block ${
        isActive ? "text-black font-bold border-b-2 border-b-emerald-400" : ""
      }`
    }>
      Home
    </NavLink>
  </li>

  <li>
    <NavLink to="/football" className={({ isActive }) =>
      `px-4 py-2 cursor-pointer block ${
        isActive ? "text-black font-bold border-b-2 border-b-emerald-400" : ""
      }`
    }>
      Football
    </NavLink>
  </li>

  <li>
    <NavLink to="/all-tickets" className={({ isActive }) =>
      `px-4 py-2 cursor-pointer block ${
        isActive ? "text-black  font-bold border-b-2 border-b-emerald-400" : ""
      }`
    }>
      Tickets
    </NavLink>
  </li>

  <li>
    <NavLink to="/all-football-teams" className={({ isActive }) =>
      `px-4 py-2 cursor-pointer block ${
        isActive ? "text-black font-bold border-b-2 border-b-emerald-400" : ""
      }`
    }>
      Teams
    </NavLink>
  </li>

  <li>
    <NavLink to="/world-cup-2026" className={({ isActive }) =>
      `px-4 py-2 cursor-pointer block ${
        isActive ? "text-black font-bold border-b-2 border-b-emerald-400" : ""
      }`
    }>
      FWC 2026
    </NavLink>
  </li>
    </ul>
  </div>

  {/* Right side */}
  <div className="flex items-center gap-4">
    
    {
         token ? <div className="flex items-center gap-2 cursor-pointer group relative">
                 <img src={assets.profile_pic} className="w-8 rounded-full" alt="" />
                 <img src={assets.dropdown_icon} className="w-2.5" alt="" />
                 <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                  <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                    <p onClick={()=>navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                    <p onClick={()=>navigate('/my-tickets')} className="hover:text-black cursor-pointer">My Tickets</p>
                    <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                  </div>
                    
                 </div>
         </div> : <div>
          {/* Sign in (desktop) */}
       <button onClick={(()=>navigate('/login'))} className="hidden md:block  bg-pink-300 px-4 py-2 rounded-full cursor-pointer">
        Create account
       </button>
         </div>
    }
    

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

import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
    <div className='NavBar'>
      <header className="bg-indigo-300 h-40 flex flex-col justify-center">
        <h1 className="text-5xl font-mono m-2">Foto Filter</h1>
        <p className="NavBar-Subtitle">Foto Filtering Fun</p>
        <nav>
          <NavLink className={({ isActive }) => isActive? "nav-link-active" : 'nav-link'} to='/'>HOME</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default NavBar

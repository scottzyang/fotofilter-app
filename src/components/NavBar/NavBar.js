import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
    <div className='NavBar'>
      <header>
        <h1>Foto Filter</h1>
        <p className="NavBar-Subtitle">Foto Filtering Fun</p>
      </header>
      
      <nav>
        <NavLink className={({ isActive }) => isActive? "nav-link-active" : 'nav-link'} to='/'>HOME</NavLink>
      </nav>
    </div>
  )
}

export default NavBar

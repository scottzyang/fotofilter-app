import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
    <div className='NavBar'>
      <header>
        <h1>FotoPhilter</h1>
        <p className="NavBar-Subtitle">FILTA YA OWN PHOTA</p>
      </header>
      
      <nav>
        <NavLink className={({ isActive }) => isActive? "nav-link-active" : 'nav-link'} to='/'>About</NavLink>
      </nav>
    </div>
  )
}

export default NavBar

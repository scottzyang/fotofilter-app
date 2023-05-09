import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
<header className="NavBar bg-indigo-300 h-40 flex flex-col justify-center">
  <h1 className="text-3xl sm:text-5xl font-mono font-bold m-2">FotoFilter</h1>
  <nav className="m-4 flex flex-wrap justify-center">
    <NavLink className="border-black border-4 rounded-lg py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2 drop-shadow-2xl" to='/' role="menuitem" aria-label="Home">Home</NavLink>
    <NavLink className="border-black border-4 rounded-lg py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2 drop-shadow-2xl hidden md:block" to='/select-image' role="menuitem" aria-label="Select">Select</NavLink>
    <NavLink className="border-black border-4 rounded-lg py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2 drop-shadow-2xl hidden md:block" to='/upload-image' role="menuitem" aria-label="Upload">Upload</NavLink>
  </nav>
</header>

  )
}

export default NavBar

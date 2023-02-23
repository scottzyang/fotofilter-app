import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
    <div className='NavBar'>
      <header className="bg-indigo-300 h-40 flex flex-col justify-center">
        <h1 className="text-5xl font-mono m-2 font-bold">FotoFilter</h1>
        <p className="NavBar-Subtitle">Foto Filtering Fun</p>
        <nav className="m-4">
          <NavLink className="border-black border-4 rounded-2xl py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2" to='/'>Home</NavLink>
          <NavLink className="border-black border-4 rounded-2xl py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2" to='/upload-image'>Upload</NavLink>
          <NavLink className="border-black border-4 rounded-2xl py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2" to='/select-image'>Select</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default NavBar

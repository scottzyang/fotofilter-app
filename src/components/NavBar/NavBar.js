import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
    <section className='NavBar'>
      <header className="bg-indigo-300 h-40 flex flex-col justify-center">
        <h1 className="text-5xl font-mono m-2 font-bold">FotoFilter</h1>
        <nav className="m-4">
          <NavLink className="border-black border-4 rounded-lg py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2 drop-shadow-2xl" to='/'>Home</NavLink>
          <NavLink className="border-black border-4 rounded-lg py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2 drop-shadow-2xl" to='/select-image'>Select</NavLink>
          <NavLink className="border-black border-4 rounded-lg py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2 drop-shadow-2xl" to='/upload-image'>Upload</NavLink>
        </nav>
      </header>
    </section>
  )
}

export default NavBar

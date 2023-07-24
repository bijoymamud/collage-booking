import React from 'react';
import { Link } from 'react-router-dom';




const navItems = <>


  <li tabIndex={0}>
    <Link className='font-bold' to="/">Home</Link>

  </li>
  <li tabIndex={0}>
    <Link className='font-bold' to="/collage">Collages</Link>

  </li>

  <li tabIndex={0}>
    <Link className='font-bold' to="/blogs">Admission</Link>

  </li>
  <li tabIndex={0}>
    <Link className='font-bold' to="/blogs">My Collage</Link>

  </li>





</>

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 h-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}


          </ul>
        </div>
        <h2>Collage Booking</h2>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          {
            navItems
          }


        </ul>
      </div>
      <div className="navbar-end">
        <div className='flex items-center gap-5'>


          <button>  </button>






          <Link to='/login'>
            <button className="btn">Login</button>
          </Link>


        </div>
      </div>
    </div>
  );
};

export default Navbar;
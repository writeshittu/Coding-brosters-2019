import React from 'react';
import {Link } from 'react-router-dom';
import logo from '../../utils/img/logo.png'


const NavBar = () => {
    return ( 
        <nav className="flex justify-around items-center  flex-wrap bg-white border-b border-black mb-4  ">
  <div className="flex items-center flex-shrink-0 text-black  mr-64 ">
    <img src={logo} alt="Logo" />
  </div>
  <div className="block lg:hidden">
    <button className="flex items-right px-3 py-2 border rounded text-black-200 border-black-400 hover:text-white hover:border-blue-500">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block  flex-grow lg:flex lg:items-right lg:w-auto">
    <div className="flex justify-end text-md lg:flex-grow ">
      <Link to="/special-offer" className="block mt-4 lg:inline-block lg:mt-0 text-black-200  hover:bg-blue-500 py-2 px-2 hover:text-white mr-6">
        Special Offers
      </Link>
      <Link to="/gallery" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:bg-blue-500 py-2 px-2 hover:text-white mr-6">
        Gallery
      </Link>
      <Link to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:bg-blue-500 py-2 px-2  hover:text-white mr-6">
        Login
      </Link>
      <Link to="/about-us" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:bg-blue-500 py-2 px-2 hover:text-white mr-6">
        About Us
      </Link>
      
    </div>
    
  </div>
</nav>
     );
}
 
export default NavBar;
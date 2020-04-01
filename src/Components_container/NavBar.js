import React from 'react';
import  './NavBar.css';


const App=()=> {
  return (
    <nav className="nav">
       <a href="/"> <img  className="ml5" style={{width:"200px"}} src="https://res.cloudinary.com/undercover/image/upload/v1584886586/RecreationalApp/HomeLogo_cewu0h.png" alt="logo" /></a>
        <ul  className="AppLink ml-auto dn-m">
            <li className="pointer link dim" > <a href="/specialoffer">Special Offers</a> </li>
            <li className="pointer link dim"> <a  href="/gallery">Gallery</a> </li>
            <li className="pointer link dim"> <a  href="/login">Login</a></li>
           <li className="pointer link dim"> <a href="/aboutus">About Us</a></li>
        </ul>
       
       
      
    </nav>
  );
}

export default App;

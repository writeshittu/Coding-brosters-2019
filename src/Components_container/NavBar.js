import React from 'react';
import  './NavBar.css';


function App() {
  return (
    <nav className="nav">
        <img  className="ml5" style={{width:"200px"}} src="https://res.cloudinary.com/undercover/image/upload/v1584886586/RecreationalApp/HomeLogo_cewu0h.png" alt="logo" />
        <ul  className="AppLink ml-auto dn-m">
            <li className="pointer link dim">Special Offers </li>
            <li className="pointer link dim">Gallery</li>
            <li className="pointer link dim">Login </li>
           <li className="pointer link dim"> About Us </li>
        </ul>
       
       
      
    </nav>
  );
}

export default App;

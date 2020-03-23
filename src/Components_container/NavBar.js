import React from 'react';
import HomeLogo from './HomeLogo.png';
import  './NavBar.css';


function App() {
  return (
    <nav className="nav">
        <img style={{width:"250px"}} src={HomeLogo} className="AppLogo" alt="logo" />
        <ul  className="AppLink">
            <li>
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Special Offers </a> 
            </li>
            <li>
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Gallery</a> 
            </li>
            <li>
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Login </a>
            </li>
           <li>
           <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> About Us </a>
           </li>
        </ul>
       
       
      
    </nav>
  );
}

export default App;

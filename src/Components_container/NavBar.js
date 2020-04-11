import React from "react";
import './NavBar.css'
import { Nav, Navbar} from "react-bootstrap";



 const NavBar=() => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bb b--light-silver">
      <Navbar.Brand href="/">
      <img  style={{width:"200px"}} src="https://res.cloudinary.com/undercover/image/upload/v1584886586/RecreationalApp/HomeLogo_cewu0h.png" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto pointer">
          <Nav.Link className="dim text-info" href="/special-offer">Special Offers</Nav.Link>
          <Nav.Link className="dim text-info" href="/gallery">Gallery</Nav.Link>
          <Nav.Link className="dim text-info" href="/login">Login</Nav.Link>
          <Nav.Link className="dim text-info" href="/about-us">About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavBar;
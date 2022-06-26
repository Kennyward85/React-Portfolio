import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Header = () => {

  
  return (
  <div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand><Link className="links" to="/">Roberson Air</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Nav>
      <Nav.Link><Link className="links" to="/">Home</Link></Nav.Link>
        <Nav.Link><Link className="links" to="/Certifications">Certifications</Link></Nav.Link>
        <Nav.Link><Link className="links" to="/Portfolio">Sample Work</Link></Nav.Link>
        <Nav.Link><Link className="links" to="/Contact">Contact</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <br/><br/><br/>
  </div>
    )
  }
export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';



class Nav extends React.Component  {


  render() {
  return (
  
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand><Link to="/">Kenneth Wardlow</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Nav>
      <Nav.Link><Link to="/">About</Link></Nav.Link>
        <Nav.Link><Link to="/PortfolioPage">Portfolio</Link></Nav.Link>
        <Nav.Link><Link to="/Contact">Contact</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <br/><br/><br/>
    )
  }
}
export default Nav;
import React,{useState} from "react";
import './header.css';
import {Nav,Navbar,NavDropdown} from "react-bootstrap";
import logo from "../images/logo.png";

function Header(){
 const [anim,setAnim]=useState(false);
 const changeClass=()=>{
   setAnim(window.scrollY>=100?true:false)
 };
 window.addEventListener('scroll',changeClass);

 return(
  <Navbar className={anim ? 'navbar navbar-anim' : 'navbar'} fixed='top' collapseOnSelect expand="lg">
  <Navbar.Brand className='home' href="#home"><img src={logo} alt='logo'/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 )
}
export default Header;

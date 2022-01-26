import React from "react";
import "../styles/Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import AuthService from "../utils/auth";


function Header() {
  const renderLogoutLink = () => {
    const render = AuthService.loggedIn()
    if (!render){
      return null
    }
    return <Nav.Link href="" id="text" onClick={AuthService.logout()}>Log Out</Nav.Link>;
  }
  const renderLoginLink = () => {
    const render = AuthService.loggedIn()
    if(render){
      return null
    }
    return <Nav.Link href="" id="text" >Login</Nav.Link>;
  }
  return (
    <div className="head">
      <h1>❓Welcome to the quiz Taker❓</h1>
      <Navbar>
        <Navbar.Brand href="" id="text">
          Quiz-Creator
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="" id="text">Home</Nav.Link>
          {renderLoginLink}
          {renderLogoutLink}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;

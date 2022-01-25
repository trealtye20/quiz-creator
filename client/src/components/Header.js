import React from "react";
import "../styles/Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import AuthService from "../utils/auth";


function Header() {

  return (
    <div className="head">
      <h1>❓Welcome to the quiz creator❓</h1>
      <Navbar>
        <Navbar.Brand href="#home" id="text">
          Quiz-Creator
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#home" id="text">Home</Nav.Link>
          <Nav.Link href="#features" id="text" >Login</Nav.Link>
          <Nav.Link href="#pricing" id="text" >Log Out</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;

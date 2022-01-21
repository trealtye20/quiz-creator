import React from 'react';
import '../styles/Navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';


function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" className="text-center">Quiz-Creator</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Login</Nav.Link>
      <Nav.Link href="#pricing">Log Out</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default Navigation;
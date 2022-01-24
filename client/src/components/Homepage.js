import React from 'react';
import '../styles/Homepage.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Homepage() {
    return (
        <div className="home">
            <h1>❓Welcome to the quiz creator❓</h1>
        
        <Navbar bg="dark" variant="dark">
   
        <Navbar.Brand href="#home" id="size">Quiz-Creator</Navbar.Brand>
        <Nav className='ml-auto'>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Create Quiz</Nav.Link>
          <Nav.Link href="#pricing">Leaderboard</Nav.Link>
        </Nav>
       
      </Navbar>
      </div>
    );
}
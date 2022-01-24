import React from 'react';
import '../styles/LoginSignup.css'
import {Button, Form, Card, Container, Row} from 'react-bootstrap';


function LoginSignup () {
    return (
      <Container>
        <Row>
      <Card className='col-md-6 mx-auto p-3'>
        <Form id="form-size" > 

        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Enter username" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <div id='buttons'>
  <Button variant="primary" type="submit">
    Log-In
  </Button>

  <Button variant="primary" type="submit">
    Sign-Up
  </Button>
</div>
</Form>
</Card>
</Row>
</Container>


    )
}

export default LoginSignup ;
import React from "react";
import "../styles/LoginSignup.css";
import { Button, Form, Card, Container, Row } from "react-bootstrap";
import { ADD_USER, LOGIN } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import  AuthService  from "../utils/auth";

function LoginSignup() {
  const [addUser, {addUserError}] = useMutation(ADD_USER);
  const [login, {loginInError}] = useMutation(LOGIN);
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const controlChangeHandler = (event, setter) => {
    setter(event.target.value);
  }
  const signUpHandler = async (event) => {
    event.preventDefault();
    try{
      const user = await addUser(
        {
        variables: {userName: username, email: email, password: password}
        }
      )
      AuthService.login(user.data.addUser.token);
    }
    catch(err){
      console.error(err);
    }
  }
  const logInHandler = async (event) => {
    event.preventDefault();
    try{
      const user = await login(
        {
          variables: { email: email, password: password }
        }
      )
      AuthService.login(user.data.login.token);
    }
    catch(err) {
      console.error(err);
    }
  }
  return (
    <Container>
      <Row>
        <Card className="col-md-6 mx-auto p-3" border="primary">
          <Form id="form-size">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter username" onChange={(event) => controlChangeHandler(event, setUsername)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(event) => controlChangeHandler(event, setEmail)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(event) => controlChangeHandler(event, setPassword)} />
            </Form.Group>

            <div id="buttons">
              <Button variant="primary" type="submit" onClick={logInHandler}>
                Log-In
              </Button>

              <Button variant="primary" type="submit" onClick={signUpHandler}>
                Sign-Up
              </Button>
            </div>
          </Form>
        </Card>
      </Row>
    </Container>
  );
}

export default LoginSignup;

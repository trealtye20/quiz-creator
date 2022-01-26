import React from 'react';
import "../styles/LoginSignup.css";
import { Button, Form, Card, Container, Row } from "react-bootstrap";

const QuizForm = () => {
    const [questions, setQuestions] = React.useState([<QuestionForm />]);
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter quiz title" />
        </Form.Group>
        {questions}
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form> 
  );
};

export default QuizForm;

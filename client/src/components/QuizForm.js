import React from 'react';
import "../styles/LoginSignup.css";
import PlusMinusInput from "./PlusMinusInput";
import QuestionForm from './QuestionForm';
import { Button, Form, Card, Container, Row } from "react-bootstrap";

const QuizForm = () => {
    const [questions, setQuestions] = React.useState([<QuestionForm />]);
    const onRemoveQuestion = (e) => {
        e.preventDefault();
        console.log("RemoveQuestion")
    }
    const onAddQuestions = (e) => {
        e.preventDefault();
        console.log("AddQuestion")
    }
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Control type="text" placeholder="Enter quiz title" />
        </Form.Group>
        <Form.Group>
            {questions}
            <PlusMinusInput buttonHandlers={{decreaseHandler: onRemoveQuestion, increaseHandler: onAddQuestions}}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form> 
  );
};

export default QuizForm;

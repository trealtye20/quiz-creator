import React from 'react';
import { Form, Button } from 'react-bootstrap';

const QuizOptionsForm = ({buttonColor, buttonHandler, index}) => {
    const displayInline = {display: 'inline-block', width:'70%'};
  return (
    <div>
        <Button onClick={(e) => buttonHandler(e, index)} style={{backgroundColor:buttonColor}}>Correct Answer</Button>
        <Form.Control type="text" placeholder='Enter Answer' style={displayInline}></Form.Control>
    </div>
  );
};

export default QuizOptionsForm;

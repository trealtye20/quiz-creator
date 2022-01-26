import React from 'react';
import {Form, Card } from 'react-bootstrap';
import QuizOptionsForm from './QuizOptionsForm';

const QuestionForm = () => {
  const [buttonOneColor, setButtonOneColor] = React.useState("blue");
  const [buttonTwoColor, setButtonTwoColor] = React.useState("blue");
  const [buttonThreeColor, setButtonThreeColor] = React.useState("blue");
  const [buttonFourColor, setButtonFourColor] = React.useState("blue");
  const onButtonClick = (e, buttonId) => {
    e.preventDefault();
    switch(buttonId){
      case 0:
        setButtonOneColor("red");
        setButtonTwoColor("blue");
        setButtonThreeColor("blue");
        setButtonFourColor("blue");
      break;
      case 1:
        setButtonOneColor("blue");
        setButtonTwoColor("red");
        setButtonThreeColor("blue");
        setButtonFourColor("blue");
      break;
      case 2:
        setButtonOneColor("blue");
        setButtonTwoColor("blue");
        setButtonThreeColor("red");
        setButtonFourColor("blue");
      break;
      case 3:
        setButtonOneColor("blue");
        setButtonTwoColor("blue");
        setButtonThreeColor("blue");
        setButtonFourColor("red");
      break;
    }
  }
  return (
      <Form.Group className = "mb-3" controlId="formBasic">
        <Form.Control type= "text" placeholder="Enter question" />
        <QuizOptionsForm 
        buttonColor={buttonOneColor}
        buttonHandler={onButtonClick}
        index={0}
        />
        <QuizOptionsForm 
        buttonColor={buttonTwoColor}
        buttonHandler={onButtonClick}
        index={1}
        />
        <QuizOptionsForm 
        buttonColor={buttonThreeColor}
        buttonHandler={onButtonClick}
        index={2}
        />
        <QuizOptionsForm 
        buttonColor={buttonFourColor}
        buttonHandler={onButtonClick}
        index={3}
        />
      </Form.Group>
  );
};

export default QuestionForm;

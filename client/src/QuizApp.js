import React, { useState, useEffect } from "react";
import {Card} from 'react-bootstrap';
import './styles/QuizApp.css'

export default function QuizApp({ quiz }) {
  console.log(`QuizApp: quiz = ${JSON.stringify(quiz)}`);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(0);
  const [score, setScore] = useState(0);
  //const [displayTimer, setDisplayTimer] = useState(0);
  let interval;
  let timer = 0;

  useEffect(() => {
    console.log("useEffect- current question:", currentQuestion);
    startTimer();
  }, [currentQuestion]);

  const startTimer = () => {
    console.log('startTimer');
    if (!interval) {
      console.log(interval);
      interval = setInterval(() => {
        console.log('interval')
        console.log(`timer: ${timer}, quiz.allottedTime: ${quiz.allottedTime}`);
        if (timer < quiz.allottedTime) {
        // setTimer((timer) => timer + 1 );
        timer = timer + 1;
        //setDisplayTimer(timer);
        } else {
          timer = 0;
          console.log("else");
          handleOptionClick(false);
        }
      }, 1000);
    }
  };

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 20);
    }
    console.log("current question: ", currentQuestion);
    const nextQuestion = currentQuestion + 1;
    console.log(`next question: ${nextQuestion}`)
    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestion(nextQuestion);
      clearInterval(interval);
      //setDisplayTimer(timer);
      startTimer();
    } else {
      setShowScore(true);
      clearInterval(interval);
    }
  };
  const checkAnswer = (answer, correctAnswer) => {
    return answer == correctAnswer;
  };
  return (

    <Card id="cards" border="primary">
    <div className="QuizApp">
      {showScore ? (
        <div className="score" id="scores">Your score is {score} !</div>
      ) : (
        <>
          <div className="questions" id="questions">
            <div className="question">{quiz.questions[currentQuestion].q}</div>
          </div>
          <div className="options" id="options">
            {quiz.questions[currentQuestion].options.map((answerOption) => (
              <button id="button"
                onClick={() =>
                  handleOptionClick(
                    checkAnswer(
                      answerOption,
                      quiz.questions[currentQuestion].answer
                    )
                  )
                }
              >
                {answerOption}
              </button>
            ))}
          {/*<div>{displayTimer}</div>*/}
          </div>
        </>
      )}
    </div>

    </Card>
  );
}

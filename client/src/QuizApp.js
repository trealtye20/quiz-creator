import React, { useState, useEffect } from "react";

export default function QuizApp({ quiz }) {
  console.log(`QuizApp: quiz = ${JSON.stringify(quiz)}`);
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(0);
  const [score, setScore] = useState(0);
  // const [timer, setTimer] = useState(0);
  let interval;
  let timer = 0;
  let currentQuestion = 0;

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
      // setCurrentQuestion(nextQuestion);
      currentQuestion = nextQuestion;
      clearInterval(interval);
      // startTimer();
    } else {
      setShowScore(true);
    }
  };
  const checkAnswer = (answer, correctAnswer) => {
    return answer == correctAnswer;
  };
  return (
    <div className="QuizApp">
      {showScore ? (
        <div className="score">Your score is {score} !</div>
      ) : (
        <>
          <div className="questions">
            <div className="question">{quiz.questions[currentQuestion].q}</div>
          </div>
          <div className="options">
            {quiz.questions[currentQuestion].options.map((answerOption) => (
              <button
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
          </div>
        </>
      )}
    </div>
  );
}

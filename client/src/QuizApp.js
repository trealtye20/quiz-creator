import React, { useState } from "react";

export default function QuizApp({props}) {
  console.log(props)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(0);
  const [score, setScore] = useState(0);
  // const [timer, setTimer] = useState(0);
  // let interval;

// const startTimer = ()=> {
//   if (!interval){
//     interval = setInterval(()=>{
//       console.log(!interval)
//       console.log(timer);
//       if (timer < props.allottedTime)
//       {setTimer(timer => timer + 1 )}
//       else {
//         console.log("else");
//         handleOptionClick(false)
//       }
//     }, 1000)
//   }
  
// }
// startTimer();


  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 20);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < props.questions.length) {
      setCurrentQuestion(nextQuestion);
      // clearInterval(interval);
      // startTimer();
    } else {
      setShowScore(true);
    }
  };
const checkAnswer = (answer, correctAnswer) => {
return answer == correctAnswer
}
  return (
    <div className="QuizApp">
      {showScore ? (
        <div className="score">Your score is {score} !</div>
      ) : (
        <>
          <div className="questions">
            <div className="question">{props.questions[currentQuestion].q}</div>
          </div>
          <div className="options">
            {props.questions[currentQuestion].options.map((answerOption) => (
              <button onClick={() => handleOptionClick(checkAnswer(answerOption, props.questions[currentQuestion].answer))}>
                {answerOption}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

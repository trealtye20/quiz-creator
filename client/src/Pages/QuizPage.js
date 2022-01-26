import React from "react";
import "../styles/Quizzes.css";
import QuizApp from "../QuizApp";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_QUIZ } from "../utils/queries";

function QuizPage() {
  const {quizId} = useParams()
  const {loading, error, data} = useQuery(GET_QUIZ, {
    variables: {_id: quizId}
  })
  
  const renderApp = () => {
    let render;
    if (loading){render = <h1>I'm Loading!</h1>}
    else if (error){render = <h1>Error</h1>}
    else { 
      render = <QuizApp  quiz={data.quiz}/>
    }
    return render;
  }
  return (
    <div>{renderApp()}</div>
    
  );

}

export default QuizPage;

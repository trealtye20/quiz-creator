import React from "react";
import "../styles/Quizzes.css";
import QuizApp from "../QuizApp";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_QUIZ } from "../utils/queries"

function QuizPage() {
  console.log("on the quiz page")
  const {quizId} = useParams()
  console.log(quizId)
  const {loading, error, data} = useQuery(GET_QUIZ, {
    variables: {_id: quizId}
  })
  
  const renderApp = () => {
    let render;
    if (loading){render = <h1>I'm Loading!</h1>}
    else if (error){render = <h1>Error</h1>}
    
    else { 
      console.log(data)
      render =  <QuizApp props = {data}/>
    }
    return render;
  }
  return (
    
    <div>{renderApp()}</div>
    
  );

}

export default QuizPage;

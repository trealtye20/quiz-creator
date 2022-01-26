import React from "react";
import Header from "../components/Header";
import QuizPage from "./QuizPage";
// import LoginSignup from "../components/LoginSignup";
// import Users from "../components/Users";
import Footer from "../components/Footer";
import { useQuery } from "@apollo/client";
import { GET_ALL_QUIZZES } from "../utils/queries";
//import { Cards } from "../components/Cards";
import CardDisplay from "../components/CardDisplay";
import '../styles/Feed.css'
const Mainfeed = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUIZZES);
  let render;
  if (error) {
    render = <h1>Error Error!</h1>;
  }
  if (loading) {
    render = <h1>I'm Loading!</h1>;
  } else {
    render = data.quizzes.map((quizData, index) => {
      return <CardDisplay data={quizData} key={index} />;
    });
  }

  return (
    <div id="feed">
      <Header />
      {render}
      <Footer />
    </div>
  );
};

export default Mainfeed;

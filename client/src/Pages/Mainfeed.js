import React from "react";
import Header from "../components/Header";
import Quizzes from "./Quizzes";
// import LoginSignup from "../components/LoginSignup";
// import Users from "../components/Users";
import Footer from "../components/Footer";
import { useQuery } from "@apollo/client";
import { GET_ALL_QUIZZES } from "../utils/queries";

const Mainfeed = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUIZZES);
  let render;
  if (error){render = <h1>Error Error!</h1>}
  if (loading){render = <h1>I'm Loading!</h1>}
  else{
    render = data.quizzes.map((app) => {
      return (
        <Quizzes title={app.title}/>
      );
    })
  }

  return (
    <div>
      <Header />
      {render}
      <Footer />
    </div>
  );
};

export default Mainfeed;

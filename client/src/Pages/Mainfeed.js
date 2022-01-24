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
  return (
    <div>
      <Header />
      if (error){<h1>Error Error!</h1>}
      if (loading){<h1>I'm Loading!</h1>}
      else
      {data.map((app) => {
        return (
          <Quizzes
            title={app.title}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default Mainfeed;

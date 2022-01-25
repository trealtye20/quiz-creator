import React from "react";
import "../styles/Quizzes.css";

function Quizzes({ id, title, question, options, answer }) {
  return (
    <div className="card col d-flex justify-content-center">
      {/* <img className="card-img" src={image} alt="Card caption" /> */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{question}</p>
        <p className="card-text">{options}</p>
        <p className="card-text">{answer}</p>
      </div>
    </div>
  );
}

export default Quizzes;

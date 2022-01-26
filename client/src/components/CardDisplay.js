import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "../styles/CardDisplay.css";

function CardDisplay({data}) {
  console.log(`CardDisplay: ${JSON.stringify(data, null, 2)}`);
  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.tagName)
    if (!e.target.tagName === "A") {return;}
    //Redirect to quiz page
    //<ReactComponent props={data} />
    window.location.assign("/takequiz/" + data._id)
  }
  return (
    <Card id="quizcard"
      bg="dark"
      text="white"
      style={{ width: "32rem" }}
      className="mb-2 remove_link_colour"
    >
      <a onClick={onClickHandler} >
      <Card.Header className="unclickable">{data.title}</Card.Header>
      <Card.Body className= "unclickable">
        <Card.Text>
          {data.description}
        </Card.Text>
      </Card.Body>
      </a>
    </Card>
  );
}

export default CardDisplay;
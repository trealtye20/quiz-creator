import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./CardDisplay.css";

function CardDisplay({data}) {
  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.tagName)
    if (!e.target.tagName === "A") {return;}
    //Redirect to quiz page
    //<ReactComponent props={data} />
  }
  return (
    <Card
      bg="dark"
      text="white"
      style={{ width: "32rem" }}
      className="mb-2 remove_link_colour"
    >
      <a onClick={onClickHandler} >
      <Card.Header className="unclickable">{data.title}</Card.Header>
      <Card.Body className= "unclickable">
        <Card.Title> </Card.Title>
        <Card.Text>
          Card Text
        </Card.Text>
      </Card.Body>
      </a>
    </Card>
  );
}

export default CardDisplay;
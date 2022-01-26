import React, { Component } from "react";
import "./PlusMinus.css"

const PlusMinusInput = ({props}) => {
    return (
    <div className="def-number-input number-input">
        <button onClick={props.decreaseHandler} className="minus"></button>
        <button onClick={props.increaseHandler} className="plus"></button>
    </div>
    );
}

export default PlusMinusInput;
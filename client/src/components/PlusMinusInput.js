import React, { Component } from "react";
import "./PlusMinus.css"

const PlusMinusInput = ({buttonHandlers}) => {
    return (
    <div className="def-number-input number-input">
        <button onClick={buttonHandlers.decreaseHandler} className="minus"></button>
        <button onClick={buttonHandlers.increaseHandler} className="plus"></button>
    </div>
    );
}

export default PlusMinusInput;
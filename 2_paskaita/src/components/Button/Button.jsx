import React from "react";
import "./Button.css";
// props = {text: "Say hello", type: "button" | "submit" | "reset", bgColor: "red"}
// props.text
// props.type = ({ type })
const Button = ({ text, type, bgColor }) => (
  <div className="button-wrapper">
    <button type={type} className="button" style={{ backgroundColor: bgColor }}>
      {text}
    </button>
  </div>
);

export default Button;


// koda galima rasyti:

// const add1 = (num)=>{
  //return num + num;
//};
// arba 

// const add = (num)=> num + num;
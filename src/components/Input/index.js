import React from "react";
import "./input.css";

const Input = (props) => {
  return (
    <div>
      <input {...props} autoComplete="off" />
    </div>
  );
};
export default Input;

import React from "react";
import "./input.css";

const Input = (props) => {
  return (
    <div>
      <input autoComplete="off" {...props} />
    </div>
  );
};
export default Input;

import React from "react";

const Option = ({ option }) => {
  return (
    <div>
      <input type="radio" name="radio-1" className="radio" checked />
      <span className="font-semibold">{option}</span>
    </div>
  );
};

export default Option;

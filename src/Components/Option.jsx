import React from "react";

const Option = ({ option }) => {
  return (
    <div className="flex items-center p-2">
      <input
        type="radio"
        name="radio-2"
        className="radio radio-primary"
        checked
      />
      <span className="font-semibold pl-5">{option}</span>
    </div>
  );
};

export default Option;

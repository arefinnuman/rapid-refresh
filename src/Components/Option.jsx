import React from "react";

const Option = ({ option, correctAnswer }) => {
  const handleQuizAnswer = (option) => {
    if (option === correctAnswer) {
      console.log("Correct Answer");
    } else {
      console.log("wrong Answer");
    }
  };
  return (
    <div className="flex items-center p-2">
      <label>
        <input
          onClick={() => handleQuizAnswer(option)}
          type="radio"
          name="radio-2"
          className="radio radio-primary"
        />
        <span className="font-semibold pl-5">{option}</span>
      </label>
    </div>
  );
};

export default Option;

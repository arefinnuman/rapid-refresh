import React from "react";
import Option from "./Option";

const Question = ({ ques }) => {
  const { correctAnswer, question, id, options } = ques;
  return (
    <div>
      <h1>{question}</h1>
      {options.map((option) => (
        <Option option={option}></Option> 
      ))}
    </div>
  );
};

export default Question;

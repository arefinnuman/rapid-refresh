import React from "react";
import Option from "./Option";

const Question = ({ ques }) => {
  const { correctAnswer, question, options } = ques;
  return (
    <div className="card bg-base-100 shadow-xl m-5 p-5">
      <h1 className="text-xl font-semibold p-2">{question}</h1>
      
      {options.map((option) => (
        <Option option={option} correctAnswer={correctAnswer}></Option>
      ))}
    </div>
  );
};

export default Question;

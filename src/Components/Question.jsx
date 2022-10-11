import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Swal from "sweetalert2";
import Option from "./Option";

const Question = ({ ques }) => {
  const { correctAnswer, question, options } = ques;
  const correctAns = (correctAns) => {
    Swal.fire(correctAnswer);
  };

  return (
    <div className="card bg-base-100 shadow-xl m-5 p-5">
      <div className="flex justify-between">
        <small className=""></small>
        <EyeIcon
          onClick={() => correctAns(correctAnswer)}
          className="h-5 w-5 text-primary cursor-pointer"
        />
      </div>
      <h1 className="text-xl font-semibold p-2">{question}</h1>
      {options.map((option) => (
        <Option
          option={option}
          key={option.id}
          correctAnswer={correctAnswer}
        ></Option>
      ))}
    </div>
  );
};

export default Question;

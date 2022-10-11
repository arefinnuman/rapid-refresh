import React from "react";
import Swal from "sweetalert2";

const Option = ({ option, correctAnswer }) => {
  const handleQuizAnswer = (option) => {
    if (option === correctAnswer) {
      Swal.fire("Good job!", "You Answer is Correct!", "success");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You did the Wrong Answer!",
      });
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

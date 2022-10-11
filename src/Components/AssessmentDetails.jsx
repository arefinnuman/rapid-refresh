import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const AssessmentDetails = () => {
  const questions = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-5 m-5">
      {questions.data.questions.map((ques) => (
        <Question key={questions.id} ques={ques}></Question>
      ))}
    </div>
  );
};

export default AssessmentDetails;

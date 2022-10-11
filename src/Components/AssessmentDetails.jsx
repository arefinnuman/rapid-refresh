import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const AssessmentDetails = () => {
  const questions = useLoaderData();

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-4">
        Quiz of {questions.data.name}
      </h1>
      <div className="grid  md:grid-cols-2 sm:grid-cols-1  gap-5 m-5">
        {questions.data.questions.map((ques) => (
          <Question key={ques.id} ques={ques}></Question>
        ))}
      </div>
    </div>
  );
};

export default AssessmentDetails;

import React from "react";
import { useLoaderData } from "react-router-dom";
import image from "../Assets/image.png";
import Topic from "./Topic";

const Assessments = () => {
  const topics = useLoaderData();
  return (
    <div>
      <div className="md:m-20 flex flex-col items-center justify-center">
        <div className="md:mx-20 m-5">
          <h1 className="text-2xl font-bold">
            What is the Rapid Refresh quiz maker?
          </h1>
          <p className="semi-bold">
            Rapid Refresh is a quiz that’s delivered at regular intervals to
            learners to help check their understanding and reinforce learning.
            Questions are set up using our easy-to-complete spreadsheet, and
            you’ll have access to timely analytics to help understand individual
            learners as well as overall performance once a quiz is complete.
          </p>
        </div>
        <img src={image} alt="" />
      </div>
      <div>
        <h1 className="text-4xl font-extrabold text-center text-primary">
          Test YourSelf
        </h1>
      </div>
      <div className="md:flex sm:flex-row justify-center items-center md:m-20">
        {topics.data.map((topic) => (
          <Topic topic={topic} key={topic.id}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Assessments;

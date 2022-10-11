import React from "react";
import { useLoaderData } from "react-router-dom";
import image from "../Assets/image.png";
import Topic from "./Topic";

const Assessments = () => {
  const topics = useLoaderData();
  return (
    <div className="min-h-screen">
      <div className="card lg:card-side bg-base-100 shadow-l m-10 ">
        <figure>
          <img className="" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">What is the Rapid Refresh quiz maker?</h2>
          <p>
            Rapid Refresh is a quiz that’s delivered at regular intervals to
            learners to help check their understanding and reinforce learning.
            Questions are set up using our easy-to-complete spreadsheet, and
            you’ll have access to timely analytics to help understand individual
            learners as well as overall performance once a quiz is complete.
          </p>
          <h2 className="card-title">Automated delivery</h2>
          <p>
            Watch the magic happen as we deploy your quiz at intervals
            determined by you. Your quiz is delivered using EdApp’s familiar
            microlearning templates. You’ll also get to take advantage of the
            gamification built as standard into EdApp, including leaderboards
            and notifications.
          </p>
        </div>
      </div>

      <div className="md:flex sm:flex-row min-h-screen justify-center items-center">
        {topics.data.map((topic) => (
          <Topic topic={topic} key={topic.id}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Assessments;

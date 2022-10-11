import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "./Topic";

const Assessments = () => {
  const topics = useLoaderData();
  return (
    <div className="md:flex sm:flex-row min-h-screen justify-center items-center">
      {topics.data.map((topic) => (
        <Topic topic={topic} key={topic.id}></Topic>
      ))}
    </div>
  );
};

export default Assessments;

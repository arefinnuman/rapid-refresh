import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { name, logo, id } = topic;
  return (
    <div className="card w-96 bg-info shadow-xl m-5">
      <figure className="px-10 pt-10">
        <img src={logo} alt="Topics" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center ">
        <h2 className="card-title text-base-100">{name}</h2>
        <Link to={`/details/${id}`} className="btn btn-primary">
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default Topic;

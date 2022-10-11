import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AssessmentDetails from "../Components/AssessmentDetails";
import Assessments from "../Components/Assessments";
import Blog from "../Components/Blog";
import Root from "../Components/Root";
import Statistics from "../Components/Statistics";
import { loaderFunction } from "./LoaderFunction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: (
      <>
        <h1>Error</h1>
      </>
    ),
    children: [
      {
        path: "/",
        loader: loaderFunction,
        element: <Assessments></Assessments>,
      },
      {
        path: "/home",
        loader: loaderFunction,
        element: <Assessments></Assessments>,
      },
      {
        path: "/details/:detailsId",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.detailsId}`
          );
        },
        element: <AssessmentDetails></AssessmentDetails>,
      },
      { path: "/assessments", element: <Assessments></Assessments> },
      { path: "/statistics", element: <Statistics></Statistics> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);

export default router;

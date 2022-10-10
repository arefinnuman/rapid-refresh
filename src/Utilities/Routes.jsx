import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Assessments from '../Components/Assessments';
import Blog from '../Components/Blog';
import Root from '../Components/Root';
import Statistics from '../Components/Statistics';

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement: <><h1>Error</h1></>,
        children:[
            {path:"/", element: <Assessments></Assessments>},
            {path:"/home", element: <Assessments></Assessments>},
            {path:"/assessments", element: <Assessments></Assessments>},
            {path:"/statistics", element: <Statistics></Statistics>},
            {path:"/blog", element: <Blog></Blog>}
        ]
    }
]
)

export default router;
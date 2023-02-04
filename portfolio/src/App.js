import './App.css';
import Music from './Music';
import React from "react";
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";

import Root from './Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },     
   {
        path: "home",
        element: <Home />,
      },
    ],
    );




function App() {
 
  return (
    <RouterProvider router={router}/>    
  );
}

export default App;

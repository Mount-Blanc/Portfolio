import './App.css';
import Music from './components/Music';
import React from "react";
import Home from './components/Home';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";

import Root from './components/Root';
import Welcome from './components/Welcome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path:"/",
        element:<Welcome/>
      },
         {
        path: "/home",
        element: <Home />,
      },
    ]
  },     

    ],
    );




function App() {
 
  return (
    <RouterProvider router={router}/>    
  );
}

export default App;

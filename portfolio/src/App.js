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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
    </Route>
  )
);



function App() {
 
  return (
    <RouterProvider router={router}>
    
    <Music/>
    <Home/>
    <Skills/>
    <Projects/>
</RouterProvider>
  );
}

export default App;

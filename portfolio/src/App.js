import logo from './logo.svg';
import './App.css';
import Music from './Music';
import React, { useState, useEffect } from "react";
import Home from './Home';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(prevIsVisible => !prevIsVisible);
    }, 700);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='crt'>
    <h1 >
    Welcome
    </h1>
    <h2>My Name is Wilson ramos and i am an aspiring front-end web developer</h2>

    {isVisible &&<div className='press-to-play'>
    Press any key to play
    </div>}
    
    <Music/>
    <Home/>
    </div>
  );
}

export default App;

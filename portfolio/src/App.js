import logo from './logo.svg';
import './App.css';
import Music from './Music';
import React, { useState, useEffect } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(prevIsVisible => !prevIsVisible);
    }, 700);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
    <div className="App">
    Hello
    </div>{isVisible &&<div className='press-to-play'>
    Press any key to play
    </div>}
    
    <Music/>
    </div>
  );
}

export default App;

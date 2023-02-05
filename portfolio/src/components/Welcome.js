import React, { useState, useEffect } from "react";
import Spaceinvader from "../Space-Invader";
import './Welcome.css'
import Animation from "./Animation";
function Welcome () {

    
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setIsVisible(prevIsVisible => !prevIsVisible);
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
  

    return(
       < div className='stars crt typewriter'>
    <h1 >
    Welcome
    </h1>
    <h2>My Name is Wilson ramos and i am an aspiring front-end web developer</h2>

    {/* {isVisible && } */}
        </div>
    )
}
export default Welcome
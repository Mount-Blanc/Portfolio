import React, { useState, useEffect } from "react";
import './Welcome.css'

function Welcome () {

    
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setIsVisible(prevIsVisible => !prevIsVisible);
      }, 700);
      return () => clearInterval(intervalId);
    }, []);
  


    return(
       < div className='stars crt typewriter'>
    <h1 >
    Welcome
    </h1>
    <h2>My Name is Wilson ramos and i am an aspiring front-end web developer</h2>

    {isVisible &&< a href='/home' className='press-to-play'>
    Press any key to play
    </a>}
        </div>
    )
}
export default Welcome
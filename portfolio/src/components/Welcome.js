import React, { useState, useEffect } from "react";
import Spaceinvader from "../Space-Invader";
import './Welcome.css'
import Animation from "./Animation";
import {Link, useNavigate } from "react-router-dom";

function Welcome () {

  const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
  const [transitionani, settransitionani] = useState (false)





    useEffect(() => {
      const intervalId = setInterval(() => {
        setIsVisible(prevIsVisible => !prevIsVisible);
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
  

    const clickHandler = () => {
      settransitionani(true)
      setInterval(() => {
        navigate('/home')
      }, 3000);
    }

    return(
      <>
        {transitionani ? <Animation/> : (< div className='stars'>
    <h1 >
    Welcome
    </h1>
    <p>My Name is <span className="name">Wilson Ramos</span> and i am an aspiring front-end web developer</p>

     {isVisible && 
     (<button onClick={clickHandler}>Click me</button>)} 
        </div>) }

     </>
    )
}
export default Welcome
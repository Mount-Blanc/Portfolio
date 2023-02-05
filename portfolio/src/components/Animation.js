import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web'
import { Link } from 'react-router-dom';
import spaceinvaders from './spaceinvaders.png';
import "./Animation.css"

  const Animation = () => {
    const [Trans, setTrans] = useState(false)
    const transitions = useTransition(Trans, {
      from: { opacity: 0 },
      enter: { opacity: 1},
      leave: { opacity: 0 }
    })
  
    return(
    <>
    { transitions((style, item) => (
      <animated.div style={style}>
        <div className='crt'>
          <div className='backdrop '>
        <img className='transition' src={spaceinvaders}/></div>
       </div>
      </animated.div>
    ))}
  </>
    )
  };
  

export default Animation;

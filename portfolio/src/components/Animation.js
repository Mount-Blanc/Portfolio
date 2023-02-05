import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web'
import { Link } from 'react-router-dom';
import spaceinvaders from './spaceinvaders.png';

const Animation = () => {
  const [showImage, setShowImage] = useState(false);
  const transitions = useTransition(showImage, {
    from: { opacity: 0, transform: 'scale(2.5)' },
    enter: { opacity: 1, transform: 'scale(10)' },
    leave: { opacity: 0, transform: 'scale(0.5)' }
  })

  const handleClick = () => {
    setShowImage(true);

  };


  return (
  <div>
    <button onClick={handleClick}>Click me</button>
   {transitions((style, item) => (
    <animated.div style={style}> 
    {showImage && (<img src={spaceinvaders}/>)}
     </animated.div> 
   
  )
  )}
  </div>
  )
}

export default Animation;

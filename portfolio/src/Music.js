import React, { useState } from 'react';
import SpaceInvaders from './SpaceInvaders.mp3'

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      <audio controls autoPlay src={SpaceInvaders}  onPlay={handlePlay} onPause={handlePause} />
       {isPlaying ? <p>Now playing</p> : <p>Paused</p>}
    </div>
  );
};

export default Music;

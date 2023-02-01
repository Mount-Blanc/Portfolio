import React, { useState } from 'react';
import SpaceInvaders from './SpaceInvaders.mp3'

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div>
      {/* <button onClick={handlePlay}>Play</button> */}
      <button onClick={handleMute}>{isMuted ? "Unmute" : "Mute"}</button>
        <audio  autoPlay loop muted={isMuted} src={SpaceInvaders} />
    </div>
  );
};

export default Music;

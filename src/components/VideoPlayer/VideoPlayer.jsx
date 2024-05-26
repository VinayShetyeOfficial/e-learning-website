import React, { useRef } from 'react';
import './VideoPlayer.css';
import { assets } from '../../assets/assets';

const VideoPlayer = ({ playState, setPlayState }) => {
  const playerRef = useRef();
  const videoRef = useRef();

  const closePlayer = (e) => {
    if (e.target === playerRef.current) {
      setPlayState(false);
      videoRef.current.pause(); 
    }
  };

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={playerRef} onClick={closePlayer}>
      <video ref={videoRef} src={assets.video} autoPlay controls></video>
    </div>
  );
};

export default VideoPlayer;

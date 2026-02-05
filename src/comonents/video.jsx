import React, { useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video ref={videoRef} width="1550" controls>
        <source src="./images/PHRMS.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        
      </div>
    </div>
  );
};

export default VideoPlayer;

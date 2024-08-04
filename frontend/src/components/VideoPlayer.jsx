import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ stream, muted }) => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      muted={muted}
      className="w-full h-full object-cover rounded-lg"
    />
  );
};

export default VideoPlayer;
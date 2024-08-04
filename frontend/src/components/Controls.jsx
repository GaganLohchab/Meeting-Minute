import React, { useState } from 'react';
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaPhoneSlash } from 'react-icons/fa';

const Controls = ({ onToggleAudio, onToggleVideo, onLeaveRoom }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  const handleToggleAudio = () => {
    setIsMuted(!isMuted);
    onToggleAudio(!isMuted);
  };

  const handleToggleVideo = () => {
    setIsVideoOff(!isVideoOff);
    onToggleVideo(!isVideoOff);
  };

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-center space-x-4">
      <button
        className={`btn btn-circle ${isMuted ? 'btn-error' : 'btn-primary'}`}
        onClick={handleToggleAudio}
      >
        {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
      </button>
      <button
        className={`btn btn-circle ${isVideoOff ? 'btn-error' : 'btn-primary'}`}
        onClick={handleToggleVideo}
      >
        {isVideoOff ? <FaVideoSlash /> : <FaVideo />}
      </button>
      <button
        className="btn btn-circle btn-error"
        onClick={onLeaveRoom}
      >
        <FaPhoneSlash />
      </button>
    </div>
  );
};

export default Controls;
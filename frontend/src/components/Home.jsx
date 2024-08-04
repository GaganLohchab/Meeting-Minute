import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const createRoom = () => {
    const newRoomId = uuidv4();
    navigate(`/room/${newRoomId}`);
  };

  const joinRoom = () => {
    if (roomId) {
      navigate(`/room/${roomId}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Meeting Minutes</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <button
          className="btn btn-primary w-full mb-4"
          onClick={createRoom}
        >
          Create New Room
        </button>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Enter Room ID"
            className="input input-bordered flex-grow"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <button
            className="btn btn-secondary"
            onClick={joinRoom}
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
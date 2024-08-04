import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import VideoPlayer from './VideoPlayer';
import Controls from './Controls';

const Room = () => {
  const [peers, setPeers] = useState([]);
  const [userStream, setUserStream] = useState(null);
  const socketRef = useRef();
  const userVideoRef = useRef();
  const peersRef = useRef([]);
  const { roomId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    socketRef.current = io.connect(process.env.REACT_APP_BACKEND_URL);
    
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        setUserStream(stream);
        if (userVideoRef.current) {
          userVideoRef.current.srcObject = stream;
        }
        
        socketRef.current.emit('join-room', roomId, socketRef.current.id);
        
        socketRef.current.on('user-connected', userId => {
          connectToNewUser(userId, stream);
        });
        
        socketRef.current.on('user-disconnected', userId => {
          const peerObj = peersRef.current.find(p => p.peerID === userId);
          if (peerObj) {
            peerObj.peer.destroy();
          }
          const peers = peersRef.current.filter(p => p.peerID !== userId);
          peersRef.current = peers;
          setPeers(peers);
        });
      });

    return () => {
      socketRef.current.disconnect();
      userStream?.getTracks().forEach(track => track.stop());
    };
  }, [roomId]);

  function connectToNewUser(userId, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on('signal', signal => {
      socketRef.current.emit('offer', { signal, to: userId });
    });

    peer.on('stream', userVideoStream => {
      const peerObj = { peerID: userId, peer, stream: userVideoStream };
      setPeers(users => [...users, peerObj]);
    });

    socketRef.current.on('answer', signal => {
      peer.signal(signal);
    });

    peersRef.current.push({
      peerID: userId,
      peer,
    });
  }

  const handleToggleAudio = (isMuted) => {
    if (userStream) {
      userStream.getAudioTracks()[0].enabled = !isMuted;
    }
  };

  const handleToggleVideo = (isVideoOff) => {
    if (userStream) {
      userStream.getVideoTracks()[0].enabled = !isVideoOff;
    }
  };

  const handleLeaveRoom = () => {
    socketRef.current.disconnect();
    userStream?.getTracks().forEach(track => track.stop());
    navigate('/');
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow grid grid-cols-2 gap-4 p-4">
        {userStream && (
          <VideoPlayer stream={userStream} muted />
        )}
        {peers.map((peer) => (
          <VideoPlayer key={peer.peerID} stream={peer.stream} />
        ))}
      </div>
      <Controls
        onToggleAudio={handleToggleAudio}
        onToggleVideo={handleToggleVideo}
        onLeaveRoom={handleLeaveRoom}
      />
    </div>
  );
};

export default Room;
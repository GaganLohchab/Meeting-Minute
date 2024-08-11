import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';


dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());

// Log environment variables for debugging
console.log('MongoDB URI:', process.env.MONGODB_URI);
console.log('Frontend URL:', process.env.FRONTEND_URL);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Add routes here

io.on('connection', (socket) => {
  console.log('A user connected');
  
  // Add WebRTC signaling logic here

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

io.on('connection', (socket) => {
  console.log('A user connected');
  
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).emit('user-connected', userId);
  
    socket.on('disconnect', () => {
      socket.to(roomId).emit('user-disconnected', userId);
    });
  });
  
  socket.on('offer', (offer, roomId) => {
    socket.to(roomId).emit('offer', offer);
  });
  
  socket.on('answer', (answer, roomId) => {
    socket.to(roomId).emit('answer', answer);
  });
  
  socket.on('ice-candidate', (candidate, roomId) => {
    socket.to(roomId).emit('ice-candidate', candidate);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

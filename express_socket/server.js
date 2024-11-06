// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*', // Enable CORS for testing
    }
});

io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    // Listen for mouse position updates from clients
    socket.on('mousePosition', (data) => {
        // Broadcast the mouse position to all other clients
        socket.broadcast.emit('mousePosition', { id: socket.id, ...data });
    });

    // Handle client disconnect
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
        io.emit('userDisconnected', { id: socket.id });
    });
});

server.listen(3001, () => console.log('Server running on port 3001'));

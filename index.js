// filepath: anniversary-video-voting-game/frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Connect to the backend WebSocket server

socket.on('connect', () => {
    console.log('Connected to the WebSocket server');
});

socket.on('updateVotes', (data) => {
    // Handle real-time vote updates
    console.log('Vote update received:', data);
    // Update your application state here based on the received data
});

socket.on('disconnect', () => {
    console.log('Disconnected from the WebSocket server');
});

ReactDOM.render(
    <React.StrictMode>
        <App socket={socket} />
    </React.StrictMode>,
    document.getElementById('root')
);
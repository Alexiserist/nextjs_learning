import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:3001';

const useSocket = () => {
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SOCKET_SERVER_URL);

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMousePosition = (data) => {
    socketRef.current.emit('mousePosition', data);
  };

  const onMousePosition = (callback) => {
    socketRef.current.on('mousePosition', callback);
  };

  const onUserDisconnected = (callback) => {
    socketRef.current.on('userDisconnected', callback);
  };

  return { sendMousePosition, onMousePosition, onUserDisconnected };
};

export default useSocket;

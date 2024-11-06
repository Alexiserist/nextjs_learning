'use client';
import { useEffect, useState } from 'react';
import useSocket from '../../hooks/useSocket';
import Cursor from '@/app/components/layout/cursor';

// Define a type for the cursor positions
interface CursorPosition {
  x: number;
  y: number;
}

// Userpage component
const Userpage = () => {
  const { sendMousePosition, onMousePosition, onUserDisconnected } = useSocket();

  const [cursors, setCursors] = useState<{ [key: string]: CursorPosition }>({});

  useEffect(() => {
    const mousePositionHandler = (data: { id: string; x: number; y: number }) => {
      setCursors((prevCursors) => ({
        ...prevCursors,
        [data.id]: { x: data.x, y: data.y },
      }));
    };

    const userDisconnectedHandler = (data: { id: string }) => {
      setCursors((prevCursors) => {
        const updatedCursors = { ...prevCursors };
        delete updatedCursors[data.id]; // Remove the disconnected user's cursor
        return updatedCursors;
      });
    };

    onMousePosition(mousePositionHandler);
    onUserDisconnected(userDisconnectedHandler);

    // Cleanup listeners on component unmount
    return () => {
      // Here you might need to cleanup listeners if your hook supports it
    };
  }, [onMousePosition, onUserDisconnected]);

  // Handle mouse movement and send position to server
  const handleMouseMove = (event: React.MouseEvent) => {
    sendMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: '100vh'}}>
        <div className='absolute p-0 m-0 top-0 left-0'>
      {Object.keys(cursors).map((id) => (
        <Cursor key={id} id={id} x={cursors[id].x} y={cursors[id].y} />
      ))}
        </div>
      <div className="text-black text-4xl">routing to child page</div>
    </div>
  );
};

export default Userpage;

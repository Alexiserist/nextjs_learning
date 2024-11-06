// components/Cursor.js
import React from 'react';

const Cursor = ({id, x, y }:any) => (
  <div style={{
    position: 'absolute',
    top: y,
    left: x,
    fontSize: '20px',
    pointerEvents: 'none',
  }}>
    👆 <span>{id}</span>
  </div>
);

export default Cursor;

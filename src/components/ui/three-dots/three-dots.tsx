import React from 'react';
import './three-dots.scss'; 

const ThreeDots: React.FC = () => {
  return (
    <div className="loading">
      <span className="loading__dot"></span>
      <span className="loading__dot"></span>
      <span className="loading__dot"></span>
    </div>
  );
};

export default ThreeDots;

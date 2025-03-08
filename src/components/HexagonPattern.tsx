
import React from 'react';

const HexagonPattern: React.FC = () => {
  return (
    <div className="absolute right-0 bottom-0 pointer-events-none z-0 opacity-50">
      <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M370 150 L320 75 L220 75 L170 150 L220 225 L320 225 Z" stroke="white" strokeWidth="2" fill="transparent"/>
        <path d="M330 180 L300 130 L240 130 L210 180 L240 230 L300 230 Z" stroke="white" strokeWidth="2" fill="transparent"/>
        <path d="M390 100 L370 65 L330 65 L310 100 L330 135 L370 135 Z" stroke="white" strokeWidth="2" fill="transparent"/>
        <path d="M290 70 L275 45 L245 45 L230 70 L245 95 L275 95 Z" stroke="white" strokeWidth="2" fill="transparent"/>
        <path d="M400 200 L385 175 L355 175 L340 200 L355 225 L385 225 Z" stroke="white" strokeWidth="2" fill="transparent"/>
      </svg>
    </div>
  );
};

export default HexagonPattern;

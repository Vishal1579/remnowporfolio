import React from 'react';
import './Preloader.css'; // optional

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Preloader;
// src/components/Preloader.js
{/*import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="spinner"></div>
    </div>
  );
};

export default Preloader;*/}

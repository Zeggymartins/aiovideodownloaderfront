// components/Loader.jsx - Enhanced Loader
import React from 'react';
import { Spinner } from 'react-bootstrap';
import './components.module.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <Spinner animation="border" role="status" className="custom-spinner">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="loader-text">
        <i className="bi bi-cloud-download me-2"></i>
        Processing your video...
      </p>
      <div className="loader-progress">
        <div className="progress-bar-animated"></div>
      </div>
    </div>
  );
};

export default Loader;
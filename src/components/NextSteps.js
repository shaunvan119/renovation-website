import React from 'react';
import './NextSteps.css';
import NextSix from "../assets/next6.png";
import JumpingButton from './JumpingButton';





const NextSteps = () => {
  return (
    <div className="next-steps-container">
      
      <div className="next-steps">
        <h2 className="step-heading">Next Steps</h2>
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-text">Free phone consultation</div>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-text">In-home measure and quote</div>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-text">Start renovation</div>
        </div>
        <div className="next-button">
        <JumpingButton/>
        </div>

      </div>
      <div className="image-steps-container">
      <div className="image-overlay-next">
        <h3 className="overlay-text">BOOK NOW</h3>
      </div>
        <img className="step-image" src={NextSix} alt=""/>
      </div>
    </div>
  );
};

export default NextSteps;

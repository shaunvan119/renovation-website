import React, { useEffect } from 'react';
import './NextSteps.css';
import NextSix from "../assets/next6.png";
import Count from "./Count"
import CountYears from './CountYears';





const NextSteps = () => {

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
};

useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 0.3,
    });
    const container = document.querySelector('.next-steps-container');
    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, []);

  return (
    <div className="next-steps-container">
      <div className="image-steps-container">
      <div className="image-overlay-next">
        <h3 className="overlay-text">HAPPY<br/> CLIENTS<Count/></h3>
        
      </div>
      <div className="image-overlay-next-two">
        <h3 className="overlay-text">YEARS<br/> EXPERIENCE<CountYears/></h3>
        
      </div>
        <img className="step-image" src={NextSix} alt=""/>
      </div>
    </div>
  );
};

export default NextSteps;

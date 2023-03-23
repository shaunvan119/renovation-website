import React, { useEffect } from 'react';

import "./TrippleIcons.css"
import { BsArrowUpCircle } from 'react-icons/bs';
import { BsWrenchAdjustableCircle } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';




const TrippleIcons = () => {

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
    const container = document.querySelector('.tripple-icons-container');
    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, []);


  return (
    <div className="tripple-icons-container">
        <div className="icons-wrapper">
            <div className="icons-boxes">
            <BsArrowUpCircle color="rgb(192, 165, 8)" size={140}/>
            <h3 className="icons-heading">Increase Home <span className="icons-color-change">Value.</span></h3>
            <p className="icons-p">Increase your home’s value well into the future</p>
            </div>
            <div className="icons-boxes">
            <BsWrenchAdjustableCircle color="rgb(192, 165, 8)" size={140}/>
            <h3 className="icons-heading">Renovations built to <span className="icons-color-change">last</span></h3>
            <p className="icons-p">We build to the highest standard</p>
            </div>
            <div className="icons-boxes">
           <BsCheckCircle color="rgb(192, 165, 8)" size={140}/>
            <h3 className="icons-heading">Quality <span className="icons-color-change">Guarantee</span></h3>
            <p className="icons-p">Piece of mind quality guarantee</p>
        </div>   
    </div>
    </div>
  )
}

export default TrippleIcons
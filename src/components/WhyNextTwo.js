import React, { useEffect, useRef, useState } from 'react';
import "./WhyNext.css"
import "./WhyNextTwo.css"
import NextTwo from "../assets/next3.png"
import { RiStarSFill } from 'react-icons/ri';


const WhyNextTwo = () => {

  const ChoseUs = useRef(null);
const [isInView, setIsInView] = useState(false);

useEffect(() => {
  const options = {
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(ChoseUs.current);

  return () => {
    observer.disconnect();
  };
}, []);
  return (
 
    <div className={`why-next-wrapper why-next-wrapper-two ${isInView ? 'circleTwo-wrapper--in-view' : ''}`} ref={ChoseUs}>
    <div className="why-next-image">
     <img className="NextOne-image" src={NextTwo} alt="Kicthen"/>
     </div>
    <div className="wrapper-next-content">
      <h2 className="next-heading next-heading-two">QUALITY GUARANTEE:</h2>
      <ul className="why-next-list">
        
        <li className="why-next-item">
        <RiStarSFill color="#E6C16A" />
          <span className="why-next-item-title">Quality craftsmanship:</span> We stand behind our work and guarantee that our team of skilled professionals will deliver the highest quality renovation workmanship, every time.
        </li>
        <li className="why-next-item">
        <RiStarSFill color="#E6C16A" />
          <span className="why-next-item-title">Top-tier materials:</span> We only use top-quality materials and products in our renovations, ensuring that our projects stand the test of time and meet the highest industry standards.
        </li>
        <li className="why-next-item">
        <RiStarSFill color="#E6C16A" />
          <span className="why-next-item-title">Satisfaction guarantee:</span> We are committed to ensuring that our clients are completely satisfied with our work. We stand behind the quality of our renovation services and offer a customer satisfaction guarantee, ensuring that we will do everything we can to make sure that you are happy with the end result.
        </li>
      </ul>
     </div> 
     
     
    </div>
  );
};

export default WhyNextTwo;

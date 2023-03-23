import React from 'react'
import "./WhyNext.css"
import "./WhyNextTwo.css"
import NextTwo from "../assets/next3.png"
import { RiStarSFill } from 'react-icons/ri';


const WhyNextTwo = () => {
  return (
    <div className="why-next-wrapper why-next-wrapper-two">
    <div className="why-next-image">
     <img className="NextOne-image" src={NextTwo} alt="Kicthen"/>
     </div>
    <div className="wrapper-next-content">
      <h2 className="next-heading">WHY CHOOSE US:</h2>
      <ul className="why-next-list">
        
        <li className="why-next-item">
        <RiStarSFill color="#E6C16A" />
          <span className="why-next-item-title">Attention to Detail:</span> We take pride in our attention to detail and ensure that every aspect of your renovation project is carefully planned and executed. From the initial consultation to the final touches.
        </li>
        <li className="why-next-item">
        <RiStarSFill color="#E6C16A" />
          <span className="why-next-item-title">Transparent Pricing:</span> We provide transparent pricing for all of our renovation services, ensuring that you know exactly what to expect before the project begins. We believe that honesty and transparency are essential to building trust with our clients and ensuring their satisfaction with our work.
        </li>
        <li className="why-next-item">
        <RiStarSFill color="#E6C16A" />
          <span className="why-next-item-title">Customer Satisfaction Guarantee:</span> We are committed to ensuring that our clients are completely satisfied with our work. We stand behind the quality of our renovation services and offer a customer satisfaction guarantee, ensuring that we will do everything we can to make sure that you are happy with the end result.
        </li>
      </ul>
     </div> 
     
     
    </div>
  );
};

export default WhyNextTwo;

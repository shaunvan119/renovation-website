import React, { useState, useEffect } from 'react';

import './ImageSlides.css';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';
import Image4 from '../assets/image4.png';
import Image5 from '../assets/image5.png';
import Image6 from '../assets/image6.png';
import Image7 from '../assets/image7.png';
import Image8 from '../assets/image8.png';
import Image9 from '../assets/image9.png';
import Image10 from '../assets/image10.png';
import Image11 from '../assets/image11.png';
import Image12 from '../assets/image12.png';
import { AiOutlineMinus } from 'react-icons/ai';
import JumpingButton from './JumpingButton'; 
import { BsUnlockFill } from 'react-icons/bs';



const images = [Image1, Image2, Image3, Image4, Image5,Image6, Image7,Image8,Image9,Image10,Image11,Image12];

const ImageSlides = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [activeIndex]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  

  return (
    <div className={`slides-container ${isLoaded ? 'loaded' : ''}`}>
    

      <div className="image-slides">
        <div className="image-slides-wrapper" style={{ width: `${100 * images.length}%`, transform: `translateX(-${activeIndex * (100 / images.length)}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="slide" style={{ display: 'inline-block', width: `${100 / images.length}%` }}>
              <img src={image} alt={`Slide ${index + 1}`} className="image-slide" onLoad={handleImageLoad} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="heading-container">
      <div className="image-overlay-top"></div>
  <div className="heading-content">
  <div className="heading-overlay">
    <h1 className="heading">Melbourne home <br />renovation <span className="color__change"><br/>experts.</span><br/><AiOutlineMinus /></h1>
    <div className="jump-container">
      <JumpingButton/>
    </div>
  </div>  
    
  </div>
  <div className="circles-container">
    <div className="circle">
      <div className="circle-textmid">UNLOCK YOUR<br/> HOMES VALUE<br/><BsUnlockFill size={30}/></div>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default ImageSlides;





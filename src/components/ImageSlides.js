import React, { useState, useEffect } from 'react';

import './ImageSlides.css';
import Image1 from '../assets/image1.jpeg';
import Image2 from '../assets/image2.jpeg';
import Image3 from '../assets/image3.jpeg';
import Image4 from '../assets/image4.jpeg';



import { AiOutlineMinus } from 'react-icons/ai';
import { BsUnlockFill } from 'react-icons/bs';



const images = [Image1, Image2, Image3, Image4 ];

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





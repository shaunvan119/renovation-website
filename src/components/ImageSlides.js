import React, { useState, useEffect } from 'react';
import './ImageSlides.css';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';
import { AiOutlineMinus } from 'react-icons/ai';
import JumpingButton from './JumpingButton';

const images = [Image1, Image2, Image3];

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
        <h1 className="heading">Melbourne home <br />renovation <span className="color__change"><br/>experts.</span><br/><AiOutlineMinus /></h1>
        <div className="jump-conatiner">
        <JumpingButton/>
        </div>
        <div className="button__container">
        
        </div>
      </div>
    </div>
  );
};

export default ImageSlides;





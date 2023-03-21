import React, { useRef, useEffect, useCallback } from 'react';
import './ImageGrid.css';
import { AiOutlineMinus } from 'react-icons/ai';

const ImageGrid = () => {
  const images = require.context('../assets', true);

  const imageList = [
    {
      src: images('./grid1.png'),
      alt: 'Image 1', 
      title: 'Modern Kitchens'
    },
    {
      src: images('./grid2.png'),
      alt: 'Image 1', 
      title: 'Highend Bathrooms'
    },
    {
      src: images('./grid3.png'),
      alt: 'Image 1', 
      title: 'Modern Bathrooms'
    },
    {
      src: images('./grid4.png'),
      alt: 'Image 1',
      title: 'High spec design'
    },
    {
      src: images('./grid5.png'),
      alt: 'Image 1', 
      title: 'Buit to last'
    },
    {
      src: images('./grid6.png'),
      alt: 'Image 1', 
      title: 'Transform living space'
    },
    {
      src: images('./grid7.png'),
      alt: 'Image 1', 
      title: 'Simple stylish kitchens'
    },
    {
      src: images('./grid8.png'),
      alt: 'Image 1',
      title: 'Bathroom renovations'

    },
    {
      src: images('./grid9.png'),
      alt: 'Image 1',
      title: 'Sleek cabinetry' 
    },
    {
      src: images('./grid10.png'),
      alt: 'Image 1', 
      title: 'Quality fittings' 
    },
    {
      src: images('./grid11.png'),
      alt: 'Image 1', 
      title: 'Full home renovation'
    },
    {
      src: images('./grid12.png'),
      alt: 'Image 1', 
      title: 'Bring your kitchen to 2023'
    },
   
   
    
  ];

 const imageGridRef = useRef(null);

  const handleScroll = useCallback(() => {
    const imageGrid = imageGridRef.current;
    const imageGridTop = imageGrid.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (imageGridTop < windowHeight) {
      imageGrid.classList.add('fade-in');
      window.removeEventListener('scroll', handleScroll);
    }
  }, [imageGridRef]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      <h2 className="brand__h2">
        Designing and renovating homes<br />  to the highest{' '}
        <span className="underline__traffic">standard.</span><br/><AiOutlineMinus />
      </h2>
      <h3 className="heading__concepts">Some of our projects</h3>
      <div className="image-grid" ref={imageGridRef}>
        {imageList.map((image, index) => (
        
          <div className="image-container hover-container" key={index}>
            <img src={image.src} alt={image.alt} />
            <div className="overlay">
              <h2 className="grid-overlay">{image.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
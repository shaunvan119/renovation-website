import React, { useRef, useEffect, useCallback } from 'react';
import './ImageGrid.css';

const ImageGrid = () => {
  const images = require.context('../assets', true);

  const imageList = [
    {
      src: images('./image1.png'),
      alt: 'Image 1', 
    },
    {
      src: images('./image2.png'),
      alt: 'Image 2',
    },
    {
      src: images('./image3.png'),
      alt: 'Image 3',
    },
    {
      src: images('./image1.png'),
      alt: 'Image 1',
    },
    {
      src: images('./image2.png'),
      alt: 'Image 2',
    },
    {
      src: images('./image3.png'),
      alt: 'Image 3',
    },
    {
      src: images('./image1.png'),
      alt: 'Image 1',
    },
    {
      src: images('./image2.png'),
      alt: 'Image 2',
    },
    {
      src: images('./image3.png'),
      alt: 'Image 3',
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
        <span className="underline__traffic">standard.</span>
      </h2>
      <h3 className="heading__concepts">Some of our projects</h3>
      <div className="image-grid" ref={imageGridRef}>
        {imageList.map((image, index) => (
          <div className="image-container hover-container" key={index}>
            <img src={image.src} alt={image.alt} />
            <h2 className="grid-overlay">{image.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
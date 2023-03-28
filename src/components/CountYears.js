import React, { useState, useEffect, useRef } from 'react';
import "./Count.css"

const CountYears = () => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const countRef = useRef(null);

  const handleScroll = () => {
    const rect = countRef.current.getBoundingClientRect();
    const isVisible = (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
    if (isVisible && !isCounting) {
      setIsCounting(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    if (isCounting) {
      let start = 0;
      const end = 29;
      const duration = 3000;
      const range = end - start;
      const increment = range / (duration / 10);
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.ceil(start));
        if (start >= end) {
          clearInterval(timer);
        }
      }, 10);
      return () => {
        clearInterval(timer);
      };
    }
  }, [isCounting]);

  return (
    <div ref={countRef}>
      <h2 className="count__heading">+ {count}</h2>
    </div>
  );
};

export default CountYears;

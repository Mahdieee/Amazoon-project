import React, { useState, useEffect } from 'react';
import left from './assets/left.svg'
import right from './assets/right.svg'

const images = [
  require('../components/assets/image1.png'),
  require('../components/assets/image2.png'),
  require('../components/assets/image3.png'),
  require('../components/assets/image4.png'),
];

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${images[currentImageIndex]}` }}
    >

      <button className="left-button" onClick={handlePrevClick}><img src={left} alt="left" /></button>
      <button className="right-button" onClick={handleNextClick}><img src={right} alt="left" /></button>
    </div>
  );
};

export default App;

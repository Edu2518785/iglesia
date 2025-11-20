import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

import ban1 from '../assets/images/ban1.jpeg';
import ban2 from '../assets/images/ban2.jpeg';
import ban3 from '../assets/images/ban3.jpeg';
import ban4 from '../assets/images/ban4.jpeg';
import ban5 from '../assets/images/ban5.jpeg';
import ban6 from '../assets/images/ban6.jpeg';
import ban7 from '../assets/images/ban7.jpeg';
import ban8 from '../assets/images/ban8.jpeg';
import ban9 from '../assets/images/ban9.jpeg';
import ban10 from '../assets/images/ban10.jpeg';
import ban11 from '../assets/images/ban11.jpeg';
import ban12 from '../assets/images/ban12.jpeg';
import ban13 from '../assets/images/ban13.jpeg';
import ban14 from '../assets/images/ban14.jpeg';
import ban15 from '../assets/images/ban15.jpeg';

const images = [
  ban1, ban2, ban3, ban4, ban5, ban6, ban7, ban8, ban9, 
  ban10, ban11, ban12, ban13, ban14, ban15
];

function Carousel() {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const moved = useRef(false);

  // AUTO ROTACIÓN
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // CLICK CORRECTO (solo si no hubo drag)
  const handleClick = (e) => {
    if (moved.current) return; // Evita click si arrastraste

    const width = e.currentTarget.offsetWidth;
    const clickX = e.clientX;

    if (clickX < width / 2) prevImage();
    else nextImage();
  };

  // DRAG MOUSE
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    moved.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    moved.current = true;
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;

    const diff = e.clientX - startX.current;

    if (diff > 60) prevImage();
    if (diff < -60) nextImage();

    setIsDragging(false);
  };

  // TOUCH MÓVIL
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    moved.current = false;
  };

  const handleTouchMove = (e) => {
    moved.current = true;
  };

  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - startX.current;

    if (diff > 60) prevImage();
    if (diff < -60) nextImage();
  };

  return (
    <div
      className="carousel"
      style={{ backgroundImage: `url(${images[index]})` }}

      onClick={handleClick}

      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}

      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img src={images[index]} alt="banner" className="carousel-image" />

      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

"use client";
import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
  maxW?: string;
  mx?: string;
  mt?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, maxW, mx, mt }) => {
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = (): void => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (): void => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
    return () => clearInterval(timer); // Clear interval on component unmount
  }, [images]);

  return (
    <div className="image-slider" style={{maxWidth: maxW, marginLeft: mx, marginRight: mx, marginTop: mt} as React.CSSProperties}>
      <div className="slider-container">
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`}  />
        <div className="image-overlay">
          <h3>Hustle for Gang Gold. Stack Up. Dominate the Market.</h3>
        </div>
      </div>
      <button className="prev-button" onClick={prevSlide}>
        prev
      </button>
      <button className="next-button" onClick={nextSlide}>
        next
      </button>
      <style jsx>{`
        .image-slider { position: relative; width: 100%; overflow: hidden; }
        .slider-container { display: flex; transition: transform 0.5s ease-in-out; width: 100%; }
        .slider-container img { width: 100%; height: 80vh; object-fit: fill; }
        /* NEW OVERLAY STYLES */
        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 40%;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 20%, transparent);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
        }
        .image-overlay h2 { margin: 0; font-size: 2.5rem; padding-bottom: 0.5rem; }
        .prev-button, .next-button { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0, 0, 0, 0.5); color: white; border: none; padding: 12px 16px; cursor: pointer; border-radius: 4px; }
        .prev-button { left: 20px; font-size: 1.2rem; }
        .next-button { right: 20px; font-size: 1.2rem; }
      `}</style>
    </div>
  );
};

export default ImageSlider;
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
    const timer = setInterval(nextSlide, 5000); // অটো স্লাইড প্রতি 5 সেকেন্ড পর পর
    return () => clearInterval(timer); // Clear interval on component unmount
  }, [images]);

  return (
    <div className="image-slider" style={ {maxWidth: maxW, marginLeft: mx, marginRight: mx, marginTop: mt} as React.CSSProperties }>
      <div className="slider-container">
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`}  />
      </div>
      <button className="prev-button" onClick={prevSlide}>
        {"<"}
      </button>
      <button className="next-button" onClick={nextSlide}>
        {">"}
      </button>
      <style jsx>{` .image-slider { position: relative; width: 100%; overflow: hidden; } .slider-container { display: flex; transition: transform 0.5s ease-in-out; width: 100%; } .slider-container img { width: 100%; height: 60vh; object-fit: fill; } .prev-button, .next-button { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0, 0, 0, 0.5); color: white; border: none; padding: 10px; cursor: pointer; } .prev-button { left: 10px; } .next-button { right: 10px; } `}</style>
    </div>
  );
};

export default ImageSlider;
import React, { useState, useEffect } from "react";

import "../index.css";

export const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 2000); // Change the interval time as desired (in milliseconds)

    return () => {
      clearInterval(timer);
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((currentSlide + slides.length - 1) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className="slideshow">
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <div className="comma">
              <img src="../images/“.png" />
            </div>
            <p>{slide.text}</p>
            <div className="testimonialContainer">
              <img src={slide.image}  alt={`Slide ${index}`} />
              <div className="testimonialDetails">
                <span className="testimonialName">{slide.name}</span>
                <span className="testimonialTitle">{slide.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dotContainer">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

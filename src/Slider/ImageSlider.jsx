import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides, onClose }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      {/* Click outside to close slider */}
      <div className='slider-screen-wrapper' onClick={onClose}></div>
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {slides.map((slide, index) => (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && <img src={slide.image} alt='travel image' className='image' />}
          </div>
        ))}
      </section>
    </>
  );
};

export default ImageSlider;

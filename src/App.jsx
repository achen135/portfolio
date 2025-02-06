import React, { useState, useEffect } from 'react';
import ImageSlider from './Slider/ImageSlider';
import { SliderData1, SliderData2, SliderData3 } from './Slider/SliderData';
import './App.css';


function App() {
    const [imageIndex, setImageIndex] = useState(0);
    const [tossed, setTossed] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [showNewCards, setShowNewCards] = useState(false);
    const [showImageSlider, setShowImageSlider] = useState(false);
    const [sliderNum, setSliderNum] = useState([]) 

    const images = ["./cartoon_closed.png", "./cartoon_opened.png"];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const handleCardClick = () => {
        setHovered(false);
        setTimeout(() => {
            setTossed(true);
        }, 300);

        setTimeout(() => {
            setShowNewCards(true);
        }, 1000);
    };

    const handleNewPhotoClick = (num) => {
      setShowImageSlider(true);
      if(num == 1){
        setSliderNum(SliderData1)
      } else if (num == 2) {
        setSliderNum(SliderData2)
      } else if (num == 3) {
        setSliderNum(SliderData3)
      }
    };
  
    return (
        <>
            <div className='dog-doodle'>
              <img className='doodle' src="./dog_doodle.png"/>
            </div>
            <div className='name-doodle'>
              <img className='doodle' src="./name_doodle1.png" alt="" />
            </div>
            <div className='sun-doodle'>
              <img className='doodle' src="./sun_doodle.png" alt="" />
            </div>
            <div className='smile-doodle'>
              <img className='doodle' src="./smile_doodle.png" alt="" />
            </div>
            <div className='swirl-doodle'>
              <img className='doodle' src="./swirl_doodle.png" alt="" />
            </div>
            <div className='weight-doodle'>
              <img className='doodle' src="./weight_doodle.png" alt="" />
            </div>
            <div className='brain-doodle'>
              <img className='doodle' src="./brain_doodle.png" alt="" />
            </div>
            <div className='name-doodle2'>
              <img className='doodle' src="./name_doodle2.png" alt="" />
            </div>
            <div className='rice-doodle'>
              <img className='doodle' src="./rice_doodle.png" alt="" />
            </div>
            <div className='line-doodle'>
              <img className='doodle' src="./line_doodle1.png" alt="" />
            </div>
            <div className='line-doodle2'>
              <img className='doodle' src="./line_doodle2.png" alt="" />
            </div>
            <div className='exclamation-doodle'>
              <img className='doodle' src="./exclamation_doodle.png" alt="" />
            </div>
            <div className='line-doodle3'>
              <img className='doodle' src="./line_doodle3.png" alt="" />
            </div>
            <div className='bar'>
                <h2>alexchen6607@gmail.com</h2>
            </div>
            
            <div className={`cartoon-image-container ${tossed ? 'tossed' : ''}`}>
                <h3>Click the Picture!</h3>
                <img src={images[imageIndex]} alt="pic" />
            </div>

            <div className='screen-wrapper'>
              <div
                  className={`photo-container ${tossed ? 'tossed' : ''} ${hovered ? 'hovered' : ''}`}
                  onClick={handleCardClick}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
              >
                  <div className='photo' id='p1'>
                      <img src="./babyme2.png" alt="" />
                      <p>First day of school</p>
                  </div>
                  <div className='photo' id='p2'>
                      <img src="./fbla.jpg" alt="" />
                      <p>Winning SLC</p>
                  </div>
                  <div className='photo' id='p3'>
                      <img src="./babyme.jpg" alt="" />
                      <p>Alex Chen</p>
                  </div>
              </div>
              {showNewCards && (
                  <div className="new-cards-wrapper">
                      <div className='photo' onClick={() => handleNewPhotoClick(1)} >
                          <img src="./f4e_cover.png"/>
                          <p>Food For Everyone</p>
                      </div>
                      <div className='photo' onClick={() => handleNewPhotoClick(2)}>
                          <img src="./ehtbp_cover.png" />
                          <p>EHTHS Business Partners</p>
                      </div>
                      <div className='photo'>
                          <img src="./tas_cover.png" onClick={() => handleNewPhotoClick(3)} />
                          <p>Teens Against Smoking</p>
                      </div>
                  </div>
              )}
           </div>

           {showImageSlider && (
        <ImageSlider slides={sliderNum} onClose={() => setShowImageSlider(false)} />
      )}
        </>
    );
}

export default App;

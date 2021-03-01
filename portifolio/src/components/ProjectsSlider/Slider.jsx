import React, { useEffect, useState } from "react";
import sliderImage from "../../ObjProjects";
import Arrows from "./Arrows";
import Dots from "./Dots";
import SlideContent from "./SliderContent";
import "./slider.css";

const len = sliderImage.length - 1;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(()=>{
      const interval = setInterval(()=>{
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      }, 5000);

      return () => clearInterval(interval);
  },[activeIndex])

  return (
    <div className="slider-container">
      <SlideContent activeIndex={activeIndex} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;

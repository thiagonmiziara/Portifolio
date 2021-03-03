import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sliderImage from "../../ObjProjects";
import Arrows from "./Arrows";
import gitLogo from "../../assets/github.svg";

import SlideContent from "./SliderContent";
import "./slider.css";

const len = sliderImage.length - 1;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <h1 className="title">Projetos</h1>
    
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
      </div>
      <div className="link-git">
      <p >
        Mais Projetos em
        <a href="https://github.com/thiagonmiziara" target='_blank'>
          <img src={gitLogo} alt="Github" />
        </a>
        
      </p>
      </div>
    </>
  );
};

export default Slider;

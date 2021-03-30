import React, { useEffect, useState } from "react";
import sliderImage from "../../ObjProjects";
import Arrows from "./Arrows";
import gitLogo from "../../assets/github.svg";
import SlideContent from "./SliderContent";
import {motion} from "framer-motion";
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
      <motion.div
          transition={{ delay: 0.2, duration: 0.7 }}
          variants={{
            show: { opacity: 1, y: "0" },
            hidden: { opacity: 0, y: "100%" },
          }}
          initial="hidden"
          animate="show"
        >
      

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
        <h3>
          Mais Projetos em
          <a href="https://github.com/thiagonmiziara">
            <img src={gitLogo} alt="Github" />
          </a>
        </h3>
      </div>
      </motion.div>
    </>
  );
};

export default Slider;

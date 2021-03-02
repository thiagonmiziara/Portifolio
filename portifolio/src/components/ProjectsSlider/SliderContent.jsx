import React from "react";
import sliderImage from "../../ObjProjects";

const SliderContent = (props) => {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === props.activeIndex ? "slides active" : "inactive"}
        >
            <img  className="slide-image" src={slide.img} alt={slide.title}/>
            <h3 className="slide-title">{slide.title}</h3>
            <p className="slide-text">{slide.description}</p>
        </div>
      ))}
    </section>
  );
};

export default SliderContent;

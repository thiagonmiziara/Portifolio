import React from "react";

const Arrows = (props) => {
  return (
    <div className="arrows">
      <span className="prev" onClick={props.prevSlide}>
      ❮
      </span>

      <span className="next" onClick={props.nextSlide}>
      ❯      </span>
    </div>
  );
};

export default Arrows;

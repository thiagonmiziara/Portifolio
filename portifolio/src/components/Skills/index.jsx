import React from "react";
import "./style.css";

const Skills = () => {
  return (
  <section className="skills">
    <h1>Habilidades</h1>
    <div className="content">
      <div>
        <strong>Linguagens:</strong>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS3</li>
      </div>
      <div>
        <strong>Bibliotecas:</strong>
        <li>React.Js</li>
        <li>Material-ui</li>
        <li>Bootstrap</li>
      </div>
      <div>
        <strong>Ferramentas:</strong>
        <li>Eslint</li>
        <li>Chrome Dev</li>
        <li>Git & Github</li>
      </div>
    </div>
  </section>
  );
};

export default Skills;

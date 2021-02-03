import React from "react";
import styles from "./Sobre.module.css";
import Front from "../assets/front.png";

const Sobre = () => {
  return (
    <section>
      <h1 className={styles.title}>Sobre</h1>
      <div className={styles.container}>
        
          <img src={Front} alt="Front-end developer" />
        
        <div className={styles.description}>
          <p>
            Para você que não me conhece, vou descrever algumas das minhas
            principais características: a cecomunicação e ser uma pessoa de fácil
            relacionamento se destacam das demais. Amo tecnologia, pois vejo
            como esta facilita a vida cotidiana das pessoas, principalmente pelo
            fato de possibilitar que todos tenham acesso a informação,
            justamente por isso estou estudando e me empenhando em front-end
            (html, css, js, React, dentre outras tecnologias).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;

import React from "react";
import "./style.css";
import {motion} from "framer-motion";

const Sobre = () => {
  return (
    <section className="sobre">
      <h1>Sobre</h1>
      <motion.div
          transition={{ delay: 0.2, duration: 0.7 }}
          variants={{
            show: { opacity: 1, y1: "0" },
            hidden: { opacity: 0, y1: "70%" },
          }}
          initial="hidden"
          animate="show"
        >
      <p>
        Para você que não me conhece, vou descrever algumas das minhas
        principais características: a cecomunicação e ser uma pessoa de fácil
        relacionamento se destacam das demais. Amo tecnologia, pois vejo como
        esta facilita a vida cotidiana das pessoas, principalmente pelo fato de
        possibilitar que todos tenham acesso a informação, justamente por isso
        estou estudando e me empenhando em front-end (html, css, js, React,
        dentre outras tecnologias).
      </p>
      </motion.div>
    </section>
  );
};

export default Sobre;
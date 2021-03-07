import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import img from "../../assets/thiagobg.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <motion.div
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            show: { opacity: 1, x: "0" },
            hidden: { opacity: 0, x: "-70%" },
          }}
          initial="hidden"
          animate="show"
        >
          <h1>Oi,</h1>

          <p>
            Eu sou o<span id="name"> Thiago,</span>
          </p>
          <p>Front-end Developer</p>

          <Link to="/sobre">
            <button className="button">Mais Informações</button>
          </Link>
        </motion.div>
      </div>
      <div className="title">
        <motion.div
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y2: "0" },
            hidden: { opacity: 0, y2: "100%" },
          }}
          initial="hidden"
          animate="show"
        >
          <img src={img} alt="Thiago" className="imgThiago" />
          
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import img from "../../assets/thiagobg.png";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          Oi,
        </h1>
       
          <p> Eu sou o
          <span id="name"> Thiago</span>
          </p>
        <p>Front-end Developer</p>

        <Link to="/sobre">
          <button className="button">Mais Informações</button>
        </Link>
      </div>
      <div className="title">
        <img src={img} alt="Thiago" className="imgThiago" />
      </div>
    </div>
  );
};

export default Home;

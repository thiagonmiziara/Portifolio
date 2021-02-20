import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import img from "../../assets/thiago.png";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Oi,</p>
          <p>Eu sou o Thiago</p>
          <p>Front-end Developer</p>
        </h1>
        <Link to="/sobre">
          <button>Mais Informações</button>
        </Link>
      </div>
      <div className="person">
        <img src={img} alt="thiago" />
      </div>
    </div>
  );
};

export default Home;

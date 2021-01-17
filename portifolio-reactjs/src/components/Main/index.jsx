import React from "react";
import Foto from "../assets/thiago.png";
import styles from "./Main.module.css";

const Main = () => {
    
    return (
    <main className={styles.content}>
      <div className={styles.title}>
       <h1>
       Desenvolvedor Front-end
      </h1>
      <p>Thiago Nunes Miziara</p>
      </div>
      <div className={styles.foto}>

        <img src={Foto} alt="Foto Thiago" />
      </div>
     
    </main>
  );
};

export default Main;

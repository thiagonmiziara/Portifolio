import React from "react";
import Foto from "../assets/thiago.png";
import styles from "./Main.module.css";

const Main = () => {
 { /*const [texto, setTexto] = React.useState('')
  const frase = "ola mundo!"
  const array = frase.split('');
  array.forEach((item, index)=>{
    setTimeout(() => {
      setTexto(item) 
    }, index * 80);
  })*/}


    
    return (
    <main className={styles.content} id="contato">
      <div className={styles.title}>
       <h1>
       Front-end
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

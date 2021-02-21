import React from "react";
import styles from "./Footer.module.css";
import github from "../../assets/logotipo-do-github.svg";
import linkedin from "../../assets/linkedin.svg";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/thiagonmiziara" target={"_blank"}>
        <img className={styles.img} src={github} alt="github icon" />
      </a>

      <a
        href="https://www.linkedin.com/in/thiago-nunes-miziara-92a85b6a/"
        target={"_blank"}
      >
        <img src={linkedin} alt="linkedin" />
      </a>
      <p>By Thiago Miziara</p>
    </footer>
  );
};

export default Footer;

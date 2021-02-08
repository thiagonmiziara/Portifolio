import React from 'react'
import styles from "./Footer.module.css"
import github from "../assets/logotipo-do-github.svg";
import linkedin from "../assets/linkedin.svg"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.img} src={github} alt="github icon"/>
      <img src={linkedin} alt="linkedin"/>
      <p>By Thiago Miziara</p>
    </footer>
  )
}

export default Footer;

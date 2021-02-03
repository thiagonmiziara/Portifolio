import React from 'react'
import github from "../assets/logotipo-do-github.svg";
import linkedin from "../assets/linkedin.svg"
const Footer = () => {
  return (
    <footer>
      <img src={github} alt="github icon"/>
      <img src={linkedin} alt="linkedin"/>
      By Thiago Miziara
    </footer>
  )
}

export default Footer;

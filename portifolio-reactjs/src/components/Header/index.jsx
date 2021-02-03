import React from "react";
import styles from "./Header.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../assets/logo.png"

const Header = () => {

  function scrollToTop() {
    scroll.scrollToTop();
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
      <img src={logo} alt="logo" onClick={scrollToTop}/>
      <p>TNM</p>
      </div>
      <ul className={styles.list}>
        <li>
          <Link
            activeClass="active"
            to="sobre"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contato"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contato
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projetos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projetos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

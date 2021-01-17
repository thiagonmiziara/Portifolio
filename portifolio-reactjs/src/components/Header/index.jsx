import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.nav}>
      Thiago Nunes Miziara
      <ul className={styles.list}>
        <li>
          Sobre
        </li>
        <li>Contato</li>
        <li>Projetos</li>
      </ul>
    </nav>
  );
};

export default Header;

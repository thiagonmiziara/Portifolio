import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo.png";
import menuBars from "../../assets/menu-bars.png";
import closeMenu from "../../assets/close-menu-icon.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 800) {
      setOpen(true);
    }
  };

  const handleClose =()=>{
    if(screenWidth < 800){
      setOpen(false);
    }
  }

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="list-wrapper">
          <img
            src={menuBars}
            alt="Menu"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <img
            src={closeMenu}
            alt="Fechar Menu"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/"
                style={{ color: location.pathname === "/" && "#4071f4" }}
                onClick={handleClose}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                style={{ color: location.pathname === "/sobre" && "#4071f4" }}
                onClick={handleClose}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/habilidades"
                style={{
                  color: location.pathname === "/habilidades" && "#4071f4",
                }}
                onClick={handleClose}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                to="/projetos"
                style={{
                  color: location.pathname === "/projetos" && "#4071f4",
                }}
                onClick={handleClose}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                style={{
                  color: location.pathname === "/contato" && "#4071f4",
                }}
                onClick={handleClose}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

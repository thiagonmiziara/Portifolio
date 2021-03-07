import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo.png";
import menuBars from "../../assets/mobile-menu.png";
import closeMenu from "../../assets/xMenu.png";

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
                style={{ color: location.pathname === "/" && "  #ff9500" }}
                onClick={handleClose}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                style={{ color: location.pathname === "/sobre" && "#ff9500" }}
                onClick={handleClose}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/habilidades"
                style={{
                  color: location.pathname === "/habilidades" && "  #ff9500",
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
                  color: location.pathname === "/projetos" && "  #ff9500",
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
                  color: location.pathname === "/contato" && "  #ff9500",
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
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sobre from "./components/Sobre";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Sobre />
      <Projects />
    </div>
  );
}

export default App;

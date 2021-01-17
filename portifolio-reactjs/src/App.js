import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Sobre from "./components/Sobre";



function App() {

  return (
    <div>
      <Header/>
      <Main/>
      <Sobre/>
      <Projects/>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

import "./App.css";

import Sobre from "./components/Sobre";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Slider from "./components/ProjectsSlider/Slider"
import Contact from "./components/Contact";

function App() {
  return (
    
    <Router>
      
      <div className="app">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sobre" component={Sobre} />
          <Route exact path="/habilidades" component={Skills} />
          <Route exact path="/projetos" component={Slider} />
          <Route exact path="/contato" component={Contact} />
        </Switch>
      </div>
     
    </Router>
  );
}

export default App;
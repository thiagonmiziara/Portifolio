import "./style.css";
import Lottie from "lottie-react-web";
import animationData from "../../assets/animation.json";
import Html from "../../assets/html5.svg";
import Css from "../../assets/css3.svg";
import Js from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import Next from "../../assets/next-dot-js.svg";
import Git from "../../assets/git.svg";
import Github from "../../assets/github.svg";
import MaterialUi from "../../assets/material-ui.svg";
import Bootstrap from "../../assets/bootstrap.svg";

const Skills = () => {

const defaultOptions ={
  loop: true,
  autoplay: true,
  animationData: animationData,

}



  return (
    <>
      <h1 className="title">Habilidades</h1>
      <section className="skills">
        <div>
          <h2>
            <img src={Html} alt="Html" />
            <span>Html</span>
          </h2>
          <h2>
            <img src={Github} alt="Github" />
            <span>Github</span>
          </h2>
          <h2>
            <img src={Git} alt="Git" />
            <span>Git</span>
          </h2>
        </div>

        <div>
          <h2>
            <img src={Js} alt="JavaScript" />
            <span>JavaScript</span>
          </h2>
          <h2>
            <img src={react} alt="React" />
            <span>React</span>
          </h2>
          <h2>
            <img src={Next} alt="Nextjs" />
            <span>Next.Js</span>
          </h2>
        </div>

        <div>
          <h2>
            <img src={Css} alt="css" />
            <span>Css</span>
          </h2>
          <h2>
            <img src={MaterialUi} alt="MaterialUi" />
            <span>Material-Ui</span>
          </h2>
          <h2>
            <img src={Bootstrap} alt="Bootstrap" />
            <span>Bootstrap</span>
          </h2>
        </div>
        <div className="gif">
          <Lottie
          options={defaultOptions}
          width={300}
          height={300}
          
          />

          
        </div>
      </section>
    </>
  );
};

export default Skills;

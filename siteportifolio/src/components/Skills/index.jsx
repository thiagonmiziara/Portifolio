import "./style.css";
import Lottie from "react-lottie";
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
import { motion } from "framer-motion";
const Skills = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <>
      <h1 className="title">Habilidades</h1>
      <section className="skills">
        <div>
          <motion.div
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              show: { opacity: 1, Y: "0" },
              hidden: { opacity: 0, Y: "70%" },
            }}
            initial="hidden"
            animate="show"
          >
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
          </motion.div>
        </div>

        <div>
          <motion.div
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              show: { opacity: 1, refY: "0" },
              hidden: { opacity: 0, refY: "70%" },
            }}
            initial="hidden"
            animate="show"
          >
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
          </motion.div>
        </div>

        <div>
          <motion.div
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              show: { opacity: 1, refX: "0" },
              hidden: { opacity: 0, refx: "70%" },
            }}
            initial="hidden"
            animate="show"
          >
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
          </motion.div>
        </div>

        <div className="gif">
        <motion.div
            transition={{ delay: 0.8, duration: 0.5 }}
            variants={{
              show: { opacity: 1, refX: "0" },
              hidden: { opacity: 0, refx: "70%" },
            }}
            initial="hidden"
            animate="show"
          >
          <Lottie options={defaultOptions} width={300} height={300} />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;
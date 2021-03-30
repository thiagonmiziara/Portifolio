import gitLogo from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import { motion } from "framer-motion";

import "./style.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="title">Contato</h1>

      <div className="contact-btns">
        <motion.div
          transition={{ delay: 0.2, duration: 0.7 }}
          variants={{
            show: { opacity: 1, x: "0" },
            hidden: { opacity: 0, x: "100%" },
          }}
          initial="hidden"
          animate="show"
        >
          <a href="https://www.linkedin.com/in/thiago-nunes-miziara-92a85b6a/">
            <img src={linkedin} alt="linkedin" />
            <p>Linkedin</p>
          </a>
        </motion.div>
        <motion.div
          transition={{ delay: 0.2, duration: 0.7 }}
          variants={{
            show: { opacity: 1, x: "0" },
            hidden: { opacity: 0, x: "-100%" },
          }}
          initial="hidden"
          animate="show"
        >
          <a href="https://github.com/thiagonmiziara">
            <img src={gitLogo} alt="Github" />
            <p>Github</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

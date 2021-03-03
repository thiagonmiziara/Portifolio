import React from "react";
import "./style.css";
import gitLogo from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="title">Contato</h1>

      <div className="contact-btns">
        <a href="https://www.linkedin.com/in/thiago-nunes-miziara-92a85b6a/" target="_blank">
          <img src={linkedin} alt="linkedin"/>
          <p>
            Linkedin
          </p>
        </a>
        <a href="https://github.com/thiagonmiziara" target="_blank">
          <img src={gitLogo} alt="Github"/>
           <p>
            Github
           </p>
          
        </a>
      </div>
      
    </section>
  );
};

export default Contact;
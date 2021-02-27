import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import img from "../../assets/thiagobg.png";
import {
  Container,
  Content,
  Title,
  P,
  Button,
  Person,
  Img,
  Name,
} from "./styled";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Container>
      <Content>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.4 }}
          transition={{ duration: 0.5 }}
        >
          <Title>
            <P>Oi,</P>
            <P>Eu sou o </P> <Name>Thiago</Name>
            <P>Front-end Developer</P>
          </Title>
          <Link to="/sobre">
            <Button>Mais Informações</Button>
          </Link>
        </motion.div>
      </Content>

      <Person>
        <Img src={img} alt="Thiago" />
      </Person>
    </Container>
  );
};

export default Home;

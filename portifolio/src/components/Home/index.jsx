import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import img from "../../assets/thiago.png";
import { Container,Content,Title,P, Button, Person, Img } from "./styled";

const Home = () => {
  return (
    <Container>
      <Content>
        <Title>
          <P>Oi,</P>
          <P>Eu sou o Thiago</P>
          <P>Front-end Developer</P>
        </Title>
        <Link to="/sobre">
          <Button>Mais Informações</Button>
        </Link>
      </Content>
      <Person>
        <Img src={img} alt="thiago" />
      </Person>
    </Container>
  );
};

export default Home;

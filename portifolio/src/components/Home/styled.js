import styled from "styled-components";

export const Container = styled.section `
  flex-grow: 1;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Content = styled.div `
  width: 100%;
  font-size: 1rem;
  text-align: center;
`;

export const Title = styled.h1 `
  line-height: 50px;
`;

export const P = styled.p `
  line-height: 50px;
`;

export const Button = styled.button `
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 24px;
  margin-top: 30px;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 999px;
  background-color: #3f71f4;
  font-family: cursive;
`;

export const Person = styled.div `
  width: 100%;
  margin-top: 20px;
`;

export const Img = styled.img `
  border-radius: 999px;
  width: 100%;
`;
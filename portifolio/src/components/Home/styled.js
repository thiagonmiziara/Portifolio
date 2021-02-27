import styled from "styled-components";

export const Container = styled.section`
  flex-grow: 1;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  font-size: 1rem;
  `;

export const Title = styled.h1`
  line-height: 50px;
`;

export const P = styled.p`
  line-height: 1.2;
  font-weight: 700;
  font-size:2.2rem;
  color: #ffffff;
`;

export const Name = styled(P)`
color: #9e1329;
`;
  


export const Button = styled.button`
  border: 1px solid red;
  outline-color: red;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 30px;
  color: #ffffff;
  padding: 18px 25px;
  border-radius: 50px;
  background-color: #d50430;
  font-family: "Source Code Pro", monospace;
  font-weight: 300;
`;

export const Person = styled.div`
  width: 90%;
  margin-top: 20px;
  height: 80%;
  background-image: radial-gradient(
    circle,
    #d50430,
    #9e1329,
    #691620,
    #121214,
    #121214
  );
  border-radius: 50%50%;
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 75vh;
  padding: 0;
  margin: 0;
`;

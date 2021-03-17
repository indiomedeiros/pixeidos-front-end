import styled from "styled-components";

export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  @media (max-width: 840px) {
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 840px) {
    align-self: center;
  }
  @media (max-width: 500px) {
    max-width: 100vw;
  }
`;

export const Title = styled.h1`
  font-size: 4em;
  color: #4717f6;
  @media (max-width: 840px) {
    font-size: 2em;
  }
  @media (max-width: 500px) {
    font-size: 2.5em;
  }
`;

export const Button = styled.button`
  background-color: #4717f6;
  color: white;
  border: none;
  outline: none;
  width: 34vw;
  border-radius: 10px;
  font-size: 2em;
  height: 7vh;
  margin-top: 20px;

  @media (max-width: 840px) {
    margin-top: 10px;
    font-size: 1em;
    width: 40vw;
    height: 12vh;
  }
  @media (max-width: 500px) {
    width: 80vw;
    height: 8vh;
    font-size: 1.5em;
  }
`;
export const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
  padding-top: 0vh;

  @media (max-width: 840px) {
  }
  @media (max-width: 500px) {
    width: 80vw;
  }
`;
export const Image = styled.img`
  width: 100%;
  max-width: 45vw;
  align-self: center;
  @media (max-width: 840px) {
  }
  @media (max-width: 500px) {
    max-width: 80vw;
    margin-top: 2vh;
  }
`;
export const P = styled.p`
  align-self: flex-start;
  font-size: 0.9em;
  margin: 0px 0px;
  @media (max-width: 840px) {
    margin: 0vh 0px;
  }
`;

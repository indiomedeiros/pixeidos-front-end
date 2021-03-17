import styled from "styled-components";
import { ButtonsColor, TitleFormsColor } from "../../Assents/color/color";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  height: 93vh;
  align-items: center;
  @media (max-width: 840px) {
    height: 75vh;
  }
  @media (max-width: 500px) {
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 840px) {
  }
  @media (max-width: 500px) {
  }
`;

export const Button = styled(ButtonsColor)`
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
export const Title = styled(TitleFormsColor)`
  font-size: 4em;

  @media (max-width: 840px) {
    text-align: center;
    font-size: 2.5em;
  }
  @media (max-width: 500px) {
    text-align: center;
    font-size: 3em;
  }
`;

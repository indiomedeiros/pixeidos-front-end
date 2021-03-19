import styled from "styled-components";
import {
  HeaderBackgroundColor,
  TitleFormsColor,
  ButtonsColor,
} from "../../Assents/color/color";

export const HeaderContainer = styled(HeaderBackgroundColor)`
  display: flex;
  font-weight: bolder;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  height: 7vh;

  @media (max-width: 840px) {
    font-size: 0.8em;
    justify-content: space-between;
    padding: 0px 10px;
    height: 12vh;
  }

  @media (max-width: 500px) {
    font-size: 0.8em;
    justify-content: space-between;
    padding: 0px 10px;
    height: 7vh;
  }
`;
export const Title = styled(TitleFormsColor)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7em;
  cursor: pointer;
  font-family: Helvetica;

  @media (max-width: 840px) {
    font-size: 1.3em;
  }
`;

export const ButtonTitle = styled.h1`
  font-size: 1.3em;
  cursor: pointer;
  color: white;
  font-family: Helvetica;
  @media (max-width: 840px) {
    font-size: 1.2em;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 30px;
`;

export const ButtonLoginLogout = styled(ButtonsColor)`
  margin-left: 10px;
  font-weight: bolder;
  border-radius: 5px;
  width: 80px;
  height: 35px;
  border: none;
  :focus {
    outline: none;
  }
  
  @media (max-width: 840px) {
    width: 100%;
    height: 100%;
  }
`;
export const ButtonUser = styled.button`
  margin-left: 10px;
  background-color: transparent;
  color: white;
  font-size: 1.2em;
  text-decoration: none;
  border: none;
  :hover {
    border-bottom: 3px solid #4717f6;
  }

  :focus {
    border-bottom: 3px solid #4717f6;
    outline: none;
  }
  font-family: helvetica;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const ButtonSignup = styled(ButtonUser)``;
export const ButtonHome = styled(ButtonUser)``;
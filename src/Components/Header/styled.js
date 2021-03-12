import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  font-weight: bolder;
  justify-content: space-between;
  align-items: center;
  background-color: #0e0b16;
  padding: 0px 30px;
  height: 7vh;
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7em;
  cursor: pointer;
  color: #4717f6;
  font-family: Helvetica;
`;

export const ButtonTitle = styled.h1`
  font-size: 1.3em;
  cursor: pointer;
  color: white;
  font-family: Helvetica;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 30px;
`;
export const MarginOfButtons = styled.button`
  margin-left: 10px;
`;
export const ButtonLoginLogout = styled(MarginOfButtons)`
  font-weight: bolder;
  border-radius: 5px;
  background-color: #4717f6;
  color: white;
  width: 80px;
  height: 35px;
  border: none;
  :focus {
    outline: none;
  }
  :hover {
    background-color: #653ef6;
  }
`;
export const ButtonUser = styled(MarginOfButtons)`
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
`;

export const ButtonSignup = styled(ButtonUser)`
`;

export const ButtonUploud = styled(MarginOfButtons)``;

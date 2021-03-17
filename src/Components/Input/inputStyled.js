import styled from "styled-components";

export const Input = styled.input`
  max-width: 600px;
  width: 40vw;
  height: 6vh;
  border-radius: 10px;
  border: 1px solid #d1d1d1;
  font-size: 1.5em;
  margin: 10px 0px;
  ::placeholder{
    padding: 20px;
    color: #d1d1d1
  }
  @media (max-width: 840px){
    font-size: 1em;
    margin: 5px 0px;
    height: 8vh;
  }
  @media(max-width: 500px){
    width: 80vw;
    height: 7vh;
  }
  
`;



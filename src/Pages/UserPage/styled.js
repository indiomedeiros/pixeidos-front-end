import styled from "styled-components";

export const Form = styled.form`
  height: 33vh;
  max-width: 50vw;
  width: 100%;
  margin-left: 30px;
  position: absolute;
  
`;
export const Div = styled.div`
  display: flex;
  
  align-items: flex-start;
  
`;

export const Button = styled.button`
  margin-top: 20px;
  max-width: 600px;
  width: 100%;
  height: 5vh;
  border-radius: 10px;
  border: none;
  font-size: 1.5em;
  background-color: #4717f6;
  color: white;
  :focus {
    outline: none;
    border: 2px solid #154128;
  }
  :hover {
    background-color: #653ef6;
  }
`;
export const Title = styled.h1`
    padding: 20px 0px;
    font-size: 3em;
    color: white;
  
`
export const Img = styled.div`
  position: absolute;
  text-align: right;
  
` 
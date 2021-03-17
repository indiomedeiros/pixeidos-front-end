import styled from "styled-components";

export const HomeImageDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: black;
  
`;

export const ImageHomeImg = styled.img`
  display: flex;
  height: 93vh;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    height: 60vh;
    
  }
  @media (orientation: landscape) {
    height: 93vh;
  }
`

export const Form = styled.form`
  margin-left: 5vw;
  position: absolute;
  
`;
export const HomeCardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 840px){
    
  }
  @media(max-width: 500px){
    flex-direction: column;
    align-items: center;
  }

`;

export const Title = styled.h1`
  font-size: 3em;
  color: white;
  font-family: roboto;
  @media(max-width: 768px){
    font-size: 2.5em;

  }
`;

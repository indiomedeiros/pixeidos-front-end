import styled from "styled-components";

export const CardDivConteiner = styled.img`
  filter: grayscale(1);
  display: flex;
  width: 30vw;
  margin: 5px;
  :hover{
    filter: grayscale(0);
  }
  @media (max-width: 840px) {
    width: 32vw;
  }
  @media (max-width: 500px) {
    width: 95vw;
  }
 
`;

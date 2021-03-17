import styled from "styled-components";

export const SearchEntryInput = styled.input`
  width: 30vw;
  font-size: 2em;
  color: #4717f6;
  border: none;
  border-radius: 8px;
  height: 7vh;
  ::placeholder {
    padding: 10px;
    color: #d1d1d1;
  }
  :focus {
    outline: none;
  }

  @media (max-width: 840px){
        width: 80vw;
        height: 12vh;
  }

  @media (max-width: 500px) {
    width: 80vw;
    height: 7vh;
    ::placeholder {
      font-size: 0.8em;
    }
  
  }
  
  
`;

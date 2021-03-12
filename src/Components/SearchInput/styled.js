import styled from "styled-components";

export const SearchEntryInput = styled.input`

  width: 40vw;
  border: none;
  border-radius: 8px;
  height: 5vh;
  position: absolute;
  ::placeholder {
    text-align: center;
    font-size: 2em;
    color: #d1d1d1
  }
  :focus{
    outline: none;
  }
  
`;

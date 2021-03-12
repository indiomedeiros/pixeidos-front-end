import styled from "styled-components";

export const SearchEntryInput = styled.input`
  font-size: 1em;
  width: 40vw;
  border: none;
  border-radius: 8px;
  height: 5vh;
  position: absolute;
  ::placeholder {
    text-align: center;
    font-size: 2em;
  }
  :focus{
    outline: none;
  }
  font-family: open sans;
`;

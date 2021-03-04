import ImageHomePage from "../../Components/ImageHomePage/ImageHomePage";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { HomeImageDiv, HomeCardDiv } from "./styled";
import ImageCard from "../../Components/ImageCard/ImagemCard";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components";
import { useRequestGet } from "../../Hooks/useRequestGet";
import { searchImageEntitie } from "../../Requests/entities";
const Form = styled.form`
  width: 50%;
  height: 5vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function HomePage() {
  const [searchData, setSearchData] = useState();
  const [resultRequest, requestGet] = useRequestGet();
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("token"));

  const handleInput = (event) => {
    const data = event.target.value;
    setSearchData(data);
  };

  const searchImage = (event) => {
    event.preventDefault();
    requestGet(searchImageEntitie, token, searchData);
  };

  return (
    <div>
      <HomeImageDiv>
        <ImageHomePage />
        <Form onSubmit={searchImage}>
          <SearchInput
            name={"search"}
            type={"text"}
            value={searchData}
            onChange={handleInput}
            placeholder={"Search"}
            pattern=".{1,}"
          />
        </Form>
      </HomeImageDiv>
      <HomeCardDiv>
        {resultRequest &&
          resultRequest.map((image) => {
            return <ImageCard src={image.file} />;
          })}
      </HomeCardDiv>
    </div>
  );
}

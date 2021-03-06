import ImageHomePage from "../../Components/ImageHomePage/ImageHomePage";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { HomeImageDiv, HomeCardDiv } from "./styled";
import ImageCard from "../../Components/ImageCard/ImagemCard";
import { useState } from "react";
import styled from "styled-components";
import { useRequestGet } from "../../Hooks/useRequestGet";
import { searchImageURL } from "../../Requests/entities";

const Form = styled.form`
  width: 50%;
  height: 5vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function HomePage() {

  const [searchData, setSearchData] = useState("a");
  const [resultRequest, requestGet] = useRequestGet();
  const token = JSON.parse(localStorage.getItem("token"));

  const handleInput = (event) => {
    const data = event.target.value;
    setSearchData(data);
  };

  const searchImage = (event) => {
    event.preventDefault();
    requestGet(searchImageURL, token, searchData);
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
            pattern="[A-Za-z].{0,}"
            title = {"only letters"}
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

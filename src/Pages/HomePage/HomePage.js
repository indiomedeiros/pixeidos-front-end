import ImageHomePage from "../../Components/ImageHomePage/ImageHomePage";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { HomeImageDiv, HomeCardDiv } from "./styled";
import ImageCard from "../../Components/ImageCard/ImagemCard";
import { useState } from "react";
import styled from "styled-components";
import { useRequestGet } from "../../Hooks/useRequestGet";
import { searchImageURL } from "../../Requests/entities";
import ImageModal from "../../Components/Modal/ImageModal";
import shadows from "@material-ui/core/styles/shadows";

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
  const [model, setModel] = useState();
  const token = JSON.parse(localStorage.getItem("token"));

  const handleInput = (event) => {
    const data = event.target.value;
    setSearchData(data);
  };

  const searchImage = (event) => {
    event.preventDefault();
    requestGet(searchImageURL, token, searchData);
    setModel(false)
  };

  const showModel = (event) => {
    const imageData = resultRequest.filter(
      (image) => image.id === event.target.id
    );
    setModel(imageData);
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
            title={"only letters"}
          />
        </Form>
      </HomeImageDiv>
      <ImageModal />
      <HomeCardDiv>
        {resultRequest &&
          resultRequest.map((image) => {
            return (
              <ImageCard src={image.file} id={image.id} onClick={showModel} />
            );
          })}
        {model &&
          model.map((image) => {
            return (
              <ImageModal
                src={image.file}
                subtitle={image.subtitle}
                author={image.author}
                date={image.date}
                tags={image.tags}
                collection={image.collection}
                onClick = {showModel}
              />
            );
          })}
      </HomeCardDiv>
    </div>
  );
}

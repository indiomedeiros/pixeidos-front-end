import SearchInput from "../../Components/SearchInput/SearchInput";
import { HomeImageDiv, HomeCardDiv, Form } from "./styled";
import ImageCard from "../../Components/ImageCard/ImagemCard";
import { useState } from "react";
import { useRequestGet } from "../../Hooks/useRequestGet";
import { searchImageURL } from "../../Requests/entities";
import ImageModal from "../../Components/Modal/ImageModal";
import { useEffect } from "react";
import MainImageHomePage from "../../Components/MainImageHomePage/MainImageHomePage";

export default function HomePage() {
  const dataInitialResearch = "a";
  const [searchData, setSearchData] = useState(dataInitialResearch);
  const [resultRequest, requestGet] = useRequestGet();
  const [modal, setModal] = useState();
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    requestGet(searchImageURL, token, searchData);
  }, []);

  const handleSearchInput = (event) => {
    const data = event.target.value;
    setSearchData(data);
  };

  const searchImage = (event) => {
    event.preventDefault();
    requestGet(searchImageURL, token, searchData);
    setModal(false);
  };

  const showModal = (event) => {
    const imageData = resultRequest.filter(
      (image) => image.id === event.target.id
    );
    setModal(imageData);
  };

  return (
    <div>
      <HomeImageDiv>
        <MainImageHomePage src="https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_1280.jpg" />

        <Form onSubmit={searchImage}>
          <SearchInput
            name={"search"}
            type={"text"}
            value={searchData}
            onChange={handleSearchInput}
            placeholder={"Search"}
            pattern="[A-Za-z].{0,}"
            title={"only letters"}
          />
        </Form>
      </HomeImageDiv>

      <HomeCardDiv>
        {resultRequest &&
          resultRequest.map((image) => {
            return (
              <ImageCard src={image.file} id={image.id} onClick={showModal} />
            );
          })}

        {modal &&
          modal.map((image) => {
            return (
              <ImageModal
                src={image.file}
                subtitle={image.subtitle}
                author={image.author}
                date={image.date}
                tags={image.tags}
                collection={image.collection}
                onClick={showModal}
              />
            );
          })}
      </HomeCardDiv>
    </div>
  );
}

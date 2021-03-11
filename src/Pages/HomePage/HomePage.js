import SearchInput from "../../Components/SearchInput/SearchInput";
import { HomeImageDiv, HomeCardDiv, Form } from "./styled";
import ImageCard from "../../Components/ImageCard/ImagemCard";
import { useState } from "react";
import { useRequestGet } from "../../Hooks/useRequestGet";
import { searchImageURL } from "../../Requests/entities";

import { useEffect } from "react";
import MainImageHomePage from "../../Components/MainImageHomePage/MainImageHomePage";
import mainImage from "../../Assents/img/main_image.jpg";
import SpringModal from "../../Components/Modal/SpringModal";

export default function HomePage() {
  const dataInitialResearch = "a";
  const [searchData, setSearchData] = useState(dataInitialResearch);
  const [resultRequest, requestGet] = useRequestGet();
  const [modal, setModal] = useState();
  const [widownModal, setWidownModal] = useState();
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
  };

  const closeModal = () => {
    setWidownModal(false);
  };
  const openModal = () => {
    setWidownModal(true);
  };

  const putDataInModal = (event) => {
    const imageId = event.target.id;
    const image = resultRequest.filter((image) => image.id === imageId);
    setModal(image[0]);
    openModal(true);
  };

  return (
    <div>
      <HomeImageDiv>
        <MainImageHomePage src={mainImage} />

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
              <ImageCard
                src={image.file}
                id={image.id}
                onClick={putDataInModal}
              />
            );
          })}
        {modal && (
          <SpringModal
            open={widownModal}
            onClose={closeModal}
            src={modal.file}
            subtitle={modal.subtitle}
            author={modal.author}
            date={modal.date.split("-")[0]}
            tags={modal.tags}
            collection={modal.collection}
          />
        )}
      </HomeCardDiv>
    </div>
  );
}

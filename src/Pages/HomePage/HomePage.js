import SearchInput from "../../Components/SearchInput/SearchInput";
import { HomeImageDiv, HomeCardDiv, Form, Title, ImageHomeImg } from "./styled";
import ImageCard from "../../Components/ImageCard/ImagemCard";
import { useState } from "react";
import { useRequestGet } from "../../Hooks/useRequestGet";
import { searchImageURL, getUserByIdURL } from "../../Requests/entities";
import { useEffect } from "react";
import mainImage from "../../Assents/img/main_image.jpg";
import SpringModal from "../../Components/Modal/SpringModal";

export default function HomePage() {
  const dataInitialResearch = "a";
  const [searchData, setSearchData] = useState(dataInitialResearch);
  const [resultRequest, requestGet] = useRequestGet();
  const [resultRequestUser, requestGetUser] = useRequestGet();
  const [modal, setModal] = useState();
  const [widowModal, setWidowModal] = useState();

  useEffect(() => {
    const URL = searchImageURL + searchData;
    requestGet(URL);
  }, []);

  const handleSearchInput = (event) => {
    const data = event.target.value;
    setSearchData(data);
  };

  const searchImage = (event) => {
    event.preventDefault();
    const URL = searchImageURL + searchData;
    requestGet(URL);
  };

  const closeModal = () => {
    setWidowModal(false);
  };
  const openModal = () => {
    setWidowModal(true);
  };

  const getUserData = (author) => {
    const URL = getUserByIdURL + author;
    requestGetUser(URL);
  };

  const putDataInModal = (event) => {
    const { id, name } = event.target;
    const author = name;
    const imageId = id;
    const image = resultRequest.filter((image) => image.id === imageId);

    setModal(image[0]);
    getUserData(author);
    openModal(true);
  };

  return (
    <div>
      <HomeImageDiv>
        <ImageHomeImg src={mainImage} />

        <Form onSubmit={searchImage}>
          <Title>Images Made of motion</Title>

          <SearchInput
            name={"search"}
            type={"text"}
            value={searchData}
            onChange={handleSearchInput}
            placeholder={"Search movements"}
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
                name={image.author}
              />
            );
          })}
        {modal && (
          <SpringModal
            open={widowModal}
            onClose={closeModal}
            src={modal.file}
            subtitle={modal.subtitle}
            author={resultRequestUser ? resultRequestUser.name : modal.author }
            date={modal.date.split("-")[0]}
            tags={modal.tags}
            collection={modal.collection}
          />
        )}
      </HomeCardDiv>
    </div>
  );
}

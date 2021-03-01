import ImageHomePage from "../../Components/ImageHomePage/ImageHomePage";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { HomeImageDiv, HomeCardDiv } from "./styled";
import ImageCard from "../../Components/ImageCard/ImagemCard";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const history = useHistory()
  return (
    <div>
      {console.log(history.location.pathname)}
      <HomeImageDiv>
        <ImageHomePage />
        <SearchInput />
      </HomeImageDiv>
      <HomeCardDiv>
        <ImageCard />
      </HomeCardDiv>
    </div>
  );
}

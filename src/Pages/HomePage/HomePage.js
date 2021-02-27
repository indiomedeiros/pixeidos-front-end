import ImageHomePage from "../../Components/ImageHomePage/ImageHomePage";
import SearchInput from "../../Components/SearchInput/SearchInput";
import {HomeImageDiv} from "./styled"

export default function HomePage() {
  return  (
  <HomeImageDiv>
    <ImageHomePage/>
    <SearchInput/>
  </HomeImageDiv>
  )
}

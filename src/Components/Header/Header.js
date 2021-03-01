import { useHistory } from "react-router-dom";
import {
  goToHomePage,
  goTologinPage,
  goToSignupPage,
  goToUploudPage,
} from "../../Coordination/coordination";
import {
  HeaderContainer,
  ButtonTitle,
  ButtonsContainer,
  ButtonLogin,
  ButtonSignup,
  ButtonUploud,
} from "./styled";

export default function Header(props) {
  const history = useHistory();

  return (
    <HeaderContainer>
      <ButtonTitle onClick={() => goToHomePage(history)}>PixMovement</ButtonTitle>
      <ButtonsContainer>
        <ButtonLogin onClick={() => goTologinPage(history)}>Login</ButtonLogin>
        <ButtonSignup onClick={() => goToSignupPage(history)}>
          Signup
        </ButtonSignup>
        <ButtonUploud onClick={() => goToUploudPage(history)}>
          Upload
        </ButtonUploud>
      </ButtonsContainer>
    </HeaderContainer>
  );
}

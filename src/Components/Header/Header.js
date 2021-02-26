import { useHistory } from "react-router-dom";
import {
  goToHomePage,
  goTologinPage,
  goToSignupPage,
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
      <ButtonTitle onClick={() => goToHomePage(history)}>PIXEIDOS</ButtonTitle>
      <ButtonsContainer>
        <ButtonLogin onClick={() => goTologinPage(history)}>login</ButtonLogin>
        <ButtonSignup onClick={() => goToSignupPage(history)}>
          Signup
        </ButtonSignup>
        <ButtonUploud>Uploud</ButtonUploud>
      </ButtonsContainer>
    </HeaderContainer>
  );
}

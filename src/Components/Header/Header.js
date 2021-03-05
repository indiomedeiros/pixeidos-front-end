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
  const token = localStorage.getItem("token");
  return (
    <HeaderContainer>
      <ButtonTitle onClick={() => goToHomePage(history)}>
        PixMovement
      </ButtonTitle>
      <ButtonsContainer>
        {!token && (
          <ButtonLogin onClick={() => goTologinPage(history)}>
            Login
          </ButtonLogin>
        )}
        
        {!token && (
          <ButtonSignup onClick={() => goToSignupPage(history)}>
            Signup
          </ButtonSignup>
        )}
        {token && (
          <ButtonUploud onClick={() => goToUploudPage(history)}>
            Upload
          </ButtonUploud>
        )}
      </ButtonsContainer>
    </HeaderContainer>
  );
}

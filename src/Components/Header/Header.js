import { useHistory } from "react-router-dom";
import {
  goToHomePage,
  goTologinPage,
  goToSignupPage,
  goToUploudPage,
} from "../../Coordination/coordination";
import { logout } from "../../Services/logout";
import {
  HeaderContainer,
  ButtonTitle,
  ButtonsContainer,
  ButtonLoginLogout,
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
          <ButtonLoginLogout onClick={() => goTologinPage(history)}>
            Login
          </ButtonLoginLogout>
        )}
        {token && (
          <ButtonLoginLogout onClick={() => logout(history)}>
            Logout
          </ButtonLoginLogout>
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

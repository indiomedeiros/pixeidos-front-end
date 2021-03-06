import { useHistory } from "react-router-dom";
import {
  goToHomePage,
  goTologinPage,
  goToSignupPage,
  goToUploudPage,
  goToUserPage,
} from "../../Coordination/coordination";
import { logout } from "../../Services/logout";
import {
  HeaderContainer,
  ButtonTitle,
  ButtonsContainer,
  ButtonLoginLogout,
  ButtonSignup,
  ButtonUploud,
  ButtonUser,
  Title
} from "./styled";

export default function Header(props) {
  const history = useHistory();
  const token = localStorage.getItem("token");

  return (
    <HeaderContainer>
      <Title>
        Pix
        <ButtonTitle onClick={() => goToHomePage(history)}>
          Movement
        </ButtonTitle>
      </Title>
      <ButtonsContainer>
        {token && (
          <ButtonUser onClick={() => goToUserPage(history)}>Myspace</ButtonUser>
        )}

        {!token && (
          <ButtonSignup onClick={() => goToSignupPage(history)}>
            Signup
          </ButtonSignup>
        )}

        {!token && (
          <ButtonLoginLogout onClick={() => goTologinPage(history)}>
            Login
          </ButtonLoginLogout>
        )}

        {/* {token && (
          <ButtonUploud onClick={() => goToUploudPage(history)}>
            Upload
          </ButtonUploud>
        )} */}
        {token && (
          <ButtonLoginLogout onClick={() => logout(history)}>
            Logout
          </ButtonLoginLogout>
        )}
      </ButtonsContainer>
    </HeaderContainer>
  );
}

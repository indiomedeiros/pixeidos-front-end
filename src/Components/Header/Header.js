import {
  HeaderContainer,
  Title,
  ButtonsContainer,
  ButtonLogin,
  ButtonSignup,
  ButtonUploud,
} from "./styled";

export default function Header() {
  return (
    <HeaderContainer>
      <Title>PIXEIDOS</Title>
      <ButtonsContainer>
        <ButtonLogin>login</ButtonLogin>
        <ButtonSignup>Signup</ButtonSignup>
        <ButtonUploud>Uploud</ButtonUploud>
      </ButtonsContainer>
    </HeaderContainer>
  );
}

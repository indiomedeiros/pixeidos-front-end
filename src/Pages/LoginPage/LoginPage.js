import InputComponent from "../../Components/Input/Input";
import { useForm } from "../../Hooks/useForm";
import { useRequestPost } from "../../Hooks/Requests/useRequestPost";
import { loginURL } from "../../Hooks/Requests/entities";
import { Div, Form, Title, Button } from "./loginStyled";
import { Error } from "../HomePage/homeStyled";

export default function LoginPage() {
  const [form, handleChange, clearInput] = useForm({ email: "", password: "" });
  const [resultRequest, loginError, requestData] = useRequestPost();

  const loginUser = (event) => {
    event.preventDefault();
    requestData(loginURL, form);
    if (!loginError) {
      clearInput();
    }
  };

  return (
    <Div>
      <Form onSubmit={loginUser}>
        <Title>Get in the movement</Title>
        <InputComponent
          label="E-mail"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="ex: nome@gmail.com"
          placeholder={"E-mail"}
          required
        />

        <InputComponent
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          pattern=".{6,}"
          title="mínimo de 6 caracters"
          placeholder={"Password"}
          required
        />
        {loginError && <Error>{loginError.error}</Error>}
        <div>
          <Button>{"Login"}</Button>
        </div>
      </Form>
    </Div>
  );
}

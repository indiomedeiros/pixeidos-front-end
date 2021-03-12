import { useHistory } from "react-router-dom";
import InputComponent from "../../Components/Input/Input";
import { useForm } from "../../Hooks/useForm";
import { useRequestPost } from "../../Hooks/useRequestPost";
import { loginURL } from "../../Requests/entities";
import styled from "styled-components";

export const Form = styled.form`
  border: 1px solid white;
  height: 33vh;
  max-width: 50vw;
  width: 100%;
  text-align: center;
`;
export const Div = styled.div`
  background-color: #0b986a;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function LoginPage() {
  const [form, handleChange, clearInput] = useForm({ email: "", password: "" });
  const [resultRequest, requestPost] = useRequestPost();

  const loginUser = (event) => {
    event.preventDefault();
    requestPost(loginURL, form);
    clearInput();
  };

  return (
    <Div>
      <Form onSubmit={loginUser}>
        <InputComponent
          label="E-mail"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="ex: nome@gmail.com"
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
          required
        />
        <button>{"Submit"}</button>
      </Form>
    </Div>
  );
}

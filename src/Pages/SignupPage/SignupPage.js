import InputComponent from "../../Components/Input/Input";
import { useForm } from "../../Hooks/useForm";
import { signupURL } from "../../Hooks/Requests/entities";
import { useRequestPost } from "../../Hooks/Requests/useRequestPost";
import { Button, Div, Error, Form, Title } from "./signupStyled";

export default function SignupPage() {
  const [resultRequest, signupError, requestData] = useRequestPost();
  const [form, handleChange, clearInput] = useForm({
    name: "",
    nickname: "",
    email: "",
    password: "",
  });

  const createUser = (event) => {
    event.preventDefault();
    requestData(signupURL, form);
    clearInput();
  };

  return (
    <Div>
      <Form onSubmit={createUser}>
        <Title>Wake up in motion</Title>
        <InputComponent
          label="Nome"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          pattern="[A-Za-z].{2,}"
          title="minimum of 3 initial letters without accents or special characters"
          placeholder={"*Name"}
          required
        />

        <InputComponent
          label="Nickname"
          type="text"
          name="nickname"
          value={form.nickname}
          onChange={handleChange}
          pattern="[A-Za-z].{2,}"
          title="minimum of 3 initial letters without accents or special characters"
          required
          placeholder={"*Nickname"}
        />

        <InputComponent
          label="E-mail"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="ex: nome@gmail.com"
          required
          placeholder={"*E-mail"}
        />

        <InputComponent
          label="Password"
          type="password"
          name="password"
          pattern=".{6,}"
          title="minimum of 6 characters"
          value={form.password}
          onChange={handleChange}
          placeholder={"*Password"}
          required
        />
        {signupError && <Error>{signupError.error}</Error>}
        <div>
          <Button>{"Signup"}</Button>
        </div>
      </Form>
    </Div>
  );
}

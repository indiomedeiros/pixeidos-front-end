import InputComponent from "../../Components/Input/Input";
import { useForm } from "../../Hooks/useForm";
import { useRequestPost } from "../../Hooks/useRequestPost";
import { loginURL } from "../../Requests/entities";
import imageLogin from "../../Assents/img/login_image.jpg";
import MainImagePage from "../../Components/MainImagePage/MainImagePage";
import { Div, Form, Title, Button } from "./styled";

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
      <MainImagePage src={imageLogin} />

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
        <div>
          <Button>{"Login"}</Button>
        </div>
      </Form>
    </Div>
  );
}

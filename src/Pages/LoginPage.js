import { useHistory } from "react-router-dom";
import InputComponent from "../Components/Input/Input";
import { useForm } from "../Hooks/useForm";
import { useRequestPost } from "../Hooks/useRequestPost";
import { loginEntitie } from "../Requests/entities";

export default function LoginPage() {
  const [form, handleChange, clearInput] = useForm({ email: "", password: "" });
  const [resultRequest, requestPost] = useRequestPost();

  const loginUser = (event) => {
    event.preventDefault();
    requestPost(loginEntitie, form);
    clearInput();
    
  };

  return (
    <div>
      <form onSubmit={loginUser}>
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
      </form>
    </div>
  );
}

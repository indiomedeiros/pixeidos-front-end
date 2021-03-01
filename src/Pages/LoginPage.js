import { useHistory } from "react-router-dom";
import InputComponent from "../Components/Input/Input";
import { useForm } from "../Hooks/useForm";

export default function LoginPage() {
  const history = useHistory();
  const initForm = {
    name: "",
    nickname: "",
    email: "",
    password: "",
  };
  const [form, onChange] = useForm(initForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const signUpUser = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={signUpUser}>
        <InputComponent
          label="E-mail"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <InputComponent
          label="Password"
          type="password"
          name="password"
          pattern=".{6,}"
          title="mínimo de 6 caracters"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button>{"Submit"}</button>
      </form>
    </div>
  );
}

import { useHistory } from "react-router-dom";
import InputComponent from "../Components/Input/Input";
import { useForm } from "../Hooks/useForm";
import { requestPost } from "../Requests/requests";
import { signupEntitie } from "../Requests/entities";

export default function SignupPage() {
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

  const createUser = (event) => {
    event.preventDefault();

    const result = requestPost(signupEntitie, form);
    if (result) history.push("/user");
  };

  return (
    <div>
      <form onSubmit={createUser}>
        <InputComponent
          label="Nome"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <InputComponent
          label="Nickname"
          type="text"
          name="nickname"
          value={form.nickname}
          onChange={handleChange}
          required
        />

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
          value={form.password}
          onChange={handleChange}
          required
        />
        <button>{"Submit"}</button>
      </form>
    </div>
  );
}

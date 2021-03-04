import { useHistory } from "react-router-dom";
import InputComponent from "../Components/Input/Input";
import { useForm } from "../Hooks/useForm";
import { signupEntitie } from "../Requests/entities";
import { useRequestPost } from "../Hooks/useRequestPost";

export default function SignupPage() {
  const history = useHistory();
  const initForm = {
    name: "",
    nickname: "",
    email: "",
    password: "",
  };
  const [form, onChange] = useForm(initForm);
  const [requestPost] = useRequestPost();

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const createUser = (event) => {
    event.preventDefault();
    requestPost(signupEntitie, form);
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
          pattern="[A-Za-z].{2,}"
          title="mínimo de 3 letras iniciais"
          required
        />

        <InputComponent
          label="Nickname"
          type="text"
          name="nickname"
          value={form.nickname}
          onChange={handleChange}
          pattern="[A-Za-z].{2,}"
          title="mínimo de 3 letras iniciais"
          required
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
        />

        <InputComponent
          label="Password"
          type="password"
          name="password"
          pattern=".{6,}"
          title="mínnimo de 6 caracters"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button>{"Submit"}</button>
      </form>
    </div>
  );
}

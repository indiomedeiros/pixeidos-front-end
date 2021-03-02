import { useHistory } from "react-router-dom";
import InputComponent from "../Components/Input/Input";
import { useForm } from "../Hooks/useForm";
import { requestPost } from "../Requests/requests";
import { createImageEntitie, signupEntitie } from "../Requests/entities";

export default function UserPage() {
  const history = useHistory();
  const initForm = {
    subtitle: "",
    file: "",
    tags: "",
    collection: "",
  };
  const [form, onChange] = useForm(initForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const createImagem = (event) => {
    event.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(form);
    requestPost(createImageEntitie, form, token);
  };

  return (
    <div>
      <form onSubmit={createImagem}>
        <InputComponent
          label="Subtitle"
          type="text"
          name="subtitle"
          value={form.subtitle}
          onChange={handleChange}
          required
        />

        <InputComponent
          label="file"
          type="text"
          name="file"
          value={form.file}
          onChange={handleChange}
          required
        />

        <InputComponent
          label="tags"
          type="text"
          name="tags"
          value={form.tags}
          onChange={handleChange}
          required
        />

        <InputComponent
          label="collection"
          type="text"
          name="collection"
          value={form.collection}
          onChange={handleChange}
          required
        />
        <button>{"Submit"}</button>
      </form>
    </div>
  );
}

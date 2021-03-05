import { useHistory } from "react-router-dom";
import InputComponent from "../Components/Input/Input";
import { useForm } from "../Hooks/useForm";
import { createImageEntitie } from "../Requests/entities";
import { useRequestPost } from "../Hooks/useRequestPost";

export default function UserPage() {
  const history = useHistory();
  const [requestPost] = useRequestPost();
  const [form, handleChange, clearInput] = useForm({
    subtitle: "",
    file: "",
    tags: "",
    collection: "",
  });

  const createImagem = (event) => {
    event.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    requestPost(createImageEntitie, form, token);
    clearInput()
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
          pattern="[A-Za-z].{2,}"
          title="minimo de 3 letras iniciais"
          required
        />

        <InputComponent
          label="file"
          type="file"
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
          pattern="[A-Za-z].{2,}"
          title="minimo de 3 letras iniciais"
          required
        />

        <InputComponent
          label="collection"
          type="text"
          name="collection"
          value={form.collection}
          onChange={handleChange}
          pattern="[A-Za-z].{2,}"
          title="minimo de 3 letras iniciais"
          required
        />
        <button>{"Submit"}</button>
      </form>
    </div>
  );
}

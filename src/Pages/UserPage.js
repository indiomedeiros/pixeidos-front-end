
import InputComponent from "../Components/Input/Input";
import { useForm } from "../Hooks/useForm";
import { useRequestPost } from "../Hooks/useRequestPost";
import {useProtectedPage} from "../Hooks/useProtectedPage"
import { createImageURL } from "../Requests/entities";
export default function UserPage() {
  useProtectedPage()
  const [resultRequest, requestPost] = useRequestPost();
  const [form, handleChange, clearInput] = useForm({
    subtitle: "",
    file: "",
    tags: "",
    collection: "",
  });

  const createImagem = (event) => {
    event.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(createImageURL, form, token)
    requestPost(createImageURL, form, token);
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
          type="url"
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

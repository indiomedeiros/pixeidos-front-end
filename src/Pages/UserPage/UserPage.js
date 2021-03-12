import InputComponent from "../../Components/Input/Input";
import { useForm } from "../../Hooks/useForm";
import { useRequestPost } from "../../Hooks/useRequestPost";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { createImageURL } from "../../Requests/entities";
import { Button, Div, Img, Form, Title } from "./styled";
import MainImagePage from "../../Components/MainImagePage/MainImagePage";
import imageLogin from "../../Assents/img/signup_image.jpg";

export default function UserPage() {
  useProtectedPage();
  const [resultRequest, requestPost] = useRequestPost();
  const [form, handleChange, clearInput] = useForm({
    subtitle: "",
    tags: "",
    collection: "",
  });

  const createImagem = (event) => {
    event.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(createImageURL, form, token);
    requestPost(createImageURL, form, token);
    clearInput();
    console.log("result", resultRequest);
  };

  return (
    <Div>
      <MainImagePage src={form.file ? form.file : imageLogin} />
     
        <Form onSubmit={createImagem}>
          <Title>Create movement</Title>
          <InputComponent
            label="file"
            type="url"
            name="file"
            value={form.file}
            onChange={handleChange}
            required
            placeholder={"Place the image link"}
          />

          {form.file && (
            <InputComponent
              label="Subtitle"
              type="text"
              name="subtitle"
              value={form.subtitle}
              onChange={handleChange}
              pattern="[A-Za-z].{2,}"
              title="minimum of 3 initial letters"
              required
              placeholder={"Subtitle"}
            />
          )}

          {form.subtitle && (
            <InputComponent
              label="tags"
              type="text"
              name="tags"
              value={form.tags}
              onChange={handleChange}
              pattern="[A-Za-z].{2,}"
              title="minimo de 3 letras iniciais"
              required
              placeholder={"Tags"}
            />
          )}

          {form.tags && (
            <InputComponent
              label="collection"
              type="text"
              name="collection"
              value={form.collection}
              onChange={handleChange}
              pattern="[A-Za-z].{2,}"
              title="minimo de 3 letras iniciais"
              required
              placeholder={"Collection"}
            />
          )}
          {form.collection && <button>{"Submit"}</button>}

          <div>
            {form.collection && <Button>{"Create movement"}</Button>}
          </div>
        </Form>
        
    </Div>
  );
}

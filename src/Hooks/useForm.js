import { useState } from "react";

export const useForm = (initState) => {
  const [form, setForm] = useState(initState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const clearInput = () => {
    setForm(initState);
  };

  return [form, handleChange, clearInput];
};

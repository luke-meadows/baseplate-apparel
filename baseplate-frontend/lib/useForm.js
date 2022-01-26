import { useState } from 'react';

export default function useForm(initialValues) {
  const [inputs, setInputs] = useState({ ...initialValues });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(inputs);
  }
  function resetForm() {
    setInputs(initialValues);
  }
  function clearForm() {
    const blankForm = Object.fromEntries(
      Object.keys(inputs).map((key) => [key, ''])
    );
    setInputs(blankForm);
  }
  console.log(inputs);
  return { inputs, handleChange, clearForm, resetForm };
}

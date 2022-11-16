import { useState } from "react";
const InputTypes = {
  password: {
    regex: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,20}$/,
    message: "Preencha um email válido",
  },
  name: { regex: /^\S{10,}$/, message: "Deve ter no mínimo 3 caracteres" },
};
export default function useForm(type: string | false) {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  function validate(value: string) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (
      InputTypes[type as keyof typeof InputTypes] &&
      !InputTypes[type as keyof typeof InputTypes].regex.test(value)
    ) {
      setError(InputTypes[type as keyof typeof InputTypes].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }: any) {
    if (error) validate(target.value);
    setValue(target.value);
  }
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}

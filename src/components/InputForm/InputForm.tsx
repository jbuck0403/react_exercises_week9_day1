import React, { FormEvent, useState } from "react";
import "./InputForm.css";

interface InputFormProps {
  updateListItems: (inputValue: string) => void;
  listLength: number;
  defaultPlaceholder: string;
}

const InputForm = (props: InputFormProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const placeholder = "Enter something...";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.updateListItems(inputValue);
    setInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleInputChange}
        value={inputValue}
        placeholder={
          props.listLength == 0 ? props.defaultPlaceholder : placeholder
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default InputForm;

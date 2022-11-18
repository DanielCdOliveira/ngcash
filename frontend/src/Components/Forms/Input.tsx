import React from "react";
import styled from "styled-components";
type InputType = {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: any;
  error?: string | undefined | null;
  onBlur?: any;
  disabled?: boolean;
};
export default function Input({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  disabled,
}: InputType) {
  return (
    <StyledInput>
      <label htmlFor={name}>{label}</label>
      <input
        disabled={disabled}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="error">{error}</p>}
    </StyledInput>
  );
}
const StyledInput = styled.div`
  margin-bottom: 1rem;
  label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 10px;
    font-weight: 500;
  }
  input {
    border: none;
    border-bottom: 3px solid #adadad;
    display: block;
    width: 100%;
    font-size: 1.2rem;
    padding-bottom: 0.3rem;
    padding-left: 0.3rem;
    transition: 0.2s;
    &:hover,
    &:focus {
      outline: none;
      border-color: #000;
      background-color: #fff;
      border-bottom: 3px solid #000;
    }
    &:disabled {
      border: 1px solid #eee;
      background-color: #eee;
      pointer-events: none;
    }
  }
  .error {
    color: #f31;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;

import React from "react";
import styled from "styled-components";
type InputType = {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: any;
  error: string;
  onBlur: any;
  disabled: boolean;
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
    padding-bottom: 5px;
    font-weight: 400;
  }
  input {
    border: 1px solid #eee;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background-color: #eee;
    transition: 0.2s;
    &:hover,
    &:focus {
      outline: none;
      border-color: #fb1;
      background-color: #fff;
      box-shadow: 0 0 0 3px #fea;
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

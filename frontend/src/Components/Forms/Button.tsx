import React from "react";
import styled from "styled-components";
export default function Button({ children, ...props }: any) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
const StyledButton = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border: 3px solid #000;
  border-radius: 0.4rem;
  background: #fff;
  color: #000;
  font-weight: 600;
  padding: 0.8rem 1.2rem;
  transition: 0.1s;
  min-width: 8rem;
  box-shadow: 3px 3px 0px 0px #000000;
  margin-bottom: 3px;
  &:hover {
    margin-top: 3px;
    margin-bottom: 0px;
    margin-left: 3px;
    box-shadow: none;
    /* border: 3px solid #fff; */
  }
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;

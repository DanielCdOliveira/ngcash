import React from "react";
import styled from "styled-components";

export default function SignIn() {
  return (
    <Section>
      <h1>Login</h1>
    </Section>
  );
}

const Section = styled.section`
  position: fixed;
  width: 400px;
  height: 70vh;
  right: 200px;
  top: 15vh;
  background-color: #fff;
  border-radius: 6px;
  h1 {
    font-size: 3rem;
    margin: 1rem 0;
    position: relative;
    z-index: 1;
    font-weight: 700;
  }
  h1::after {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #adadad;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
    position: absolute;
  }
`;

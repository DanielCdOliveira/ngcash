import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../Context/UserContext";
import Background from "../../Helper/Background";
import ErrorComponent from "../../Helper/Error";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";

export default function SignUp() {
  const username = useForm("username");
  const password = useForm("password");
  const { userSignup, loading, error, setError }: any = useContext(UserContext);
  async function handleSubmit(e: any) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userSignup(username.value, password.value);
    }
  }
  return (
    <>
      <Background />
      <Section className="animateRight">
        <div className="container">
          <h1>Cadastro</h1>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Input
              disabled={loading}
              label={"Usuário"}
              type={"name"}
              name="username-register"
              {...username}
            />
            <Input
              disabled={loading}
              label={"Senha"}
              type={"password"}
              name="password-register"
              {...password}
            />
            <Button disabled={loading}>
              {loading ? "Carregando..." : "Cadastrar"}
            </Button>
          </Form>
          <ErrorComponent error={error} />
          <div className="signin">
            <h2>Login</h2>
            <p>Já possui conta? Faça o login</p>
            <Link onClick={() => setError(null)} to="/login">
              Login {">"}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  @media (max-width: 1220px) {
    max-width: 400px;
    margin-top: 10vh;
    left: calc(50vw - 200px);
  }
  @media (max-width: 650px) {
    width: 100vw;
    max-width: none;
    left: 0;
  }
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 70vh;
  right: 200px;
  top: 15vh;
  background-color: #fff;
  border-radius: 10px;
  .container {
    width: 80%;
    height: 80%;
  }
  h1 {
    font-size: 3rem;
    position: relative;
    z-index: 1;
    font-weight: 700;
    margin-bottom: 1rem;
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
  .signin {
    margin-top: 3rem;
    p {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    h2 {
      font-family: var(--type-second);
      font-size: 2rem;
      &::after {
        content: "";
        display: block;
        background-color: #ddd;
        height: 0.5rem;
        width: 3rem;
        border-radius: 0.2rem;
      }
    }
    a {
      width: fit-content;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      border: 3px solid #000;
      border-radius: 0.4rem;
      background: #fff;
      color: #000;
      padding: 8px 12px;
      transition: 0.1s;
      min-width: 8rem;
      box-shadow: 3px 3px 0px 0px #000000;
      margin-bottom: 3px;
      &:hover {
        margin-top: 3px;
        margin-bottom: 0px;
        margin-left: 3px;
        box-shadow: none;
      }
    }
  }
`;
const Form = styled.form``;

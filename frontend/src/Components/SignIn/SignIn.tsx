import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../Context/UserContext";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";

export default function SignIn({ setLogin }: any) {
  const username = useForm("username");
  const password = useForm("password");
  const { userLogin, loading, error, login }: any = useContext(UserContext);

  return (
    <Section className="animateRight">
      <div className="container">
        <h1>Login</h1>
        <Form>
          <Input
            disabled={loading}
            label={"Usuário"}
            type={"name"}
            name="username"
            {...username}
          />
          <Input
            disabled={loading}
            label={"Senha"}
            type={"password"}
            name="password"
            {...password}
          />
          <Button disabled={loading}>
            {loading ? "Carregando..." : "Entrar"}
          </Button>
        </Form>
        <div className="signup">
          <h2>Cadastre-se</h2>
          <p>Não possui conta? Cadastre-se no site.</p>
          <span
            onClick={() => {
              setLogin(false);
            }}
            className="link"
          >
            Cadastro {">"}
          </span>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
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
  .signup {
    margin-top: 4rem;
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
    .link {
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

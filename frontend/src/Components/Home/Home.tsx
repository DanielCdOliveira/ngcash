import React, { useState } from "react";
import styled from "styled-components";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import smartphone from "../../smartphone.png";
export default function Home() {
  const [login, setLogin] = useState(true);
  return (
    <>
      <Section>
        <Logo>
          <div className="text">
            <h1>NG.CA$H</h1>
            <h2>A CARTEIRA DA NOVA GERAÇÃO.</h2>
          </div>
          <img src={smartphone} alt="" />
        </Logo>
        {login ? (
          <SignIn setLogin={setLogin} />
        ) : (
          <SignUp setLogin={setLogin} />
        )}
      </Section>
    </>
  );
}

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: #000;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  margin-left: 100px;
  margin-top: 10vh;
  width: calc(100vw - 700px);
  max-width: 1200px;
  @media (max-width: 1400) {
    width: calc(100vw - 700px);
    background-color: azure;
  }
  .text {
    color: #fff;
    h1 {
      font-family: "Urbanist", sans-serif;
      font-size: 6rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
  img {
    max-width: 600px;
    align-self: flex-end;
    margin-right: 120px;
  }
`;

import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../Context/UserContext";
import { FiFilter } from "react-icons/fi";
import Button from "../Forms/Button";
import TransactionsList from "./TransactionsList";
import useGetBalance from "../../Hooks/api/useGetBalance";
const array = [
  {
    date: "19/11/2022",
    dayOfWeek: "Sábado",
    transactionsArray: [
      {
        value: "10,00",
        createdAt: "2022-11-19T23:15:50.991Z",
        from: "teste123",
        to: "joaosdsa",
        hour: "20:15",
      },
      {
        value: "100,00",
        createdAt: "2022-11-19T23:15:50.991Z",
        from: "teste123",
        to: "joaosdsa",
        hour: "20:15",
      },
      {
        value: "10,00",
        createdAt: "2022-11-19T23:15:50.991Z",
        from: "joaosdsa",
        to: "teste123",
        hour: "20:15",
      },
      {
        value: "50,00",
        createdAt: "2022-11-19T23:15:50.991Z",
        from: "joaosdsa",
        to: "teste123",
        hour: "20:15",
      },
    ],
  },
  {
    date: "19/11/2022",
    dayOfWeek: "Sábado",
    transactionsArray: [
      {
        value: "10,00",
        createdAt: "2022-11-19T23:15:50.991Z",
        from: "teste123",
        to: "joaosdsa",
        hour: "20:15",
      },
      {
        value: "100,00",
        createdAt: "2022-11-19T23:15:50.991Z",
        from: "teste123",
        to: "joaosdsa",
        hour: "20:15",
      },
      {
        value: "10,00",
        createdAt: "2022-11-19T23:15:50.991Z",
        from: "joaosdsa",
        to: "teste123",
        hour: "20:15",
      },
      {
        value: "50,00",
        createdAt: "2022-11-19T23:15:50.991Z",
        from: "joaosdsa",
        to: "teste123",
        hour: "20:15",
      },
    ],
  },
];
export default function Transactions() {
  const { data }: any = useContext(UserContext);
  const { balance }: any = useGetBalance();
  console.log(balance);

  if (!data) return null;
  return (
    <Section>
      <div className="container">
        <header>
          <h1>Olá, {data.username}</h1>
          <Button>Transação +</Button>
        </header>
        <div className="container-transactions">
          <h2>
            <FiFilter /> Filtrar
          </h2>
          <section>
            <TransactionsList transactions={array} />
          </section>
        </div>
        <footer>
          <h1>Saldo atual</h1>
          <h1>R$ {balance && balance.balance}</h1>
        </footer>
      </div>
    </Section>
  );
}

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #fff;

  .container {
    width: 40%;
    min-width: 600px;
    height: 80%;
    border: 3px solid #000;
    margin: 0 auto;
    margin-top: 120px;
    border-radius: 10px;
    box-shadow: 6px 6px 0px 0px #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 48px;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 80px;
    position: relative;
    h1 {
      font-size: 1.8rem;
      font-family: "Urbanist", sans-serif;
      align-self: center;
    }
  }
  .container-transactions {
    height: calc(100% - 160px);
    /* background-color: aquamarine; */
    width: 90%;
    align-self: center;
    position: relative;
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #000;
      position: absolute;
      bottom: 0;
    }
    &::before {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #000;
      position: absolute;
      top: 0;
    }
  }
  h2 {
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 1.4rem;
    display: flex;
    flex-direction: row-reverse;
    svg {
      margin-left: 6px;
    }
  }
  section {
    height: calc(100% - 40px);
    /* background-color: aqua; */
    align-self: center;
    overflow-y: auto;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    position: relative;

    h1 {
      font-size: 1.8rem;
      font-family: "Urbanist", sans-serif;
    }
  }
`;

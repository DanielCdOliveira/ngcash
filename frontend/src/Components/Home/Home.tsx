import React, { useContext, useState } from "react";
import styled from "styled-components";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import smartphone from "../../smartphone.png";
import { Navigate } from "react-router-dom";
import { log } from "console";
import { UserContext } from "../../Context/UserContext";
import useGetTransactions from "../../Hooks/api/useGetTransactions";
import Header from "../Header/Header";
import Transactions from "../Transactions/Transactions";
export default function Home() {
  // const { transactionsData, getTransactionsError, getTransactionsLoading } =
  //   useGetTransactions();
  return (
    <Section>
      <Header />
      <Transactions />
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  align-items: center;
`;

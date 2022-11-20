import styled from "styled-components";

import Header from "../Header/Header";

import Transactions from "../Transactions/Transactions";
export default function Home() {
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

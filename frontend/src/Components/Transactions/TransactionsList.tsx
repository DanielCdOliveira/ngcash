import React from "react";
import styled from "styled-components";
import TransactionsDay from "./TransactionsDay";

export default function TransactionsList({ transactions }: any) {
  return (
    <List>
      {transactions.map((day: any) => {
        return (
          <ListItem key={day.date}>
            <div className="container-day">
              <p>{day.dayOfWeek}</p>
              <span>{day.date}</span>
            </div>
            <TransactionsDay transactionsArray={day.transactionsArray} />
          </ListItem>
        );
      })}
    </List>
  );
}

const List = styled.ul`
  height: 100%;
  width: 100%;
  /* background-color: blueviolet; */
  li {
  }
`;
const ListItem = styled.li`
  width: 100%;
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
  .container-day {
    display: flex;
  }
  p {
    font-size: 1.2rem;
    color: #555555;
  }
  span {
    font-size: 0.8rem;
    color: #949494;
    align-self: flex-end;
    margin-left: 6px;
  }
  .value {
  }
`;

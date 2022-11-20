import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../Context/UserContext";

export default function TransactionsDay({ transactionsArray }: any) {
  const { data }: any = useContext(UserContext);
  const username = data.username;
  if (!data) return null;
  return (
    <List>
      {transactionsArray.map((transaction: any) => {
        return (
          <ListItem key={transaction.id}>
            {transaction.from === username ? (
              <>
                <div className="username">
                  <p>{transaction.to}</p>
                  <span className="hour">{transaction.hour}</span>
                </div>
                <span className="price">R$ {transaction.value}</span>
              </>
            ) : (
              <>
                <div className="username">
                  <p>{transaction.from}</p>
                  <span className="hour">{transaction.hour}</span>
                </div>
                <span className="green price">R$ {transaction.value}</span>
              </>
            )}
          </ListItem>
        );
      })}
    </List>
  );
}

const List = styled.ul`
  width: 90%;
  align-self: center;
  margin: 8px 0;
`;
const ListItem = styled.li`
  padding: 6px 12px;
  height: 50px;
  /* background-color: #f8f8f8; */
  border: 1px solid #f8f8f8;
  border-radius: 4px;
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .username {
    width: 70%;
    p {
      color: #000;
    }
  }
  .price {
    font-size: 1rem;
    align-self: center;
  }
  .green {
    color: #5acc73;
  }
`;

import { useState } from "react";
import styled from "styled-components";
import usePostTransactions from "../../Hooks/api/usePostTransaction";
import Button from "../Forms/Button";

export default function TransactionModal({
  refresh,
  setRefresh,
  newTransactionModal,
  setNewTransactionModal,
}: any) {
  const [username, setUsername] = useState("");
  const [value, setValue] = useState("");
  console.log(refresh);

  const {
    postTransactionError,
    postTransactionLoading,
    postTransactions,
  }: any = usePostTransactions();
  console.log(postTransactionError);
  function changeValue({ target }: any) {
    setValue(target.value);
  }
  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      await postTransactions({
        destinationUserName: username,
        amount: parseFloat(value.replace(",", ".")) * 100,
      });
      setUsername("");
      setValue("");
      setNewTransactionModal(false);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  }
  function handleOutsideClick(event: any) {
    if (event.target === event.currentTarget) setNewTransactionModal(false);
  }
  if (!newTransactionModal) return null;
  return (
    <ModalContainer onClick={handleOutsideClick}>
      <Modal>
        <h1>Realizar transferência</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label htmlFor="username-destiny">Usuário</label>
            <input
              disabled={postTransactionLoading}
              type={"name"}
              name="username-destiny"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="value-container">
            <label htmlFor="value">Valor</label>
            <input
              disabled={postTransactionLoading}
              type="number"
              name="value"
              value={value}
              min="0.01"
              step=".01"
              onChange={(e) => changeValue(e)}
            />
          </div>
          <span className="error">
            {postTransactionError && postTransactionError.data.message}
          </span>
          <Button>Transferir</Button>
        </form>
      </Modal>
    </ModalContainer>
  );
}
const ModalContainer = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.div`
  background-color: #fff;
  width: fit-content;
  height: fit-content;
  left: 10vw;
  top: 25vh;
  border-radius: 8px;
  border: 2px solid #000;
  box-shadow: 6px 6px 0px 0px #000000;
  padding: 18px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 1.2rem;
    margin-top: 16px;
    margin-bottom: 8px;
  }
  h1 {
    font-family: "Urbanist", sans-serif;
    font-size: 1.5rem;
    position: relative;
    width: 100%;
    padding-bottom: 16px;
    display: flex;
    justify-content: center;
    &::after {
      content: "";
      width: 80%;
      height: 2px;
      background-color: #000;
      position: absolute;
      bottom: 0;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    width: 350px;
    label {
      display: block;
      font-size: 1rem;
      line-height: 1;
      padding-bottom: 10px;
      font-weight: 500;
      margin-top: 16px;
    }
    input {
      border: none;
      border-bottom: 3px solid #adadad;
      display: block;
      width: 100%;
      font-size: 1.2rem;
      padding-bottom: 0.3rem;
      padding-left: 0.3rem;
      transition: 0.2s;
      &:hover,
      &:focus {
        outline: none;
        border-color: #000;
        background-color: #fff;
        border-bottom: 3px solid #000;
      }
      &:disabled {
        border-bottom: 3px solid #adadad;
        background-color: #eee;
        pointer-events: none;
      }
    }
    button {
      width: fit-content;
      align-self: center;
    }
    .value-container {
      margin-bottom: 16px;
    }
    .error {
      color: #f31;
      margin-bottom: 8px;
      align-self: center;
    }
  }
`;

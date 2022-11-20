import { useState } from "react";
import styled from "styled-components";
import Button from "../Forms/Button";

export default function FilterModal({
  setFilter,
  filterModal,
  setFilterModal,
}: any) {
  const [cashin, setCashin] = useState(false);
  const [cashout, setCahsout] = useState(false);
  const [date, setDate] = useState("");
  function handleSubmit(event: any) {
    event.preventDefault();
    if ((cashin && cashout) || (!cashin && !cashout)) {
      setFilter({ cash: "", date });
    } else {
      setFilter({ cash: cashin ? "in" : "out", date });
    }
    setFilterModal(false);
  }
  function handleOutsideClick(event: any) {
    if (event.target === event.currentTarget) setFilterModal(false);
  }
  if (!filterModal) return null;
  return (
    <ModalContainer onClick={handleOutsideClick}>
      <Modal>
        <h1>Filtros</h1>
        <form onSubmit={handleSubmit}>
          <div className="checkbox">
            <h2>Tipos de transações:</h2>
            <div className="option">
              <input
                type="checkbox"
                name="cash-in"
                id="cash-in"
                onChange={() => {
                  setCashin(!cashin);
                }}
              />
              <label htmlFor="cash-in">Entradas</label>
            </div>
            <div className="option">
              <input
                type="checkbox"
                name="cash-out"
                id="cash-out"
                onChange={() => {
                  setCahsout(!cashout);
                }}
              />
              <label htmlFor="cash-out">Saídas</label>
            </div>
          </div>
          <div className="date-input">
            <h2>Data</h2>
            <input
              type="date"
              name="date-filter"
              id="date-filter"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <Button>Filtrar</Button>
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
    .option {
      padding-left: 8px;
      margin-top: 8px;
    }
    .date-input {
      input {
        margin-left: 8px;
        margin-bottom: 18px;
      }
    }
    button {
      width: fit-content;
      align-self: center;
    }
  }
`;

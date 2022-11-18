import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../Context/UserContext";
import logo from "../../Assets/images/logo.svg";
import { MdOutlineLogout } from "react-icons/md";
export default function Header() {
  const { data, loading }: any = useContext(UserContext);
  console.log(loading);
  console.log(data.username);

  return (
    <MainHeader>
      <div className="container">
        <img src={logo} alt="logo ngacash" />
        <div className="user">
          <p className="logout">Logout</p>
          <MdOutlineLogout />
        </div>
      </div>
    </MainHeader>
  );
}

const MainHeader = styled.header`
  z-index: 10;
  position: fixed;
  height: 86px;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #000;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
  }
  img {
    height: 50px;
  }
  .user {
    color: #fff;
    font-size: 1rem;
    display: flex;
    align-items: center;
    svg {
      font-size: 3rem;
      padding-left: 16px;
    }
  }
  @media (max-width: 600) {
    .logout {
      display: none;
    }
  }
`;

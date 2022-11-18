import React, { useContext, useState } from "react";
import styled from "styled-components";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import smartphone from "../../smartphone.png";
import { Navigate } from "react-router-dom";
import { log } from "console";
import { UserContext } from "../../Context/UserContext";
export default function Home() {
  const { login }: any = useContext(UserContext);
  if (login) return <Navigate to="/account" />;
  else return <Navigate to="/auth" />;
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Assets/GlobalStyle";
import Account from "./Components/Account/Account";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import { UserStorage } from "./Context/UserContext";
import ProtectedRoute from "./Helper/ProtectedRouter";
function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <GlobalStyle />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Assets/GlobalStyle";
import Home from "./Components/Home/Home";
import { UserStorage } from "./Context/UserContext";
function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;

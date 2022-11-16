import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import GlobalStyle from './Assets/GlobalStyle';
import Home from './Components/Home/Home';
function App() {
  

  return (
    <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

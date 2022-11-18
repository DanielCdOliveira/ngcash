import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Assets/GlobalStyle";
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
                <Home />
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

import { useState, useEffect, createContext, useCallback } from "react";

import useSignIn from "../Hooks/api/useSignIn";
import { useNavigate } from "react-router-dom";
import useSignUp from "../Hooks/api/useSignUp";
import useValidateToken from "../Hooks/api/useValidateToken";

type UserContextInterface = {
  userLogin: any;
  userSignup: any;
  userLogout: any;
  loading: boolean;
  data: any;
  error: any;
  login: boolean;
  setError: any;
};

export const UserContext = createContext<UserContextInterface | null>(null);
export function UserStorage({ children }: any) {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { signInLoading, signIn } = useSignIn();
  const { signUpLoading, signUp } = useSignUp();
  const { validateTokenLoading, validateToken } = useValidateToken();
  const navigate = useNavigate();
  const userLogout = useCallback(
    async function () {
      setData(null);
      setLogin(false);
      setLoading(false);
      setError(null);
      localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );
  console.log(data);

  useEffect(() => {
    async function autoLogin() {
      setError(null);
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const data = await validateToken(token);
          setLogin(true);
          setData(data);
        } catch (err: any) {
          setError(err);
          userLogout();
          console.log(err);
          console.log("Não foi possível fazer o login!");
        }
      }
    }
    autoLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // SETAR LOADING
  useEffect(() => {
    if (signInLoading || validateTokenLoading || signUpLoading)
      setLoading(true);
    else setLoading(false);
  }, [signInLoading, validateTokenLoading, signUpLoading]);

  // FUNÇAO DE LOGAR
  async function userLogin(username: string, password: string) {
    setError(null);
    try {
      const { token } = await signIn({
        username: username,
        password: password,
      });
      localStorage.setItem("token", token);
      const data = await validateToken(token);
      setLogin(true);
      setData(data);
      navigate("/");
    } catch (err) {
      setError("Usuário e senha incompatíveis!");
    }
  }
  async function userSignup(username: string, password: string) {
    setError(null);
    try {
      await signUp({
        username,
        password,
      });
      userLogin(username, password);
    } catch (err: any) {
      console.log(err);
      setError(err.data.message);
    }
  }
  return (
    <UserContext.Provider
      value={{
        userLogin,
        userSignup,
        userLogout,
        loading,
        data,
        error,
        login,
        setError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

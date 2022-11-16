// import { useState, useEffect, createContext, useCallback } from "react";

// import useSignIn from "../Hooks/api/useSignIn";
// import { useNavigate } from "react-router-dom";
// import useSignUp from "../Hooks/api/usePostUser";

// type UserContextInterface = {
//   userLogin: any;
//   userSignup: any;
//   userLogout: any;
//   loading: boolean;
//   data: any;
//   error: any;
//   login: boolean;
// };

// export const UserContext = createContext<UserContextInterface | null>(null);
// export function UserStorage({ children }: any) {
//   const [data, setData] = useState(null);
//   const [login, setLogin] = useState(false);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const { signInLoading, signIn } = useSignIn();
//   const { signUpLoading, signUp } = useSignUp();
//   const navigate = useNavigate();

//   const userLogout = useCallback(
//     async function () {
//       setData(null);
//       setLogin(false);
//       setLoading(false);
//       setError(null);
//       localStorage.removeItem("token");
//       navigate("/");
//     },
//     [navigate]
//   );
//   // melhorar (colocando loading na verificação de login)
//   useEffect(() => {
//     async function autoLogin() {
//       setError(null);
//       const token = localStorage.getItem("token");
//       if (token) {
//         try {
//           setLogin(true);
//           await validateToken(token);
//           getUserData(token);
//         } catch (err) {
//           setError(err);
//           userLogout();
//           console.log(err);
//           console.log("Não foi possível fazer o login!");
//         }
//       }
//     }
//     autoLogin();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   // SETAR LOADING
//   useEffect(() => {
//     if (
//       signInLoading ||
//       getUserLoading ||
//       validateTokenLoading ||
//       signUpLoading
//     )
//       setLoading(true);
//     else setLoading(false);
//   }, [signInLoading, getUserLoading, validateTokenLoading, signUpLoading]);

//   // FUNÇAO DE LOGAR
//   async function userLogin(username, password) {
//     setError(null);
//     try {
//       const { token } = await signIn({
//         username: username,
//         password: password,
//       });
//       localStorage.setItem("token", token);
//       setLogin(true);
//       getUserData(token);
//       navigate("/account");
//     } catch (err) {
//       setError("Usuário e senha incompatíveis!");
//       console.log(err);
//       console.log("Não foi possível fazer o login!");
//     }
//   }
//   async function userSignup(username, email, password) {
//     setError(null);
//     try {
//       await signUp({
//         username,
//         email,
//         password,
//       });
//       userLogin(username, password);
//     } catch (err) {
//       console.log(err);
//       setError(err.data.message);
//     }
//   }
//   return (
//     <UserContext.Provider
//       value={{ userLogin, userSignup, userLogout, loading, data, error, login }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// }

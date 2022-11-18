import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

export default function ProtectedRoute({ children }: any) {
  const { login }: any = useContext(UserContext);
  return login ? children : <Navigate to="/login" />;
}

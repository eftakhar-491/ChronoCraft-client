import React, { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import { Navigate } from "react-router-dom";

export default function AuthProtect({ children }) {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/" />;
  }
  if (!user) {
    return children;
  }
}

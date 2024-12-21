import React from "react";
import "./components/style.css";
import { Outlet } from "react-router-dom";
import AuthProvider from "./Firebase/AuthProvider";

export default function App() {
  return (
    <>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </>
  );
}

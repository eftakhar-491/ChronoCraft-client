import React from "react";
import "./components/style.css";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

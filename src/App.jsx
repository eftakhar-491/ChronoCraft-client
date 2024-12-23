import React, { useState } from "react";
import "./components/style.css";
import { Outlet } from "react-router-dom";
import AuthProvider from "./Firebase/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StateContext from "./context/StateContext";
const queryClient = new QueryClient();
export default function App() {
  const [detailsId, setDetailsId] = useState("");
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StateContext.Provider value={{ detailsId, setDetailsId }}>
          <AuthProvider>
            <Outlet />
          </AuthProvider>
        </StateContext.Provider>
      </QueryClientProvider>
    </>
  );
}

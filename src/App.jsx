import React from "react";
import "./components/style.css";
import { Outlet } from "react-router-dom";
import AuthProvider from "./Firebase/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

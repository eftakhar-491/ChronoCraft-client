import { AuthContext } from "../../Firebase/AuthProvider";
import React, { useContext, useEffect } from "react";
import world from "../../assets/lottie/world.json";
import bg from "../../assets/bg.png";
import Lottie from "lottie-react";
import Nav from "../Header/Nav";
import { Navigate } from "react-router-dom";

export default function ComProtect({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <section
        style={{ backgroundImage: ` url(${bg})` }}
        className="fixed  h-screen w-full bg-cover bg-center bg-no-repeat"
      >
        <div className=" w-[600px] mx-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Lottie animationData={world} loop={true}></Lottie>
        </div>
        <div className="fixed overflow-y-auto  w-screen backdrop-blur-lg bg-[#3FAEBB]/5 h-screen">
          <Nav />
          <div className="text-white">loading...</div>
        </div>
      </section>
    );
  }
  if (!user) return <Navigate to="/login" />;
  if (user) {
    return children;
  }
}

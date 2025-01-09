import React from "react";
import bg from "../../assets/bg.png";
import Lottie from "lottie-react";
import world from "../../assets/lottie/world.json";

export default function Background({ children }) {
  return (
    <section
      style={{ backgroundImage: ` url(${bg})` }}
      className="fixed  h-screen w-full bg-cover bg-center bg-no-repeat"
    >
      <div className=" w-[600px] mx-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Lottie animationData={world} loop={true}></Lottie>
      </div>
      {children}
    </section>
  );
}

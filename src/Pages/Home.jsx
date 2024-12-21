import React from "react";
import Header from "../components/Header/Header";
import Featured from "../components/Featured";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
      <div className="max-w-[1600px] mx-auto ">
        <Header />
        <Featured />
        <Gallery />
        <Reviews />
      </div>
    </>
  );
}

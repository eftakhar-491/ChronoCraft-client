import React from "react";
import Header from "../components/Header/Header";
import Featured from "../components/Featured";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";

import UpcomingEvents from "../components/UpcomingEvents";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="">
        <Header />
        <Featured />
        <Gallery />
        <UpcomingEvents />
        <Reviews />
        <Footer />
      </div>
    </>
  );
}

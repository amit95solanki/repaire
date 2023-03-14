import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { HomeHeader } from "../Home/HomeHeader";
import About from "../../common/About";
import Banner from "../../Banner/Banner";
import { Clientreviw } from "../../Component/Clientreviw";
import { Team } from "../../common/Team";
import { Footer } from "../../Component/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <About />
      <Banner />
      <Clientreviw />
      <Team />
      <Footer />
    </>
  );
};

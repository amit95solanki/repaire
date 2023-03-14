import React from "react";
import About from "../common/About";
import { Team } from "../common/Team";
import { AboutHeader } from "../Component/AboutHeader";
import { Clientreviw } from "../Component/Clientreviw";
import { Footer } from "../Component/Footer";
import Navbar from "../Component/Navbar/Navbar";

export const Abouts = () => {
  return (
    <>
      <Navbar />
      <AboutHeader />
      <About />
      <Clientreviw />
      <Team />
      <Footer />
    </>
  );
};

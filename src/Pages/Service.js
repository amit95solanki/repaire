import React from "react";
import { ServiceHeader } from "../Component/ServiceHeader";
import { Product } from "../Component/Product";
import { Footer } from "../Component/Footer";
import Navbar from "../Component/Navbar/Navbar";
export const Service = () => {
  return (
    <>
      <Navbar />
      <ServiceHeader />
      <Product />
      <Footer />
    </>
  );
};

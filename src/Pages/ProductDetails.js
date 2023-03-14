import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { ProductDetailHeader } from "../Component/ProductDetailHeader";
import { ProductDetailsMain } from "../Component/ProductDetailsMain";

export const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <ProductDetailHeader />
      <ProductDetailsMain />
    </>
  );
};

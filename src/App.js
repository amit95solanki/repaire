import React from "react";
import { Routes, Route } from "react-router-dom";
import Notification from "./Dashboard/Notification";
import Setting from "./Dashboard/Setting";
import Dashboard from "./Dashboard/Sidebar";
import { Abouts } from "./Pages/Abouts";
import { Home } from "./Pages/Home/Home";
import { ProductDetails } from "./Pages/ProductDetails";
import { Service } from "./Pages/Service";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/dasboard" element={<Dashboard />} />
        <Route path="n" element={<Notification />} />
        <Route path="s" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;

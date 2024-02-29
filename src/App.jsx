/* eslint-disable no-unused-vars */
import React from "react";

import { Link, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <nav className="w-full flex justify-center items-center py-10 gap-12 border mb-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/cart"}>Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

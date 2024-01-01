import React from "react";
import { useState, useContext } from "react";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Cart from "./Pages/Cart";
import ProductContext from "./context/ProductContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addItem = (product) => {
    setCart([...cart, product]);
    alert("Item Added to Cart");
  };

  const RemoveCart = (product) => {
    const newval = cart.filter((item) => item.id !== product.id);
    setCart(newval);
    alert("Item Removed");
  };

  return (
    <>
      <ProductContext.Provider
        value={{ products, setProducts, cart, addItem, RemoveCart }}
      >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductContext.Provider>
    </>
  );
};

export default App;

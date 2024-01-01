import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import { useContext } from "react";
const NavBar = () => {
  const { setProducts, cart } = useContext(ProductContext);
  let [val, setVal] = useState(" ");

  const Handlechange = (e) => {
    setVal(e.target.value);
  };
  const value = async () => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${val}`);
    const data = await res.json();
    setProducts(data.products);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... flex justify-evenly items-center py-4 shadow-md">
        <h3 className="font-extrabold text-3xl">Ecomify</h3>
        <div>
          <input
            placeholder="search Bro"
            type="search"
            name=""
            id=""
            onChange={Handlechange}
            className="w-[40vw] outline-none border-2 px-3 py-1"
          />
          <button onClick={value} className="bg-gray-500 px-3 py-1 text-white ">
            Search{" "}
          </button>
        </div>
        <ul className="flex list-none">
          <Link to="/" className="mr-4 font-bold">
            Home
          </Link>
          <Link to="/cart" className="ml-4 font-bold">
            cart {!cart.length ? "" : cart.length}
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;

import React from "react";
import ProductContext from "../context/ProductContext";
import { useContext } from "react";
const Cart = () => {
  const { cart, RemoveCart } = useContext(ProductContext);

  return (
    <div>
      <div class="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {cart.map((product) => {
          return (
            <>
              <div class="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[200px]">
                <img
                  src={product.thumbnail}
                  alt="AirMax Pro"
                  class="z-0 h-full w-full rounded-md object-cover"
                />
                <div class="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div class="absolute bottom-4 left-4 text-left">
                  <h1 class="text-lg font-semibold text-white">
                    {product.title}
                  </h1>
                  <p class="mt-2 text-sm text-gray-300">
                    {product.description}
                  </p>
                  <p className="text-lg font-semibold text-white">
                    price : <span>${product.price}</span>
                  </p>
                  <button
                    onClick={() => RemoveCart(product)}
                    class="mt-2  inline-flex cursor-pointer items-center text-sm font-semibold text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;

/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../store/cartReducer";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="w-full flex items-center justify-center flex-col font-[Poppins]">
      <h1 className="text-5xl font-[Poppins] font-bold mb-4">Cart Page</h1>
      <div className="banner w-full flex justify-center items-center gap-12 p-4 bg-green-200">
        {cart && cart.length > 0 ? (
          <>
            <h1 className="text-lg font-light">
              Total Products : <span className="font-bold">{cart.length}</span>
            </h1>
            <h1 className="text-lg font-light">
              Total Cost :{" "}
              <span className="font-bold">
                {cart.reduce((acc, p) => acc + p.price, 0).toFixed(2)} $
              </span>
            </h1>
          </>
        ) : (
          <h1 className="text-lg font-light">Cart is Empty</h1>
        )}
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 p-10">
        {cart &&
          cart.map((p, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between border p-2"
            >
              <Link
                to={`/details/${p.id}`}
                className="card flex flex-1 flex-col justify-center items-center px-8 bg-white cursor-pointer"
              >
                <div className="img-container w-[80%] h-[80%]">
                  <img
                    className="w-full h-full object-contain"
                    src={p.image}
                    alt="product"
                  />
                </div>
                <div className="title w-full h-[20%] py-2">
                  {p.title.length > 35 ? p.title.slice(0, 35) + "..." : p.title}
                </div>
              </Link>
              <button
                onClick={() => handleRemoveFromCart(p.id)}
                className="mt-2 px-4 py-2 border-[1px] border-red-600 bg-red-600 rounded text-white w-[70%]"
              >
                remove
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;

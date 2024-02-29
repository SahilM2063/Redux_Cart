/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartReducer";

const Details = () => {
  const [product, setProduct] = useState("");
  const { products } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const { id } = useParams();

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const isInCart = cart.some((item) => item.id == id);

  useEffect(() => {
    setProduct(products.filter((p) => p.id == id)[0]);
  }, []);
  return (
    <>
      {product ? (
        <div className="w-full h-full flex flex-col justify-center items-center font-[Poppins]">
          <Link
            to={"/"}
            className="text-lg text-left w-[50%] hover:text-blue-500 mb-4"
          >
            Home
          </Link>
          <div className="product-details w-[50%] flex justify-between items-center gap-8 p-8 border-[1px] rounded">
            <img
              className="min-w-[30%] max-w-[26%] object-contain"
              src={product.image}
              alt="product"
            />
            <div className="content flex flex-col justify-start items-start gap-4">
              <h1 className="text-2xl font-bold">{product.title}</h1>
              <h3 className="text-sm text-gray-400">{product.category}</h3>
              <h4 className="text-lg font-semibold opacity-80">
                $ {product.price}
              </h4>
              <p className="text-sm text-gray-600">{product.description}</p>
              <span>{product.qty}</span>
              <div className="btn-group flex gap-2">
                {isInCart ? (
                  <Link
                    onClick={() => handleRemoveFromCart(product.id)}
                    className="px-4 py-2 border-[1px] border-red-600 bg-red-600 rounded text-white "
                  >
                    Remove from cart
                  </Link>
                ) : (
                  <Link
                    onClick={() => handleAddToCart(product)}
                    className="px-4 py-2 border-[1px] border-green-600 bg-green-600 rounded text-white "
                  >
                    Add to cart
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
      ;
    </>
  );
};

export default Details;

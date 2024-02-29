/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  // console.log(products);

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1 className="text-5xl font-[Poppins] font-bold">Products Page</h1>
      <div className="w-full grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 p-10">
        {products &&
          products.map((p, index) => (
            <Link
              key={index}
              to={`/details/${p.id}`}
              className="group card flex flex-col justify-between items-center px-8 py-2 bg-white border-[1px] cursor-pointer hover:shadow-lg transition-all"
            >
              <div className="img-container flex-1 w-[80%] h-[60%] ">
                <img
                  className="w-full h-full object-contain group-hover:scale-90 transition-all"
                  src={p.image}
                  alt="product"
                />
              </div>
              <div className="title w-full h-[20%] py-2">
                {p.title.length > 40 ? p.title.slice(0, 40) + "..." : p.title}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Products;

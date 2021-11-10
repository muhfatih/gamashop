import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { currencyFormatter } from "src/core/utils/formatter";

const ProductOverview = (props) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => {
      const currentCount = count - 1;
      if (currentCount < 0) {
        return 0;
      } else {
        return count - 1;
      }
    });
  };


  const addToCart = () => {
    const previousArray = JSON.parse(window.localStorage.getItem("cart")) || [];
    const newItem = { ...props.productDetail, amount: count }
    const arrayCart = [...previousArray, newItem];
    window.localStorage.setItem("cart", JSON.stringify(arrayCart));
  }

  return (
    <div >
      <h2 className="text-3xl font-semibold">{props.name}</h2>
      <div className="bg-gray-100 rounded-md">
        <h2 className="py-4 mt-6 mb-16 text-4xl font-semibold pl-7" style={{
          background: "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
          "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"
        }}>{currencyFormatter.format(props.price).split('.')[0]}</h2>
      </div>

      <div className="flex">
        <button onClick={decrement}
          className="p-2 bg-transparent border-2 border-gray-400 rounded-xl">
          <FaMinus size={42} className="text-xl text-gray-400" />
        </button>
        <h2 className="mt-3 text-4xl font-semibold text-black mx-7">{count}</h2>
        <button onClick={increment}
          className="p-2 mr-8 bg-transparent border-2 border-gray-400 rounded-xl" >
          <FaPlus size={42} className="text-xl text-gray-400 " />
        </button>
        <button
          onClick={addToCart}
          className="py-2 text-xl font-bold text-white rounded-xl px-14"
          style={{
            background:
              "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
          }}>
          Add to cart
        </button>
        <div className="flex-col ml-7">
          <h4 className="mb-1 text-xl text-gray-400">Available:</h4>
          <h4 className="text-xl font-semibold text-gray-400">{props.amount_stock}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;

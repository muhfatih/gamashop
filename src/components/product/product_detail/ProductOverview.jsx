import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductOverview = (props) => {
  const [count, setCount] = useState(0);

  const tambah = () => {
    setCount((count) => count + 1);
  };

  onclick={tambah}

  return (
    <div>
      <h2 className="text-3xl font-semibold">{props.name}</h2>
      <div className="bg-gray-100 rounded-md">
        <h2
          className="py-4 mt-6 mb-16 text-4xl font-semibold pl-7"
          style={{
            background: "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        >
          {props.price}
        </h2>
      </div>

      <div className="flex">
        <button className="p-4 bg-transparent border-2 border-gray-400 rounded-xl">
          <FaMinus size={42} className="text-xl text-gray-400 " />
        </button>
        <h2 className="mt-5 text-xl text-4xl font-semibold text-black mx-7">
          {count}
        </h2>
        <button className="p-4 mr-8 bg-transparent border-2 border-gray-400 rounded-xl">
          <FaPlus
            size={42}
            className="text-xl text-gray-400 "
            onClick={tambah}
          />
        </button>
        <button
          className="py-4 text-4xl font-bold text-white rounded-xl px-14"
          style={{
            background: "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
          }}
        >
          BUY
        </button>
        <div className="flex-col ml-7">
          <h4 className="mb-1 text-xl text-gray-400">Available:</h4>
          <h4 className="text-xl font-semibold text-gray-400">
            {props.amount_stock}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;

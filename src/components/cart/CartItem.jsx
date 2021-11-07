import React, { useState } from "react";
import { FaRegTrashAlt, FaMinus, FaPlus } from "react-icons/fa";

import FreeShipping from "./../../images/FreeShipping.png";

const CartItem = ({ image, itemCount, name, price, productDetail }) => {
  const [count, setCount] = useState(itemCount);
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

  const deleteItem = () => {
    const items = window.localStorage;
  };

  const currencyFormatter = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <div className="flex justify-between p-4 mt-4 bg-white border rounded-md">
      {/* kiri */}
      <div className="flex bg-red-400">
        <img
          src={FreeShipping}
          alt="product image"
          style={{ width: 100, height: 100 }}
        />

        <div className="flex-col ml-4">
          <h4 className="text-xl font-medium">{name}</h4>
          <h5>{currencyFormatter.format(price)}</h5>
        </div>
      </div>

      <div className="flex self-end bg-yellow-500">
        <button
          onClick={decrement}
          className="p-2 ml-4 bg-transparent border-2 border-gray-400 rounded-xl"
        >
          <FaMinus size={14} className="text-xl text-gray-400" />
        </button>
        <h4 className="self-center mx-4">{count}</h4>
        <button
          onClick={increment}
          className="p-2 bg-transparent border-2 border-gray-400 rounded-xl"
        >
          <FaPlus size={14} className="text-xl text-gray-400 " />
        </button>

        {/* <button className="p-2 bg-transparent" onClick={deleteItem}>
          <FaRegTrashAlt className="self-end " />
        </button> */}
        {/* <h2>Jumlah: {itemCount}</h2> */}
      </div>
    </div>
  );
};

export default CartItem;

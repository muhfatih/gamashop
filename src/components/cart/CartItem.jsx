import React, { useState } from "react";
import { FaRegTrashAlt, FaMinus, FaPlus, FaCheck } from "react-icons/fa";
import { currencyFormatter } from "src/core/utils/formatter";

const CartItem = ({
  index,
  image,
  itemCount,
  name,
  price,
  isChecked,
  productDetail,
  toggleCheck,
  increment,
  decrement,
}) => {
  //   const [count, setCount] = useState(itemCount);

  const deleteItem = () => {
    const items = window.localStorage;
  };

  return (
    <div
      className="flex justify-between p-4 mt-4 bg-white border rounded-xl"
      onClick={() => console.log("test")}
    >
      {/* kiri */}
      <div className="flex">
        {/* button centang */}
        <div className="flex">
          <button
            className="p-2 my-auto bg-transparent border-2 border-gray-400 rounded-xl"
            onClick={() => {
              toggleCheck(index);
            }}
          >
            <FaCheck
              size={14}
              className={
                "text-xl " + (isChecked ? " text-gray-400" : " text-white")
              }
            />
          </button>
        </div>
        <img
          className="ml-4"
          src={image}
          alt="product image"
          style={{ width: 100, height: 100 }}
        />
        <div className="flex-col ml-4">
          <h4 className="text-lg font-semibold">{name}</h4>
          <h5>{currencyFormatter.format(price).split('.')[0]}</h5>
        </div>
      </div>

      <div className="flex self-end ">
        <button
          onClick={() => decrement(index)}
          className="p-2 ml-4 bg-transparent border-2 border-gray-400 rounded-xl"
        >
          <FaMinus size={14} className="text-xl text-gray-400" />
        </button>
        <h4 className="self-center mx-4">{itemCount}</h4>
        <button
          onClick={() => increment(index)}
          className="p-2 bg-transparent border-2 border-gray-400 rounded-xl"
        >
          <FaPlus size={14} className="text-xl text-gray-400 " />
        </button>

        {/* delete item */}
        {/* <button className="p-2 bg-transparent" onClick={deleteItem}>
          <FaRegTrashAlt className="self-end " />
        </button>
        <h2>Jumlah: {itemCount}</h2> */}
      </div>
    </div>
  );
};

export default CartItem;

import React, { useState } from "react";
import MainLayout from "src/components/_layouts/MainLayout";
import CartItem from "src/components/cart/CartItem";
import { useEffect } from "react/cjs/react.development";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price * item.amount;
  });

  const getCartFromLocalStorage = () => {
    return JSON.parse(window.localStorage.getItem("cart"));
  };

  useEffect(() => {
    const items = getCartFromLocalStorage();
    setCartItems(items);
  }, []);

  const currencyFormatter = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <MainLayout className="flex mx-20 mt-5">
      {/* barang */}
      <div className="p-6 bg-gray-200 w-full">
        <h1 className="text-xl font-bold">Cart</h1>
        {cartItems.map((element, i) => (
          <CartItem
            key={i}
            image={element.images[0]}
            itemCount={element.amount}
            name={element.name}
            price={element.price}
            productDetail={element}
          />
        ))}
      </div>

      {/* harga */}
      <div
        className="justify-around p-4 ml-10 bg-red-300 "
        style={{ width: 400 }}
      >
        <div className="flex">
          <h3>Total harga</h3>
          <h3>{currencyFormatter.format(totalPrice)}</h3>
        </div>
        <button
          className="py-4 text-xl font-bold text-white rounded-xl px-14"
          style={{
            background: "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
          }}
        >
          Checkout
        </button>
      </div>
    </MainLayout>
  );
};

export default Cart;

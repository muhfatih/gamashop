import React, { useState } from "react";
import MainLayout from "src/components/_layouts/MainLayout";
import CartItem from "src/components/cart/CartItem";
import { useEffect } from "react/cjs/react.development";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [prices, setPrices] = useState(0);

  useEffect(() => {
    let totalPrice = 0;

    console.log(cartItems);

    cartItems.forEach((item) => {
      if (item.isChecked == true) totalPrice += item.price * item.amount;
    });

    setPrices(totalPrice);
  }, [cartItems]);

  const getCartFromLocalStorage = () => {
    return JSON.parse(window.localStorage.getItem("cart"));
  };

  useEffect(() => {
    let items = getCartFromLocalStorage();
    if (items === null) items = [];
    let items2 = [];

    // menambahkan tag isCheked
    items.forEach((item, i) => {
      items2[i] = {
        ...item,
        isChecked: false,
      };
    });

    console.log(items2);

    setCartItems(items2);
  }, []);

  const currencyFormatter = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const checkItem = (idx) => {
    console.log("clicked si -", idx);

    let temp = cartItems;
    let newCart = [];

    temp.forEach((item, i) => {
      if (i !== idx) {
        newCart[i] = item;
      } else {
        if (item.isChecked) {
          newCart[i] = {
            ...item,
            isChecked: false,
          };
        } else {
          newCart[i] = {
            ...item,
            isChecked: true,
          };
        }
      }
    });

    setCartItems(newCart);
  };

  const increment = (idx) => {
    console.log("increament", idx);

    let temp = cartItems;
    let newCart = [];

    temp.forEach((item, i) => {
      if (i === idx) {
        let now = item.amount + 1;
        newCart[i] = { ...item, amount: now };
        console.log(newCart[i].amount);
      } else {
        newCart[i] = item;
      }
    });

    setCartItems(newCart);
  };

  const decrement = (idx) => {
    console.log("decrement", idx);

    let temp = cartItems;
    let newCart = [];

    temp.forEach((item, i) => {
      if (i === idx) {
        let now = item.amount - 1;
        if (now < 0) now = 0;
        newCart[i] = { ...item, amount: now };
        console.log(newCart[i].amount);
      } else {
        newCart[i] = item;
      }
    });

    setCartItems(newCart);
  };

  const saveToCheckout = () => {
    const toCheckout = [];

    cartItems.forEach((item, idx) => {
      if (item.isChecked === true) {
        toCheckout.push(item);
      }
    });

    window.localStorage.setItem("checkout", JSON.stringify(toCheckout));
    window.location.href = "/checkout";
  };

  return (
    <MainLayout className="flex mx-20 mt-5">
      {/* barang */}
      <div className="w-full p-6 bg-gray-100">
        <h1 className="text-xl font-bold">Cart</h1>
        {cartItems.map((element, i) => (
          <CartItem
            key={i}
            index={i}
            image={element.images[0]}
            itemCount={element.amount}
            name={element.name}
            price={element.price}
            isChecked={element.isChecked}
            productDetail={element}
            toggleCheck={checkItem}
            increment={increment}
            decrement={decrement}
          />
        ))}
      </div>

      {/* harga */}
      <div className="p-4 mx-auto ml-10 h-96" style={{ width: 440 }}>
        <div className="flex flex-col h-40 p-4 border rounded-xl">
          <div className="flex justify-between font-bold text-gray-900">
            <h3>Total harga</h3>
            <h3>{currencyFormatter.format(prices)}</h3>
          </div>
          <button
            className="py-2 mt-4 text-xl font-bold text-white rounded-xl px-14"
            style={{
              background: "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
            }}
            onClick={() => saveToCheckout()}
          >
            Checkout
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;

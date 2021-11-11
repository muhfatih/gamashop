import React, { useState, useEffect } from "react";
import Waifu from "../../images/waifu.jpg";

const CheckoutItem = () => {
  const [checkoutItems, setcheckoutItems] = useState([]);

  const getCartFromLocalStorage = () => {
    return JSON.parse(window.localStorage.getItem("checkout"));
  };

  useEffect(() => {
    let items = getCartFromLocalStorage();
    if (items === null) items = [];

    setcheckoutItems(items);
  }, []);

  useEffect(() => {
    console.log(checkoutItems);
  }, [checkoutItems]);

  return (
    <div className="py-4 mt-6 ">
      {console.log(checkoutItems)}
      {checkoutItems.map((item, index) => (
        <div className="flex justify-between p-4 my-4 bg-white border rounded-xl">
          {/*  */}
          <div className="flex">
            <img
              src={Waifu}
              alt="product image"
              style={{ width: 100, height: 100 }}
            />

            <div className="flex-col ml-4">
              <h4 className="text-lg font-semibold">{item.name}</h4>
              <div className="flex-col mt-6 text-gray-300">
                <h5>Size : ...</h5>
                <h5>Color :</h5>
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-red-300 w-28">
            <h4 className="text-lg font-semibold">{item.amount} Items</h4>
          </div>

          <h4
            className="col-span-1 text-lg font-semibold"
            style={{
              background: "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            IDR {item.price * item.amount}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default CheckoutItem;

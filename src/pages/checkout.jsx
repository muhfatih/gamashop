import React, { useState } from "react";
import CheckoutItem from "src/components/checkout/CheckoutItem";
import MainLayout from "src/components/_layouts/MainLayout";

const Checkout = () => {
  return (
    <MainLayout>
      {/* Title */}
      <div className="mx-20">
        <div className="mt-10 text-xl font-bold">
          <h2 className="text-center">Checkout</h2>
        </div>
        {/* Items */}
        <div className="px-4 py-4 mt-6">
          <CheckoutItem />
        </div>
        <div className="flex justify-between ">
          {/* Address */}
          <div className="flex-grow ">
            <div className="flex my-6 ml-5">
              <h2 className="mt-2 mr-4 text-xl font-bold">Address</h2>
              <textarea
                className="p-2 border"
                rows="6"
                cols="30"
                placeholder="Masukkan alamat Anda disini.."
              />
            </div>
          </div>

          <div className="justify-end flex-grow pt-5 pr-6">
            {/* Kurir */}
            <div className="flex justify-between">
              <div className="pt-1 ">
                <input
                  className="mr-3"
                  type="radio"
                  value="Silambat Express"
                  name="Silambat Express"
                  id="radio1"
                />
                <label for="radio1">SilambatExpress</label>
              </div>
              <h3
                className="text-2xl font-semibold"
                style={{
                  background:
                    "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                IDR 400.000
              </h3>
            </div>

            {/* Total harga */}
            <div className="flex justify-end mt-16">
              <h2 className="mr-4 text-xl font-bold ">Total</h2>
              <h3
                className="text-2xl font-semibold"
                style={{
                  background:
                    "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                IDR 400.000
              </h3>
            </div>
            <div className="flex justify-end">
              <button
                className="py-2 mt-4 text-xl font-bold text-white rounded-xl px-14"
                style={{
                  background:
                    "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
                }}
                onClick={() => {}}
              >
                Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Checkout;

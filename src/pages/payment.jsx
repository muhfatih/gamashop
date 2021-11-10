import React, { useState } from "react";
import MainLayout from "src/components/_layouts/MainLayout";
import { currencyFormatter } from "src/core/utils/formatter";

const Payment = () => {
  const tagihan = 500000;
  const [saldo, setSaldo] = useState(2000000000);
  const [success, setSuccess] = useState(false);

  const bayarSKRG = () => {
    setSuccess(true);
    setSaldo(saldo - tagihan);
  };

  return (
    <MainLayout>
      <div className="container w-full p-10 mt-24 mb-12 bg-white border border-gray-400 rounded-xl flex-bc">
        <div className="gap-8 flex-cc">
          <img src="/img/ovo.png" alt="" className="" />
          <div className="gap-2 flex-cs col">
            <p className="text-xl">Saldo saat ini</p>
            <p className="text-4xl font-bold " style={{ color: "#4A348F9C" }}>
              {currencyFormatter.format(saldo).split(".")[0]}
            </p>
          </div>
        </div>
        <div className="">
          <img src="/img/topup.icon.svg" alt="" className="" />
        </div>
      </div>
      {success && (
        <div className="w-full flex-cc" style={{ marginBottom: 100 }}>
          <img src="/img/thx.png" alt="" className="" />
        </div>
      )}
      <div
        className="container w-full p-10 bg-white border border-gray-400 rounded-xl flex-bc"
        style={{ marginBottom: 80 }}
      >
        <div className="flex-cs col">
          <p className="mb-4 text-4xl font-bold">Tagihan</p>
          <p className="text-5xl font-bold" style={{ color: "#4A348F" }}>
            {currencyFormatter.format(tagihan).split(".")[0]}
          </p>
        </div>
        <div className="">
          {success ? (
            <p className="mb-4 text-4xl font-bold">Terbayar</p>
          ) : (
            <button
              onClick={bayarSKRG}
              className="px-4 py-3 text-2xl font-bold text-white rounded-xl btn-main gradient-main"
            >
              Bayar
            </button>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Payment;

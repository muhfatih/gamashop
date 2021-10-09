import React from "react";
import TrendingProducts from "../components/home/TrendingProducts";
import MainLayout from "./../components/_layouts/MainLayout";

import FreeShipping from "./../images/FreeShipping.png";
import FullSupport from "./../images/FullSupport.png";
import SafeTransaction from "./../images/SafeTransaction.png";

const index = () => {
  return (
    <MainLayout className="">
      <div className="container h-full px-32">
        {/* banner */}
        <div id="banners" className="grid grid-cols-10 mt-14 gap-x-6">
          <div
            className="col-span-7 bg-purple-400 rounded-xl"
            id="leftbanner"
          />

          <div className="col-span-3 rounded-xl" id="rightbanner">
            <div className="h-24 bg-yellow-500 rounded-xl" />
            <div className="h-24 mt-6 bg-red-500 rounded-xl" />
          </div>
        </div>

        {/* Benefit */}
        <div
          className="flex justify-between w-full mt-12 gap-x-40"
          id="benefits"
        >
          <img src={FreeShipping} alt="FreeShipping" className="w-full" />
          <img src={FullSupport} alt="FullSupport" className="w-full" />
          <img src={SafeTransaction} alt="SafeTransaction" className="w-full" />
        </div>

        <TrendingProducts />
      </div>
    </MainLayout>
  );
};

export default index;

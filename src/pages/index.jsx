import React from "react";
import TrendingProducts from "../components/home/TrendingProducts";
import MainLayout from "./../components/_layouts/MainLayout";

const index = () => {
  return (
    <MainLayout className="">
      <div className="container h-full px-32">
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
        {/* <TrendingProducts /> */}
      </div>
    </MainLayout>
  );
};

export default index;

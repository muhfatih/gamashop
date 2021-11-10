import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import CategorizedItem from "../index/CategorizedItem";


const ExploreCategories = () => {
  return (
    <div className="my-14">
      {/* Category Title */}
      <div className="flex content-center justify-between align-middle">
        <p className="text-2xl font-semibold">Explore Categories</p>
        <h6 className="">
          See More <BsArrowRight className="inline" />
        </h6>
      </div>
      <div className="w-full mt-2 bg-gray-400 mb-7" style={{ height: "2px" }} />

      <div>
        {list.map((item) => (
          <CategorizedItem
            name={item.name}
            url={item.url}
            href={item.href}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;

const list = [
  {
    name: "Books",
    url: "https://gamaxios.herokuapp.com/product?category=books&amount=4",
    href: "",
    imageUrl: "https://sevima.com/wp-content/uploads/2020/02/Buku-ajar.jpg",
  },
  {
    name: "Attributes",
    url: "https://gamaxios.herokuapp.com/product?category=attributes&amount=4",
    href: "",
    imageUrl:
      "http://www.bulaksumurugm.com/wp-content/uploads/2017/08/ppsmb-palapa-3-arif-wahyu.jpg",
  },
  {
    name: "Household",
    url: "https://gamaxios.herokuapp.com/product?category=households&amount=4",
    href: "",
    imageUrl:
      "https://www.tuv.com/content-media-files/master-content/services/products/0177-tuv-rheinland-household-goods/tuv-rheinland-household-goods-st-185801171_core_2_2_1.jpg",
  },
];

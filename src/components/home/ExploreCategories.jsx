import React, { useState, useEffect } from "react";
import { GET_LIST_BY_CATEGORY_PRODUCT } from "../../api.documentation";
import { BsArrowRight } from "react-icons/bs";
import Love from "./../../images/LoveIcon.svg";
import Star from "./../../images/StarIcon.svg";
import CateygoriedItem from "./CateygoriedItem";

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
        <CateygoriedItem category="book" />
        <div className="mt-12 " />
        <CateygoriedItem category="attribute" />
        <div className="mt-12 " />
        <CateygoriedItem category="household" />
      </div>
    </div>
  );
};

export default ExploreCategories;

import React, { useState, useEffect } from "react";
import { GET_LIST_TRENDING_PRODUCT } from "../../api.documentation";
import { BsArrowRight } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";
import CardItems from "../index/CardItems";

const TrendingAndNewProducts = ({ name, url }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await axios
        .get(url)
        .then(function (response) {
          console.log("Sukses woyyy");
          // console.log(response.data);

          // let data = ;

          setProductList(response.data.splice(0, 4));
        })
        .catch(function (error) {
          console.log("gagal bang");
          console.log(error);
        })
        .then(function () {
          console.log("im here");
        });

      console.log("woyyy please");
      // console.log(data);
    })();
  }, []);

  useEffect(() => {
    console.log(productList);
  }, [productList]);

  return (
    <div className="my-14">
      {/* Category Title */}
      <div className="flex content-center justify-between align-middle">
        <p className="text-2xl font-semibold">{name}</p>
        <h6 className="">
          See More <BsArrowRight className="inline" />
        </h6>
      </div>
      <div className="w-full mt-2 bg-gray-400 mb-7" style={{ height: "2px" }} />

      <div className="grid grid-cols-4 gap-x-5">
        {/* grid */}
        {productList.map((item, index) => (
          <CardItems item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TrendingAndNewProducts;

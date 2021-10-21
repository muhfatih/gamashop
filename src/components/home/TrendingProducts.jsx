import React, { useState, useEffect } from "react";
import { GET_LIST_TRENDING_PRODUCT } from "../../api.documentation";
import { BsArrowRight } from "react-icons/bs";
import Love from "./../../images/LoveIcon.svg";
import Star from "./../../images/StarIcon.svg";
import axios from "axios";

const TrendingProducts = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      // const data = await GET_LIST_TRENDING_PRODUCT().then(
      //   (res) => res.data.body
      // );

      const data = await axios
        .get("https://pokeapi.co/api/v2/pokemon/1")
        .then((res) => {
          console.log("berhasil");
          console.log(res.data);
          return res.data;
        })
        .catch((res) => {
          console.log("gagal");
          console.log(res);
        });
      setProductList(data);
      console.log(data);
    })();
  }, []);

  console.log(productList);

  return (
    <div className="my-14">
      {/* Category Title */}
      <div className="flex content-center justify-between align-middle">
        <p className="text-2xl font-semibold">TRENDING</p>
        <h6 className="">
          See More <BsArrowRight className="inline" />
        </h6>
      </div>
      <div className="w-full mt-2 bg-gray-400 mb-7" style={{ height: "2px" }} />

      <div className="grid grid-cols-4 gap-x-5">{/* grid */}</div>
    </div>
  );
};

export default TrendingProducts;

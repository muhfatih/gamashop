import React, { useState, useEffect } from "react";
import Love from "./../../images/LoveIcon.svg";
import Star from "./../../images/StarIcon.svg";
import axios from "axios";

import topUpperCase from "../home/toUpperCase";
import CardItems from "./CardItems";

function CategorizedItem({ name, url, href, imageUrl }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await axios
        .get(url)
        .then(function (response) {
          console.log("Sukses woyyy");

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
    })();
  }, []);

  useEffect(() => { }, [productList]);

  return (
    <div className="mb-6">
      <div className="grid grid-cols-4 gap-x-5">
        {/* category */}
        <div
          className="relative px-3 py-4 bg-cover rounded-lg"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(000, 000, 000, 0), rgba(000, 000, 000, 0.6)), url(${imageUrl})`,
            height: "340px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="absolute left-4 right-4 bottom-6">
            <h4 className="text-4xl font-bold text-white">
              {topUpperCase(name)}
            </h4>
            <button className="w-full py-2 mt-5 font-bold text-white border-2 border-white rounded-md">
              See all
            </button>
          </div>
        </div>

        {/* item */}
        {productList.map((item, index) => {
          return index < 3 ? <CardItems item={item} index={index} /> : "";
        })}
      </div>
    </div>
  );
}

export default CategorizedItem;

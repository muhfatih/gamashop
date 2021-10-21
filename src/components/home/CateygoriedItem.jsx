import React, { useState, useEffect } from "react";
import { GET_LIST_BY_CATEGORY_PRODUCT } from "../../api.documentation";
import { BsArrowRight } from "react-icons/bs";
import Love from "./../../images/LoveIcon.svg";
import Star from "./../../images/StarIcon.svg";

import topUpperCase from "./toUpperCase";

function CateygoriedItem({ category }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // console.log(category);

    if (category === "book") {
      // console.log("benar woyy");
      (async () => {
        const data = await GET_LIST_BY_CATEGORY_PRODUCT("book").then(
          (res) => res.data.body
        );
        setProductList(data);
      })();
    } else if (category === "attribute") {
      // console.log("benar woyy");
      (async () => {
        const data = await GET_LIST_BY_CATEGORY_PRODUCT("book").then(
          (res) => res.data.body
        );
        setProductList(data);
      })();
    } else if (category === "household") {
      // console.log("benar woyy");
      (async () => {
        const data = await GET_LIST_BY_CATEGORY_PRODUCT("book").then(
          (res) => res.data.body
        );
        setProductList(data);
      })();
    }
  }, []);

  useEffect(() => {
    // console.log("dalam use effect");
    // console.log(productList);
  }, [productList]);

  let imgUrl;
  if (category === "book") {
    imgUrl = "https://sevima.com/wp-content/uploads/2020/02/Buku-ajar.jpg";
  } else if (category === "attribute") {
    imgUrl =
      "https://scontent.fcgk3-1.fna.fbcdn.net/v/t31.18172-8/460713_358305054292449_599340896_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEaaZPhhz7OT3tQ8KiFz2tcEJHVWRcLywoQkdVZFwvLCnPTCQNJIBhFwAp5JnH8VwtuLbYDdMN47p3-NwftUT_m&_nc_ohc=GX4nmF4P-rQAX-MamUb&_nc_ht=scontent.fcgk3-1.fna&oh=750d8c897e8e2900bf4bbdf58daaf958&oe=61862704";
  } else if (category === "household") {
    imgUrl =
      "https://www.tuv.com/content-media-files/master-content/services/products/0177-tuv-rheinland-household-goods/tuv-rheinland-household-goods-st-185801171_core_2_2_1.jpg";
  }
  return (
    <div className="grid grid-cols-4 gap-x-5">
      {/* category */}
      <div
        className="relative px-3 py-4 bg-cover rounded-lg"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(000, 000, 000, 0), rgba(000, 000, 000, 0.6)), url(${imgUrl})`,
          height: "340px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="absolute left-4 right-4 bottom-6">
          <h4 className="text-4xl font-bold text-white">
            {topUpperCase(category)}s
          </h4>
          <button className="w-full py-2 mt-5 font-bold text-white border-2 border-white rounded-md">
            See all
          </button>
        </div>
      </div>

      {/* item */}
      {productList.map((item, index) => {
        return index < 3 ? (
          <div
            key={index}
            className="rounded-lg "
            style={{
              height: "340px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <img src={item.images[0]} alt="barang" className="mx-auto w-52" />

            <div className="mx-2 mb-3 bg-gray-300" style={{ height: 1 }} />

            <div id={`information trending` + index} className="px-3">
              <p className="text-sm font-medium">{item.name}</p>
              <p className="mt-1 text-base" style={{ color: "#04E56E" }}>
                {item.price}
              </p>

              {/* button and star */}
              <div className="flex justify-between mt-2">
                {/* love and star */}
                <div className="flex gap-x-2">
                  <img src={Love} alt="Love Icon" className="h-5 my-auto" />

                  <div className="flex align-middle gap-x-1">
                    <img src={Star} alt="Star Icon" className="h-5 my-auto" />
                    <p className="my-auto text-sm font-bold text-gray-400">
                      {item.rating}
                    </p>
                  </div>
                </div>

                <button
                  className="px-6 py-1 font-bold text-white rounded-md"
                  style={{
                    background:
                      "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
                  }}
                >
                  BUY
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
}

export default CateygoriedItem;

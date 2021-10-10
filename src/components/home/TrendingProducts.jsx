import React, { useState, useEffect } from "react";
import { GET_LIST_TRENDING_PRODUCT } from "../../api.documentation";
import { BsArrowRight } from "react-icons/bs";
import Love from "./../../images/LoveIcon.svg";
import Star from "./../../images/StarIcon.svg";

const TrendingProducts = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await GET_LIST_TRENDING_PRODUCT().then(
        (res) => res.data.body
      );
      setProductList(data);
      // console.log(data);
    })();
  }, []);

  // console.log(productList);

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

      <div className="grid grid-cols-4 gap-x-5">
        {/* grid */}
        {productList.map((item, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;

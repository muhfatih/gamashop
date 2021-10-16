import React, { useState, useEffect } from 'react'
import { GET_LIST_TRENDING_PRODUCT } from "../../api.documentation";
import Love from "./../../images/LoveIcon.svg";
import Star from "./../../images/StarIcon.svg";

function Products() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await GET_LIST_TRENDING_PRODUCT().then(
                (res) => res.data.body
            );
            setProductList(data);
        })();
    }, []);

    return (
        <div className="w-full flex-sc col gap-8">
            <div className="w-full flex-bc mb-6">
                <p className="text-3xl font-bold">Manage Product</p>
                <button style={{
                    background:
                        "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
                }} className="px-6 py-1 text-sm font-bold text-white rounded-md">ADD PRODUCT</button>
            </div>

            <div className="grid grid-cols-3 gap-5">
                {productList.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-lg flex col"
                        style={{
                            height: "360px",
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                        }}
                    >
                        <img src={item.images[0]} alt="barang" className="mx-auto w-52" />

                        <div className="mx-2 mb-3 bg-gray-300" style={{ height: 1 }} />

                        <div id={`item` + index} className="px-3 py-4 flex col justify-between h-full">
                            <p className="text-sm font-medium">{item.name}</p>
                            {/* <p className="mt-1 text-base" style={{ color: "#04E56E" }}>
                                {item.price}
                            </p> */}

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
                                    className="px-6 py-1 text-sm font-bold text-white rounded-md"
                                    style={{
                                        background:
                                            "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
                                    }}
                                >
                                    EDIT
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Products

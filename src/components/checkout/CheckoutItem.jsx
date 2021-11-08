import React, { useState } from 'react';
import Waifu from "../../images/waifu.jpg";

const CheckoutItem = () => {
    return (
        <div className="flex justify-between p-4 my-4 bg-white border rounded-xl">
            <div className="flex">
                <img
                    src={Waifu}
                    alt="product image"
                    style={{ width: 100, height: 100 }} />

                <div className="flex-col ml-4">
                    <h4 className="text-lg font-semibold">Nama produk</h4>
                    <div className="flex-col mt-6 text-gray-300">
                        <h5>Size    : ...</h5>
                        <h5>Color   :</h5>
                    </div>
                </div>
            </div>
            <h4 className="text-lg font-semibold">4 items</h4>
            <h4 className="text-lg font-semibold" style={{
                background: "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
                "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"
            }}>IDR 400.000</h4>
        </div>
    )
}

export default CheckoutItem;
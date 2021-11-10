import React, { useState } from 'react';
import { currencyFormatter } from 'src/core/utils/formatter';

const CheckoutItem = ({ image, productName, price, amount }) => {
    return (
        <div className="flex justify-between p-4 my-4 bg-white border rounded-xl">
            <div className="flex">
                <img
                    src={image}
                    alt="product image"
                    style={{ width: 100, height: 100 }} />

                <div className="flex-col ml-4">
                    <h4 className="text-lg font-semibold">{productName}</h4>
                </div>
            </div>
            <h4 className="text-lg font-semibold">{amount} items</h4>
            <h4 className="text-lg font-semibold" style={{
                background: "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
                "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"
            }}>{currencyFormatter.format(price * amount).split(".")[0]}</h4>
        </div>
    )
}

export default CheckoutItem;
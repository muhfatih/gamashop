import React, { useState, useEffect } from 'react';
import CheckoutItem from 'src/components/checkout/CheckoutItem';
import MainLayout from 'src/components/_layouts/MainLayout';
import axios from "axios";
import { currencyFormatter } from 'src/core/utils/formatter';

const Checkout = () => {

    const [Items, setItems] = useState([]);
    const [Couriers, setCouriers] = useState([]);
    const [CourierCost, setCourierCost] = useState(0);
    const [TotalItemPrice, setTotalItemPrice] = useState(0);
    const [selectedCourier, setSelectedCourier] = useState("");
    const [TotalPrice, setTotalPrice] = useState(0);

    const getItemFromLocalStorage = () => {
        return JSON.parse(window.localStorage.getItem('checkout'));
    }
    console.log(selectedCourier);

    useEffect(() => {
        let totalPrice = 0;

        Items.forEach((element) => {
            totalPrice += element.price * element.amount;
        });
        setTotalItemPrice(totalPrice);
    });

    // useEffect(() => {

    //     setCourierCost()
    // }, [selectedCourier])

    useEffect(() => {
        const items = getItemFromLocalStorage()
        setItems(items);
    }, []);

    useEffect(() => {
        (async () => {
            await axios
                .get(`https://gamaxios.herokuapp.com/courier`)
                .then(function (response) {
                    setCouriers(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        })();
    }, []);

    return (
        <MainLayout>
            {/* Title */}
            <div className="mt-10 text-xl font-bold">
                <h2 className="text-center">Checkout</h2>
            </div>
            {/* Items */}
            <div className="px-4 py-4 mt-6">
                {Items.map((item, i) => (
                    <CheckoutItem
                        key={i}
                        image={item.images[0]}
                        productName={item.name}
                        price={item.price}
                        amount={item.amount} />
                ))}

            </div>
            <div className="flex justify-between ">
                {/* Address */}
                <div className="flex-grow ">
                    <div className="flex my-6 ml-5">
                        <h2 className="mt-2 mr-4 text-xl font-bold">Address</h2>
                        <textarea className="p-2 border" rows="6" cols="30" placeholder="Masukkan alamat Anda disini.." />
                    </div>
                </div>

                <div className="justify-end flex-grow pt-5 pr-6">
                    {/* Kurir */}
                    {Couriers.map((item, i) => (
                        <div className="flex justify-between mb-4" key={i}>
                            <div className="flex pt-1">
                                <div className="w-4 h-4 mt-1 mr-3 rounded-full" onClick={() => {
                                    setSelectedCourier(item.courierID)
                                    setCourierCost(item.price)
                                }} style={{
                                    background: selectedCourier === item.courierID ? "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)" : "#ddd"
                                }} />
                                <p>{item.courierName}</p>
                            </div>
                            <h3 className="text-2xl font-semibold" style={{
                                background: "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
                                "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"
                            }}>{currencyFormatter.format(item.price).split(".")[0]}</h3>
                        </div>
                    ))}
                    {/* Total harga */}
                    <div className="flex justify-end mt-16">
                        <h2 className="mr-4 text-xl font-bold ">Total</h2>
                        <h3 className="text-2xl font-semibold" style={{
                            background: "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
                            "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent"
                        }}>{currencyFormatter.format(CourierCost + TotalItemPrice).split(".")[0]}</h3>
                    </div>
                    <div className="flex justify-end mb-6">
                        <button
                            className="py-2 mt-4 text-xl font-bold text-white rounded-xl px-14"
                            style={{
                                background: "linear-gradient(90.6deg, #04ED49 0%, #00C5F2 100%)",
                            }}
                            onClick={() => { }}>
                            Bayar
                        </button>
                    </div>

                </div>
            </div>

        </MainLayout>
    );
}

export default Checkout;
import React, { useState, useEffect } from "react";
import MainLayout from "src/components/_layouts/MainLayout";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Waifu from "src/images/waifu.jpg";

function AddItem() {
  const [barang, setBarang] = useState({
    nama: "",
    harga: 0,
    jumlah: 0,
    deskripsi: "",
  });

  const handleNamaChange = (newData) => {
    setBarang({ ...barang, nama: newData });
  };

  const handleHargaBarang = (newData) => {
    setBarang({ ...barang, harga: newData });
  };

  const handleJumlahBarang = (newData) => {
    setBarang({ ...barang, jumlah: newData });
  };

  const handleDeskripsiBarang = (newData) => {
    setBarang({ ...barang, deskripsi: newData });
  };

  //   tinggal nunggu api
  const handleClick = async () => {
    alert(barang.nama + barang.jumlah + barang.harga + barang.deskripsi);
    // const data = await axios
    //   .post(`https://gamaxios.herokuapp.com/product/${id}`)
    //   .then(function (response) {
    //     alert("Data Berhasil Ditambahkan");
    //   })
    //   .catch(function (error) {
    //     alert(`Data gagal ditambahkan ${error}`);
    //   })
    //   .then(function () {
    //     <Redirect to="/addItem" />;
    //   });
  };

  return (
    <MainLayout>
      <div className="pb-40 mx-40 my-10 px-7 pt-7">
        <h3 className="text-xl font-bold text-center">Tambah Item</h3>

        <div className="flex justify-start ">
          <div className="w-96">
            <img src={Waifu} alt="" />
          </div>

          <div className="w-full ml-10" style={{ background: "#12212" }}>
            <div className="flex flex-col items-start h-515px">
              <h1 className="mt-2 text-sm">Nama Barang</h1>
              <input
                type="text"
                className="w-full p-2 pl-3 mt-2 border-2 border-black rounded-lg"
                placeholder="Masukkan Nama Barang"
                onChange={(e) => handleNamaChange(e.target.value)}
              />

              <h1 className="mt-2 text-sm">Harga Barng</h1>
              <input
                type="number"
                className="w-full p-2 pl-3 border-2 border-black rounded-lg"
                placeholder="Masukkan Harga Barang"
                onChange={(e) => handleHargaBarang(e.target.value)}
              />

              <h1 className="mt-2 text-sm">Masukkan Jumlah Barang</h1>
              <input
                type="number"
                className="w-full p-2 pl-3 border-2 border-black rounded-lg"
                placeholder="Masukkan Jumlah Barang"
                onChange={(e) => handleJumlahBarang(e.target.value)}
              />

              <h1 className="mt-2 text-sm">Deskripsi Barang</h1>
              <textarea
                className="w-full p-2 pl-3 border-2 border-black rounded-lg"
                placeholder="Masukkan Nama Barang"
                onChange={(e) => handleDeskripsiBarang(e.target.value)}
              />

              <button
                type="button"
                onClick={() => handleClick()}
                className="w-full h-10 mt-8 font-bold tracking-wide text-white transition duration-700 ease-in-out transform rounded-lg hover:-translate-y-1 hover:shadow-xl bg-gradient-to-r from-green-400 to-blue-400"
              >
                Tambah Barang
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default AddItem;

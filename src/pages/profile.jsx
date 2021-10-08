import React from "react";
import Photo from "../images/PhotoProfile.svg";

function profile() {
  return (
    <div className="w-full min-h-screen ">
      <div className="top-0 h-48 bg-yellow-300 "> Ceritanya ini Navbar</div>

      <div className="flex h-full">
        <div id="sidebar" className="bg-blue-400 w-72">
          <div id="img-wrapper" className="mt-20 mb-8">
            <img src={Photo} alt="Foto Profil" className="mx-auto" />
          </div>

          <div id="button-wrapper" className="bg-yellow-300 ">
            <button className="px-6 py-3 mb-4 text-white bg-red-600 text-md rounded-xl round">
              Edit Profile
            </button>
            <button className="px-6 py-3 text-white bg-red-600 text-md rounded-xl">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="flex-grow pl-8 pr-16 bg-green-400 pt-14">
          {user.map((item, idx) => (
            <div className="mb-8">
              <h4 className="text-2xl italic font-bold text-red-600">
                {item.label}
              </h4>
              <p className="mt-3 text-2xl">{item.data}</p>
              <div className="w-full h-0.5 bg-red-600"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default profile;

const user = [
  {
    label: "Username",
    data: "Uzumaki Boruto",
  },
  {
    label: "Address",
    data: "Jalan Kaliurang No 5",
  },
  {
    label: "Phone Number",
    data: "+6269969xxxx",
  },
  {
    label: "Email",
    data: "Boruto@gmail.com",
  },
];

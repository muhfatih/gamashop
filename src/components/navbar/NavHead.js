import React from "react";
import { Link } from "react-router-dom";
import {
  RiShoppingBagLine,
  RiNotification3Line,
  RiFileListLine,
} from "react-icons/ri";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { useAuth } from "src/core/contexts";

const NavHead = () => {
  return (
    <div className="container h-24 flex-bc">
      <Link to="/">
        <img src="/img/logo.svg" alt="logo" className="" />
      </Link>
      <SearchBar />
      <ButtonGroup />
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="h-10 flex-cc">
      <input
        type="text"
        className="h-full px-4 bg-white border border-r-0 border-gray-400 w-96"
        placeholder="Search..."
      />
      <button className="w-16 h-full gradient-main flex-cc">
        <FaSearch className="text-xl text-white" />
      </button>
    </div>
  );
};

const ButtonGroup = () => {
  const { status } = useAuth();

  return (
    <div className="flex-cc">
      <div className="gap-2 mr-16 flex-cc">
        <Link to="/cart" className="">
          <RiShoppingBagLine className="text-3xl" />
        </Link>
        <RiNotification3Line className="text-3xl" />
        <RiFileListLine className="text-3xl" />
      </div>

      {
        {
          user: <AuthArea />,
          guest: <AuthButtons />,
        }[status]
      }
    </div>
  );
};

const AuthButtons = () => (
  <div className="gap-2 flex-cc">
    <Link to="/login" className="">
      Login
    </Link>
    <Link to="/signup" className="">
      <div className="block px-3 py-2 bg-green-300 rounded">Signup</div>
    </Link>
  </div>
);

const AuthArea = () => {
  return (
    <Link to="/dashboard" className="flex-cc">
      <div className="w-10 h-10 overflow-hidden rounded-full flex-cc">
        {/* if ada image show image user */}
        <FaUserCircle className="text-gray-400 full" />
      </div>
      <p className="ml-3 font-semibold">Hi, Rizky</p>
    </Link>
  );
};

export default NavHead;

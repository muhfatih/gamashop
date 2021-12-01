import React from "react";
import GuestOnlyRoute from "src/core/routeblocks/GuestOnlyRoute";
import Splash from "./../images/Splash.png";
import { Link } from "react-router-dom";
import useForm from "src/core/hooks/useForm";
import { useAuth } from "src/core/contexts";

const Login = () => {
  const { authMethods } = useAuth();
  const { form, mutateForm, resetForm } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const result = await authMethods.login({
      email: form.email,
      password: form.password,
    });
    console.log(result);
  };
  return (
    <GuestOnlyRoute redirect="/dashboard">
      <div className="relative flex flex-row justify-center items-start p-20 w-screen h-screen">
        <div className="flex flex-col items-start w-3/12 h-515px">
          <h1 className="mt-8 text-5xl font-bold text-black">Login</h1>
          <h1 className="mt-12 text-sm">Email</h1>
          <input
            value={form.email}
            onChange={mutateForm}
            name="email"
            type="text"
            className="p-2 pl-3 mt-2 w-full rounded-lg border-2 border-black"
            placeholder="Masukkan Email"
          ></input>
          <h1 className="mt-4 text-sm">Password</h1>
          <input
            value={form.password}
            onChange={mutateForm}
            name="password"
            type="password"
            className="p-2 pl-3 mt-2 w-full rounded-lg border-2 border-black h-42px"
            placeholder="Masukkan Password"
          ></input>
          <button
            onClick={handleSubmit}
            type="button"
            className="mt-8 w-full h-10 font-bold tracking-wide text-white bg-gradient-to-r from-green-400 to-blue-400 rounded-lg transition duration-700 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
          >
            Login
          </button>
          <div className="flex flex-row justify-between items-start mt-8 full">
            <div className="text-xs font-bold">Don't have an account?</div>
            <button type="button" className="text-xs">
              Forgot password?
            </button>
          </div>
          <Link to="/signup" className="full">
            <button
              type="button"
              className="mt-6 w-full h-10 font-bold tracking-wide text-white bg-gradient-to-r from-gray-600 to-black rounded-lg transition duration-700 ease-in-out hover:-translate-y-1 hover:shadow-xl"
            >
              <p>Register</p>
            </button>
          </Link>

          <Link to="/dashboard" className="mt-6 w-full h-full">
            Back
          </Link>
        </div>
        <Link
          to="/seller/login"
          className="relative flex flex-col ml-20 rounded-lg w-464px h-532px"
        >
          <img
            src={Splash}
            alt="Splash"
            className="relative w-full transition duration-700 ease-in-out h-90px ml-38px mt-38px hover:-translate-y-1 hover:shadow-xl"
          ></img>
        </Link>
      </div>
    </GuestOnlyRoute>
  );
};

export default Login;

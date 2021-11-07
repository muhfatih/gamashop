import React from "react";
import GuestOnlyRoute from "./../core/routeblocks/GuestOnlyRoute";
import Splash from "./../images/Splash.png";
import { Link } from "react-router-dom";
import gamaxios from "../api.documentation";
import useForm from "src/core/hooks/useForm";
import { useAuth } from "src/core/contexts";

const SignUp = () => {
  const { authMethods } = useAuth();
  const { form, mutateForm, resetForm } = useForm({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async () => {
    if (form.password !== form.confirmPassword) {
      console.log("nggak sama");
      return;
    }

    const result = await authMethods.signup({
      name: form.name,
      email: form.email,
      password: form.password,
    });
    console.log(result);
  };

  return (
    <GuestOnlyRoute redirect="/dashboard">
      <div className="relative flex flex-row items-start justify-center w-screen h-screen p-10">
        <div className="flex flex-col items-start w-3/12">
          <h1 className="mt-4 text-5xl font-bold text-black">Register</h1>
          <h1 className="mt-8 text-sm">Email</h1>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={mutateForm}
            className="w-full p-2 pl-3 mt-2 border-2 border-black rounded-lg"
            placeholder="Masukkan Email"
          />
          <h1 className="mt-4 text-sm">Name</h1>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={mutateForm}
            className="w-full p-2 pl-3 mt-2 border-2 border-black rounded-lg"
            placeholder="Masukkan Nama"
          />
          <h1 className="mt-4 text-sm">Password</h1>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={mutateForm}
            className="w-full p-2 pl-3 mt-2 border-2 border-black rounded-lg"
            placeholder="Masukkan Password"
          />
          <h1 className="mt-4 text-sm">Confirm Password</h1>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={mutateForm}
            className="w-full p-2 pl-3 mt-2 border-2 border-black rounded-lg"
            placeholder="Konfirmasi Password"
          />
          <button
            type="submit"
            className="w-full h-10 mt-8 font-bold tracking-wide text-white transition duration-700 ease-in-out rounded-lg bg-gradient-to-r from-green-400 to-blue-400 hover:-translate-y-1 hover:shadow-xl"
            onClick={handleSubmit}
          >
            Register
          </button>
          <h1 className="mt-5 text-xs font-bold text-center full">
            Already have an account?
          </h1>

          <Link to="/login" className="w-full h-full">
            <button
              type="button"
              className="w-full h-10 mt-4 font-bold tracking-wide text-white transition duration-700 ease-in-out rounded-lg bg-gradient-to-r from-gray-600 to-black hover:-translate-y-1 hover:shadow-xl"
            >
              Login
            </button>
          </Link>

          <Link to="/dashboard">Back</Link>
        </div>
        <Link to="/seller/signup">
          <div className="mt-20 ml-20 transition duration-700 ease-in-out w-464px h-648px hover:-translate-y-1 hover:shadow-xl">
            <img src={Splash} alt="Splash"></img>
          </div>
        </Link>
      </div>
    </GuestOnlyRoute>
  );
};

export default SignUp;

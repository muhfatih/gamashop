import React from "react";
import GuestOnlyRoute from "src/core/routeblocks/GuestOnlyRoute";
import Splash2 from "src/images/Splash2.png";
import { Link } from "react-router-dom";
import { useAuth } from "src/core/contexts";
import useForm from "src/core/hooks/useForm";

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
      <div className="relative flex flex-row justify-center items-start p-10 w-screen h-screen">
        <div className="flex flex-col items-start w-3/12">
          <h1 className="mt-4 text-5xl font-bold text-black">Register</h1>
          <h1 className="mt-8 text-sm">Email</h1>
          <input
            value={form.email}
            onChange={mutateForm}
            name="email"
            type="text"
            className="p-2 pl-3 mt-2 w-full rounded-lg border-2 border-black"
            placeholder="Masukkan Email"
          ></input>
          <h1 className="mt-4 text-sm">Name</h1>
          <input
            value={form.name}
            onChange={mutateForm}
            name="name"
            type="text"
            className="p-2 pl-3 mt-2 w-full rounded-lg border-2 border-black"
            placeholder="Masukkan Nama"
          ></input>
          <h1 className="mt-4 text-sm">Password</h1>
          <input
            value={form.password}
            onChange={mutateForm}
            name="password"
            type="password"
            className="p-2 pl-3 mt-2 w-full rounded-lg border-2 border-black"
            placeholder="Masukkan Password"
          ></input>
          <h1 className="mt-4 text-sm">Confirm Password</h1>
          <input
            value={form.confirmPassword}
            onChange={mutateForm}
            name="confirmPassword"
            type="password"
            className="p-2 pl-3 mt-2 w-full rounded-lg border-2 border-black"
            placeholder="Konfirmasi Password"
          ></input>
          <button
            onClick={handleSubmit}
            type="button"
            className="mt-8 w-full h-10 font-bold tracking-wide text-white bg-gradient-to-r from-green-400 to-blue-400 rounded-lg transition duration-700 ease-in-out hover:-translate-y-1 hover:shadow-xl"
          >
            Register
          </button>
          <h1 className="mt-5 text-xs font-bold text-center full">
            Already have an account?
          </h1>

          <Link to="/seller/login" className="w-full h-full">
            <button
              type="button"
              className="mt-4 w-full h-10 font-bold tracking-wide text-white bg-gradient-to-r from-gray-600 to-black rounded-lg transition duration-700 ease-in-out hover:-translate-y-1 hover:shadow-xl"
            >
              Login
            </button>
          </Link>

          <Link to="/dashboard">Back</Link>
        </div>

        <Link to="/signup" className="mt-20 ml-20 w-464px h-648px">
          <div className="transition duration-700 ease-in-out hover:-translate-y-1 hover:shadow-xl">
            <img src={Splash2} alt="Splash2"></img>
          </div>
        </Link>
      </div>
    </GuestOnlyRoute>
  );
};

export default SignUp;

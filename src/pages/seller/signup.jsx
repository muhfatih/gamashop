import React from "react";
import GuestOnlyRoute from "src/core/routeblocks/GuestOnlyRoute";
import Splash2 from "src/images/Splash2.png";
import { Link } from 'react-router-dom'

const SignUp = () => {
  return  (
	<GuestOnlyRoute redirect="/dashboard">
		<div className="flex items-start flex-row justify-center relative p-10 w-screen h-screen">
					<div className="w-3/12 flex flex-col items-start">
						<h1 className="font-bold text-5xl text-black mt-4">
							Register
							</h1>
						<h1 className="text-sm mt-8">
							Email
							</h1>
						<input type="text" className="mt-2 w-full border-2 border-black rounded-lg p-2 pl-3" placeholder="Masukkan Email">
							</input>
						<h1 className="text-sm mt-4">
							Name
							</h1>
						<input type="text" className="mt-2 w-full border-2 border-black rounded-lg p-2 pl-3" placeholder="Masukkan Nama">
							</input>
						<h1 className="text-sm mt-4">
							Password
							</h1>
						<input type="password" className="mt-2 w-full border-2 border-black rounded-lg p-2 pl-3" placeholder="Masukkan Password">
							</input>
						<h1 className="text-sm mt-4">
							Confirm Password
							</h1>
						<input type="password" className="mt-2 w-full border-2 border-black rounded-lg p-2 pl-3" placeholder="Konfirmasi Password">
							</input>
						<button type="button" className="mt-8 w-full h-10 text-white font-bold tracking-wide bg-gradient-to-r from-green-400 to-blue-400 rounded-lg transition ease-in-out duration-700 hover:-translate-y-1 hover:shadow-xl">
							Register
							</button>
						<h1 className="font-bold text-xs mt-5 text-center full">
							Already have an account?
							</h1>
						 
						 <Link to="/seller/login" className="w-full h-full">
							 <button type="button" className="w-full mt-4 h-10 text-white font-bold tracking-wide bg-gradient-to-r from-gray-600 to-black rounded-lg transition ease-in-out duration-700 hover:-translate-y-1 hover:shadow-xl">
								 Login
								</button>
							</Link>	
							
						 <Link to="/dashboard">Back</Link>	
					</div>
					
					<Link to="/signup" className="w-464px h-648px ml-20 mt-20">
					<div className="transition ease-in-out duration-700 hover:-translate-y-1 hover:shadow-xl">
						<img src={Splash2} alt="Splash2" ></img>
						
					</div>
					</Link>
			</div>
	</GuestOnlyRoute>
  );
}

export default SignUp;
